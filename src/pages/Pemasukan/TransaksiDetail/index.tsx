import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Detail from '../Detail';

const transaksiDetail = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Detail navigation={navigation} route={route} />
    </View>
  );
};

export default transaksiDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
