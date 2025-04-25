import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = ({title}) => {
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: '#061C3D',
    paddingVertical: 30,
    paddingHorizontal: 17,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
  },
});
