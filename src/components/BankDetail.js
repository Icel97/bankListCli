import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const BankDetail = ({ route }) => {
  const { bank } = route.params;

  return (
      <View style={styles.container}>
          <Image source={{ uri: bank.url }} style={styles.image} />
          <Text style={styles.title}>{bank.bankName}</Text>
          <Text>{bank.description}</Text>
          <Text>Tiempo: {bank.age} años</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#F5FCFF',
  },
  image: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 20,
  },
  title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
  },
});

export default BankDetail