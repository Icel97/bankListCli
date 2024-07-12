/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BankList from './src/components/BankList';
import BankDetail from './src/components/BankDetail';

type RootStackParamList = {
  BankList: undefined;
  BankDetail: undefined;
};


const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BankList"
          component={BankList}
          options={{ title: 'Lista de bancos' }}
        />
        <Stack.Screen
          name="BankDetail"
          component={BankDetail}
          options={{ title: 'Detalle del banco' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
