import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SplashScreen from './src/pages/SplashScreen';
import DshbrdPemasukan from './src/components/molecules/Pemasukan/DshbrdPemasukan';
import AddPemasukan from './src/components/molecules/Pemasukan/AddPemasukan';
import Detail from './src/components/molecules/Pemasukan/Detail';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DshbrdPemasukan"
          component={DshbrdPemasukan}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddPemasukan"
          component={AddPemasukan}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
