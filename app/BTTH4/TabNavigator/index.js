import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import LoginScreen from "../LoginScreen";
import ProductScreen from "../ProductScreen";
import SignUpScreen from "../SignUpScreen";
import styles from './styles';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'LoginScreen') {
            iconName = 'home';
          } else if (route.name === 'ProductScreen') {
            iconName = 'shopping-cart';
          } else if (route.name === 'SignUpScreen') {
            iconName = 'person';
          }
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: styles.container,
        headerShown: false,
      })}
    >
      <Tab.Screen name="LoginScreen" component={LoginScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarStyle: { display: 'none' }
        }} />
      <Tab.Screen name="ProductScreen" component={ProductScreen}
        options={{
          tabBarLabel: 'Cart',
        }} />
      <Tab.Screen name="SignUpScreen" component={SignUpScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarStyle: { display: 'none' }
        }} />
    </Tab.Navigator>
  );
}