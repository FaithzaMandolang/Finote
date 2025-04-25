import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React, {useState} from 'react';

const TextInput = ({label, placeholder}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Input placeholder={placeholder} style={styles.input} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    color: '#000',
    marginHorizontal: 24,
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: 24,
  },
});
