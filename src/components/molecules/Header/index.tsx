import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({onPress, title, withBackIcon}) => {
  return (
    <View style={styles.contentContainer}>
      {withBackIcon && (
        <TouchableOpacity style={styles.backButton} onPress={onPress}>
          <Icon name="arrow-left" size={20} color="#fff" />
        </TouchableOpacity>
      )}
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
  },
  backButton: {
    paddingRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
});
