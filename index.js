/**
 * @format
 */

import {AppRegistry} from 'react-native';

import App from './App';
import './src/config/Firebase';
import {name as appName} from './app.json';
import RiwayatPengeluaran from './src/pages/RiwayatPengeluaran';
import KategoriKebutuhan from './src/pages/KategoriKebutuhan';
import BuatKebutuhan from './src/pages/BuatKategori';
import Pengeluaran from './src/pages/Pengeluaran';

AppRegistry.registerComponent(appName, () => App);
