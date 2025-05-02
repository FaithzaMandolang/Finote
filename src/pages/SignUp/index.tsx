import {Text, View, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Finote} from '../../assets';
import Gap from '../../components/atoms/Gap';
import Button from '../../components/atoms/Button';
import TextInput from '../../components/molecules/TextInput';

export default function SignUpPage({navigation}) {
  return (
    <View style={styles.container}>
      <Image source={Finote} style={styles.logo} resizeMode="contain" />
      <Gap height={20} />
      <Text style={styles.title}>SignUp</Text>
      <Gap height={30} />

      <View style={styles.inputWrapper}>
        <TextInput placeholder="Your Name" />
        <Gap height={20} />

        <TextInput placeholder="Your Email" keyboardType="email-address" />
        <Gap height={20} />

        <TextInput placeholder="Password" secureTextEntry />
        <Gap height={20} />

        <TextInput placeholder="Re-Password" secureTextEntry />
      </View>
      <Gap height={30} />

      <Button
        label="SignUp"
        onPress={() => navigation.navigate('LoginPage')}
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
    marginTop: -70,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#00AEEF',
    textAlign: 'center',
    marginTop: -90,
  },
  inputWrapper: {
    width: '100%',
  },
});
