import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import { createContext, useContext, useEffect, useMemo, useReducer, useState } from 'react';
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import 'react-native-gesture-handler';

import { config } from "./config";
import MainContainer from './navigation/MainContainer';

const AuthContext = createContext('light');

function SplashScreen() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}

function SignInScreen() {
  const { signIn } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const DIMENSIONS = {
    margin: 12,
    height: 35,
    fontSize: 15,
  };

  const styles = StyleSheet.create({
    title: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontStyle: 'italic',
      fontSize: DIMENSIONS.fontSize * 2,
    },
    input: {
      height: DIMENSIONS.height,
      margin: DIMENSIONS.margin,
      borderWidth: 1,
      borderRadius: 3,
      padding: 10,
      fontSize: DIMENSIONS.fontSize,
      backgroundColor: '#fff',
    },
    label: {
      fontSize: DIMENSIONS.fontSize,
      margin: DIMENSIONS.margin,
    },
    button: {
      margin: DIMENSIONS.margin,
      height: DIMENSIONS.height,
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      backgroundColor: '#000',
    },
    form: {
      width: '100%',
      padding: 10,
    },
    text: {
      color: 'white',
      textTransform: 'uppercase',
      fontWeight: 'bold',
    },
    message: {
      height: DIMENSIONS.height,
    }
  });

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Nextep</Text>
      <Text style={[styles.error, styles.label]}>{message}</Text>
      <TextInput placeholder="Email" style={styles.input} onChangeText={(newUsername) => setUsername(newUsername)} />
      <TextInput placeholder="Password" secureTextEntry={true} style={styles.input} onChangeText={(newPassword) => setPassword(newPassword)} />
      <Pressable style={styles.button} onPress={() => signIn(username, password)}>
        <Text style={styles.text}>Login</Text>
      </Pressable>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App({ navigation }) {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        // Restore token stored in `SecureStore` or any other encrypted storage
        userToken = await AsyncStorage.getItem('auth-token');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);
  const authContext = useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token
        axios.post(config.api_url + "/me/token", {
          'username': data.username,
          'password': data.password
        }).then(async (response) => {
          await AsyncStorage.setItem('auth_token', response.data);

          //this.setState({ message: 'User successfully authenticated!' });
        }).catch(err => {
          if (err.response.status === 401) {
            //   this.setState({ message: 'Authentication failed! Please check your credentials and try again.' });
          }
        });

        dispatch({ type: 'SIGN_IN', token: 'auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'auth-token' });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          {state.isLoading ? (
            // We haven't finished checking for the token yet
            <Stack.Screen name="Splash" component={SplashScreen} />
          ) : state.userToken == null ? (
            // No token found, user isn't signed in
            <Stack.Screen
              name="SignIn"
              component={SignInScreen}
              //component={AuthenticationForm}
              options={{
                title: 'Sign in',
                // When logging out, a pop animation feels intuitive
                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
              }}
            />
          ) : (
            // User is signed in
            <Stack.Screen name="Main" component={MainContainer} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}