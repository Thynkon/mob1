import { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import NewsScreen from './screens/NewsScreen';
import WalletScreen from './screens/WalletScreen';
import ProfileScreen from './screens/ProfileScreen';

//Screen names
const newsName = "News";
const walletName = "Wallet";
const profileName = "Profile";

const Tab = createBottomTabNavigator();

export default class MainContainer extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={newsName}
          screenOptions={({ route }) => ({
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
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'grey',
            labelStyle: { paddingBottom: 10, fontSize: 10 },
            style: { padding: 10, height: 70 }
          }}>

          <Tab.Screen name={newsName} component={NewsScreen} />
          <Tab.Screen name={walletName} component={WalletScreen} />
          <Tab.Screen name={profileName} component={ProfileScreen} />

        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
