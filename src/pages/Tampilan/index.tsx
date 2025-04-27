import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Finote} from '../../assets';
import Gap from '../../components/atoms/Gap';
import React from 'react';

export default function WelcomePage({navigation}) {
  return (
    <View style={styles.container}>
      <Image source={Finote} style={styles.logo} resizeMode="contain" />
      <Gap height={10} />
      <Text style={styles.title}>SELAMAT DATANG</Text>
      <Gap height={40} />
      <Text style={styles.description}>
        Aplikasi ini memiliki fitur untuk mencatat pemasukan, membagi dana ke
        dalam kategori, dan memantau pengeluaran secara detail. Dengan sistem
        pembagian yang fleksibel dan pengingat sisa dana, Anda bisa mengatur
        uang dengan lebih bijak dan capai target keuangan Anda.
      </Text>
      <Gap height={80} />
      <TouchableOpacity
        style={[styles.button, styles.loginButton]}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Gap height={47} />
      <TouchableOpacity
        style={[styles.button, styles.registerButton]}
        onPress={() => navigation.navigate('Register')}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  logo: {
    height: 394,
    width: 394,
    marginTop: -120,
  },
  title: {
    height: 36,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#00AEEF',
    textAlign: 'center',
    marginTop: -90,
  },
  description: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  },
  button: {
    width: '80%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#061C3D',
  },
  registerButton: {
    backgroundColor: '#2196F3',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
