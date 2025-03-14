/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


// import {Input} from '@snowflake-ui/mobile/Input';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from 'packages/auth/authProvider'; // Import from shared package
import Dashboard from './src/screens/Dashboard';
import Login from './src/screens/Login';
import { enableScreens } from 'react-native-screens';

// Enable react-native-screens for better performance
enableScreens();

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;

