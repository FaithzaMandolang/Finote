// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBICRlYZ1cGpYrjqzorZxSmKD1qEg4tqhQ',
  authDomain: 'finotedb.firebaseapp.com',
  projectId: 'finotedb',
  storageBucket: 'finotedb.firebasestorage.app',
  messagingSenderId: '1089123891727',
  appId: '1:1089123891727:web:42970dac753d0ffea7c17a',
  measurementId: 'G-W7LHVNH5E8',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export default app;
