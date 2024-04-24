import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CabList from './app/components/cabList';
import CabDetailsScreen from './app/components/CabDetailsScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CabList"
          component={CabList}
          options={{ title: 'Available Cabs', headerShown:false }}
        
        />
        <Stack.Screen
          name="CabDetails"
          component={CabDetailsScreen}
          options={{ 
            title: 'Cab Detail',
            headerStyle:{
            backgroundColor:"#f1f5f4"
          },
          headerTitleStyle: {
            color: '#2d7d61',
            fontSize: 25, 
            fontWeight: 'bold',          
          },
          headerTitleAlign: 'center', // Align header title to center
          headerTintColor: '#2d7d61',
          
        }}
        
        />
      </Stack.Navigator>
      
    </NavigationContainer>
    </GestureHandlerRootView>
  );
}
