import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoryScreen from './CategoryScreen';
import ItemScreen from './ItemScreen';
import ItemDetailScreen from './ItemDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Categories"
        screenOptions={{
          headerBackTitleVisible: true, // Global setting for back title visibility
        }}>
        <Stack.Screen
          name="Categories"
          component={CategoryScreen}
          options={{
            title: 'Loại hoa',
            headerBackTitleVisible: false,
            headerTitleAlign: 'center'
          }} />
        <Stack.Screen
          name="Items"
          component={ItemScreen}
          options={{
            title: 'Hoa',
            headerTitleAlign: 'center',
            headerBackTitle: 'Loại hoa',
            headerBackTitleVisible: true
          }} />
        <Stack.Screen
          name="ItemDetail"
          component={ItemDetailScreen}
          options={{
            title: 'Chi tiết hoa',
            headerTitleAlign: 'center',
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
