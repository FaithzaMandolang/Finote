import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Button = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Tambah Pemasukan</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#061C3D',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 29,
    borderRadius: 100,
    marginHorizontal: 112,
    marginVertical: 178,
    elevation: 2,
  },
  buttonText: {
    color: '#FFF',
  },
});
