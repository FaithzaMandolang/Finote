import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Gap from '../../../components/atoms/Gap';

const LastTransaksi = ({transactions}) => {
  return (
    <View>
      <Text style={styles.transaction}>Transaksi Terakhir</Text>

      {transactions.length > 0 ? (
        transactions.map((item, index) => (
          <View style={styles.cardsContainer} key={index}>
            <View>
              <Text style={styles.transactionTitle}>{item.sumber}</Text>
              <Text style={styles.transactionDate}>{item.tanggal}</Text>
            </View>
            <Text style={styles.transactionAmount}>
              Rp {Number(item.jumlah).toLocaleString('id-ID')}
            </Text>
          </View>
        ))
      ) : (
        <Text style={styles.noTransaction}>Belum ada transaksi</Text>
      )}

      <Gap height={22} />
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
  noTransaction: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});
