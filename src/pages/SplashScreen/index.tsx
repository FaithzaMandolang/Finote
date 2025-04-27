import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Finote} from '../../assets';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={Finote} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#061C3D',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
