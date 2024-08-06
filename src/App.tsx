// Import Modules
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Screens
import FamCareIntro from './screens/FamCareIntro';
import FamCareHistory from './screens/FamCareHistory';
import FamCareTicket from './screens/FamCareTicket';

// Import Types
import { RootStackParamList } from './utils/Interfaces';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="FamCareIntro">
          <Stack.Screen
            name="FamCareIntro"
            component={FamCareIntro}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FamCareHistory"
            component={FamCareHistory}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FamCareTicket"
            component={FamCareTicket}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
