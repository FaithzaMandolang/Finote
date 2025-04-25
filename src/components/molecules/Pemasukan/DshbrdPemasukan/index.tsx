import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../Header';
import LastTransaksi from '../LastTransaksi';
import Button from '../../../atoms/Button';

const DshbrdPemasukan = () => {
  return (
    <View>
      <Header title={'Catatan Pemasukan'} />

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Pemasukan Bulan Ini</Text>
        <Text style={styles.mount}>Rp 5.000.000</Text>
      </View>

      <LastTransaksi />

      <Button />
    </View>
  );
};

export default DshbrdPemasukan;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#469DBD',
    borderRadius: 10,
    width: 380,
    height: 191,
    marginTop: 87,
    margin: 16,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 1,
  },
  cardTitle: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#00000',
    marginTop: 32,
    marginLeft: 52,
    marginRight: 51,
  },
  mount: {
    fontSize: 32,
    fontFamily: 'Poppins-Medium',
    color: '#FFFFFF',
    marginTop: 24,
    marginHorizontal: 74,
    marginBottom: 54,
  },
});
