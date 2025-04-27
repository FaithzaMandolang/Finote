import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../../components/molecules/Header';
import LastTransaksi from '../LastTransaksi';
import Button from '../../../components/atoms/Button';
import Card from '../../../components/atoms/Card';

const DshbrdPemasukan = ({navigation, route}) => {
  const {jumlah, periode} = route.params || {};
  const onSubmit = () => {
    navigation.navigate('AddPemasukan');
  };
  return (
    <View>
      <Header title={'Catatan Pemasukan'} />

      <Card style={styles.card}>
        <Text style={styles.Title}>
          Pemasukan {periode ? periode : 'Periode'}
        </Text>
        <Text style={styles.mount}>
          {jumlah ? `Rp ${Number(jumlah).toLocaleString('id-ID')}` : 'Rp 0'}
        </Text>
      </Card>

      <LastTransaksi />

      <Button label="Tambah Pemasukan" onPress={onSubmit} />
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
    textAlign: 'center',
  },
  mount: {
    fontSize: 32,
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
    marginTop: 24,
    marginBottom: 54,
    textAlign: 'center',
  },
});
