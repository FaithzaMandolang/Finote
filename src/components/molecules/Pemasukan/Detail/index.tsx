import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../../Header';
import Gap from '../../../atoms/Gap';
import Card from '../../../atoms/Card';
import Row from './Row';

const Detail = () => {
  return (
    <View style={styles.container}>
      <Header title="Detail Pemasukan" />
      <Gap height={60} />

      <Card style={styles.card}>
        <Text style={styles.mount}>Rp 5.000.000</Text>
        <Text style={styles.total}>Total Pemasukan</Text>
        <View style={styles.line} />

        <Gap height={44} />

        <Row label="Tanggal" value="4 April 2025" />
        <Gap height={27} />
        <Row label="Periode" value="Bulanan" />
        <Gap height={27} />
        <Row label="Sumber" value="Gaji" />
        <Gap height={27} />
        <Row
          label="Keterangan"
          value="Gaji bulan April, Sudah termasuk bonus bulan ini"
        />
      </Card>

      <Gap height={54} />
      <TouchableOpacity>
        <Text style={styles.back}>Kembali ke Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    width: 380,
    height: 538,
    marginHorizontal: 16,
  },
  mount: {
    fontSize: 36,
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
    marginTop: 24,
    marginHorizontal: 61,
  },
  total: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    marginTop: 4,
    marginLeft: 96,
    color: '#1C1B1F',
  },
  line: {
    height: 1,
    backgroundColor: '#fff',
    marginVertical: 12,
    marginTop: 36,
    marginHorizontal: 15,
  },
  back: {
    fontFamily: 'Poppins-Italic',
    fontSize: 15,
    textDecorationLine: 'underline',
    marginTop: 8,
    textAlign: 'center',
    marginRight: 5,
  },
});
