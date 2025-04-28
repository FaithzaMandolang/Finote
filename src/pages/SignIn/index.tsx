import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Finote} from '../../assets';
import Gap from '../../components/atoms/Gap';
import Button from '../../components/atoms/Button';
import TextInput from '../../components/molecules/TextInput';
import {Google} from '../../assets';

export default function LoginPage({navigation}) {
  return (
    <View style={styles.container}>
      <Image source={Finote} style={styles.logo} resizeMode="contain" />
      <Gap height={20} />
      <Text style={styles.title}>Login</Text>
      <Gap height={70} />

      {/* Gambar Google sebagai tombol */}
      <TouchableOpacity onPress={() => console.log('Google Button Pressed')}>
        <Image source={Google} style={styles.googleIcon} />
      </TouchableOpacity>
      <Gap height={20} />

      <TextInput placeholder="Your Email" keyboardType="email-address" />
      <Gap height={20} />

      <TextInput placeholder="Password" secureTextEntry />
      <Gap height={30} />

      <Button
        label="Login"
        onPress={() => navigation.navigate('ProfilePage')}
        height={55}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  logo: {
    height: 394,
    width: 394,
    marginTop: -170,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#00AEEF',
    textAlign: 'center',
    marginTop: -130,
  },
  googleIcon: {
    width: 30,
    height: 30,
  },
});
