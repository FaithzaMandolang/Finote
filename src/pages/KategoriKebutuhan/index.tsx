import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Header';
import CardKebutuhan from '../../components/molecules/CardKebutuhan';
import Gap from '../../components/atoms/Gap';
import TextLink from '../../components/atoms/TextLink';

const KategoriKebutuhan = ({}) => {
  return (
    <View style={styles.container}>
      <Header title="Atur keuanganmu!" />
      <Gap height={10} />
      <View>
        <CardKebutuhan
          title="Kebutuhan Makanan"
          description="Beli makanan jadi, beli bahan makanan mentah"
          amount="100.000"
          onPress={() => console.log('Klik Makanan')}
        />
        <CardKebutuhan
          title="Kebutuhan Ongkos Perjalanan"
          description="Indrive, ojek, bus"
          amount="100.000"
          onPress={() => console.log('Klik Perjalanan')}
        />
        <CardKebutuhan
          title="Kebutuhan Rumah"
          description="Listrik, air, dll"
          amount="100.000"
          onPress={() => console.log('Klik Rumah')}
        />
        <TextLink label="Tambah" onPress={() => console.log('Edit diklik')} />
      </View>
    </View>
  );
};

export default KategoriKebutuhan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
});
