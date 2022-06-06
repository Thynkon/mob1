import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import NewsScreen from './screens/NewsScreen';
import WalletScreen from './screens/WalletScreen';
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { DIMENSIONS } from '../app/styles/dimensions';
import { createStackNavigator } from '@react-navigation/stack';
import EditProfileScreen from './screens/EditProfileScreen';
import ProfileScreen from './screens/ProfileScreen';
import AddNewsScreen from './screens/news/Add';
import EditNewsScreen from './screens/news/Edit';
import DetailsNewsScreen from './screens/news/Details';

// import ProfileStack from '../components/Profile';

//Screen names
const newsName = "News";
const walletName = "Wallet";
const profileName = "Profile";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Personnal Informations" component={ProfileScreen}
        options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: '#DCDCDC',
          },
          headerRight: () => (
            <Pressable style={styles.editButton} onPress={() => navigation.navigate('EditProfile')}>
              <Ionicons style={styles.icon} name="pencil" size={30} />
            </Pressable>
          ),
        })} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen}
        options={({ navigation }) => ({
          title: "Edit"
        })} />
    </Stack.Navigator>
  );
}

export function NewsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="News" component={NewsScreen}
        options={({ navigation }) => ({
          title: "List of news",
          headerStyle: {
            backgroundColor: '#DCDCDC',
          },
          headerRight: () => (
            <Pressable style={styles.editButton} onPress={() => navigation.navigate('AddNews')}>
              <Ionicons style={styles.icon} name="add" size={30} />
            </Pressable>
          ),
        })} />
      <Stack.Screen name="AddNews" component={AddNewsScreen}
        options={({ navigation }) => ({
          title: "Add news"
        })} />
      <Stack.Screen name="EditNews" component={EditNewsScreen}
        options={({ navigation }) => ({
          title: "Edit"
        })} />
      <Stack.Screen name="DetailsNews" component={DetailsNewsScreen}
        options={({ navigation }) => ({
          title: "Details"
        })} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
  header: {
    backgroundColor: "#DCDCDC",
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "#000000",
    fontWeight: '600',
  },
  editButton: {
    marginRight: 10,
  },
  userInfo: {
    fontSize: 16,
    color: "#778899",
    fontWeight: '600',
  },
  body: {
    backgroundColor: "#778899",
    height: '100%',
    // alignItems: 'center',
    width: '100%',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingLeft: '20%',
    left: 0,
  },
  infoContent: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 5,
  },
  iconContent: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: '5%',
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: "#FFFFFF",
  },
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
    width: '100%',
  },
  label: {
    fontSize: DIMENSIONS.fontSize,
    margin: DIMENSIONS.margin,
  },
  button: {
    margin: DIMENSIONS.margin,
    height: DIMENSIONS.height,
    with: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    backgroundColor: '#000',
  },
  form: {
    width: '80%',
    padding: 10,
    flex: 1,
    flexDirection: 'column',
    marginRight: '30%',
  },
  text: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    with: '100%',
  },
  message: {
    height: DIMENSIONS.height,
  }
});

export default function MainContainer() {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      initialRouteName={newsName}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === newsName) {
            iconName = focused ? 'newspaper' : 'newspaper-outline';
          } else if (rn === walletName) {
            iconName = focused ? 'wallet' : 'wallet-outline';
          } else if (rn === profileName) {
            iconName = focused ? 'person' : 'person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        "tabBarActiveTintColor": "tomato",
        "tabBarInactiveTintColor": "grey",
        "tabBarLabelStyle": {
          "paddingBottom": 10,
          "fontSize": 10
        },
        "tabBarStyle": [
          {
            "display": "flex"
          },
          null
        ]
      })}>

      <Tab.Screen name={newsName} component={NewsStack} />
      <Tab.Screen name={walletName} component={WalletScreen} />
      <Tab.Screen name={profileName} component={ProfileStack} />

    </Tab.Navigator>
    // </NavigationContainer>
  );
}
