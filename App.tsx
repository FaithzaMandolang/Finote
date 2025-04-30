import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SplashScreen from './src/pages/SplashScreen';
import AddPemasukan from './src/pages/Pemasukan/AddPemasukan';
import Detail from './src/pages/Pemasukan/Detail';
import WelcomePage from './src/pages/Tampilan/index';
import SignUpPage from './src/pages/SignUp/index';
import LoginPage from './src/pages/SignIn/index';
import Settings from './src/pages/Settings';
import Dashboard from './src/pages/Dshbrd/index';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import transaksiDetail from './src/pages/Pemasukan/TransaksiDetail';
import BuatKebutuhan from './src/pages/BuatKategori';
import BottomTabs from './src/components/molecules/BottomTabs';
import DshbrdPemasukan from './src/pages/Pemasukan/DshbrdPemasukan';
import Pengeluaran from './src/pages/Pengeluaran';
import KategoriKebutuhan from './src/pages/KategoriKebutuhan';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WelcomePage"
          component={WelcomePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUpPage"
          component={SignUpPage}
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
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="transaksiDetail"
          component={transaksiDetail}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="BuatKebutuhan"
          component={BuatKebutuhan}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Pengeluaran"
          component={Pengeluaran}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="KategoriKebutuhan"
          component={KategoriKebutuhan}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DshbrdPemasukan"
          component={DshbrdPemasukan}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
