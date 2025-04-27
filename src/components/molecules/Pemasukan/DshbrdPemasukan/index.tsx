import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../Header';
import LastTransaksi from '../LastTransaksi';
import Button from '../../../atoms/Button';
import Card from '../../../atoms/Card';

const DshbrdPemasukan = ({navigation}) => {
  const onSubmit = () => {
    navigation.navigate('AddPemasukan');
  };
  return (
    <View>
      <Header title={'Catatan Pemasukan'} />

      <Card style={styles.card}>
        <Text style={styles.Title}>Pemasukan Bulan Ini</Text>
        <Text style={styles.mount}>Rp 5.000.000</Text>
      </Card>

      <LastTransaksi />

      <Button onPress={onSubmit} />
    </View>
  );
};

export default DshbrdPemasukan;

const styles = StyleSheet.create({
  card: {
    width: 380,
    height: 191,
    marginTop: 87,
    margin: 16,
  },
  Title: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#00000',
    marginTop: 32,
    marginLeft: 65,
    marginRight: 52,
  },
  mount: {
    fontSize: 32,
    fontFamily: 'Poppins-Medium',
    color: '#FFFFFF',
    marginTop: 24,
    marginHorizontal: 77,
    marginBottom: 54,
  },
});
