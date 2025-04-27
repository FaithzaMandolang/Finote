import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({onPress, label, height = 50, backgroundColor = '#061C3D'}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {height: height, backgroundColor: backgroundColor},
      ]}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 29,
    borderRadius: 100,
    marginVertical: 10,
    width: '80%',
    alignSelf: 'center',
    elevation: 2,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
