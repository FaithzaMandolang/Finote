import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({
  onPress,
  label,
  height = 50,
  backgroundColor = '#061C3D',
  width = '80%',
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {height: height, backgroundColor: backgroundColor, width: width},
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
<<<<<<< HEAD
=======
    width: '60%',
>>>>>>> 7b7d1984f54a738c1bcccd02fb3956ea080f3f02
    alignSelf: 'center',
    elevation: 2,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
