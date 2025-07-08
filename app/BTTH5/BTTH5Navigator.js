import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BookListScreen from './BookListScreen';
import BookDetailScreen from './BookDetailScreen';
import { AntDesign } from '@expo/vector-icons';

const Stack = createStackNavigator();

export default function BTTH5Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BookList"
          component={BookListScreen}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name="BookDetail"
          component={BookDetailScreen}
          options={{
            title: 'Book Details',
            headerBackImage: () => (<AntDesign name="closecircleo" size={24} color="red" />),
            headerTitleAlign: 'center'
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
