//Thư viện Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./app/BTTH4/LoginScreen";
import SignUpScreen from "./app/BTTH4/SignUpScreen";
import ProductScreen from "./app/BTTH4/ProductScreen";
import TabNavigator from "./app/BTTH4/TabNavigator";

//Khai báo
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{
          headerShown: false
          // title: '',
          // headerBackTitleVisible: false,
          // headerShadowVisible: false,
        }} />
        <Stack.Screen name="ProductScreen" component={TabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}