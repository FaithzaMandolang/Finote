import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import KategoriKebutuhan from '../../../pages/KategoriKebutuhan';
import CustomTabBar from './CustomTabBar';
import DshbrdPemasukan from '../../../pages/Pemasukan/DshbrdPemasukan';
import RiwayatPengeluaran from '../../../pages/RiwayatPengeluaran';
import Detail from '../../../pages/Pemasukan/Detail';
import ProfilePage from '../../../pages/Profile';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="Dashboard" component={Detail} />
      <Tab.Screen name="Wallet" component={KategoriKebutuhan} />
      <Tab.Screen name="Add" component={DshbrdPemasukan} />
      <Tab.Screen name="History" component={RiwayatPengeluaran} />
      <Tab.Screen name="Profile" component={ProfilePage} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
