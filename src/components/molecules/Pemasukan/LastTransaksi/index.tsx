import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Gap from '../../../atoms/Gap';

const LastTransaksi = () => {
  return (
    <View>
      <Text style={styles.transaction}>Transaksi Terakhir</Text>

      <View style={styles.cardsContainer}>
        <View>
          <Text style={styles.transactionTitle}>Gaji Bulanan</Text>
          <Text style={styles.transactionDate}>4 April 2025</Text>
        </View>
        <Text style={styles.transactionAmount}>Rp 5.000.000</Text>
      </View>
      <Gap height={22} />
      <View style={styles.cardsContainer}>
        <View>
          <Text style={styles.transactionTitle}>Gaji Harian</Text>
          <Text style={styles.transactionDate}>5 April 2025</Text>
        </View>
        <Text style={styles.transactionAmount}>Rp 400.000</Text>
      </View>

      <TouchableOpacity>
        <Text style={styles.moreText}>Lihat Lainnya</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LastTransaksi;

const styles = StyleSheet.create({
  transaction: {
    color: '#000000',
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    marginTop: 39,
    marginBottom: 15,
    marginHorizontal: 20,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    width: 379,
    height: 70,
    borderRadius: 12,
    marginHorizontal: 20,
    padding: 8,
  },
  transactionTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
  },
  transactionDate: {
    fontFamily: 'Poppins',
    fontSize: 15,
  },
  transactionAmount: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: '#156B03',
  },
  moreText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    textAlign: 'right',
    marginRight: 31,
    marginTop: 8,
  },
});
