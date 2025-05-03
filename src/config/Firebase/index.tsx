// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDJuvdcOlmc38XMOLjYrkagGrpuwQaq7HY',
  authDomain: 'finote-2942a.firebaseapp.com',
  projectId: 'finote-2942a',
  storageBucket: 'finote-2942a.firebasestorage.app',
  messagingSenderId: '137468922956',
  appId: '1:137468922956:web:b0b6c9514386507a73f8e9',
  measurementId: 'G-GK0CQRG5WT',
  databaseURL: 'https://finote-2942a-default-rtdb.firebaseio.com/',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
