import React, { useEffect, useState } from 'react'
import { FlatList, View, StyleSheet, TouchableOpacity, ActivityIndicator, Alert } from 'react-native'
import { Text } from 'react-native-paper';
import { getBanks } from '../services/ApiService'
import BankItem from './BankItem'

const BankList = ({ navigation }) => {
    const [banks, setBanks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getBanks()
            .then(banks => {
              setBanks(banks);
              setLoading(false);
            })
            .catch(error => {
              console.error(error);
              setLoading(false);
              Alert.alert(
                'Error',
                'Hubo un problema al obtener los bancos. Por favor, intenta de nuevo más tarde.',
                [{ text: 'OK' }]
            );
          });
    }, []);

    const handlePress = (item) => {
      navigation.navigate('BankDetail', { bank: item });
    };

    if (loading) {
      return (
          <View style={styles.loaderContainer}>
              <ActivityIndicator size="large" color="#0000ff" />
          </View>
      );
    }

    return (
        <View style={styles.container}>
          {/* <Text style={styles.header}>Lista de bancos</Text> */}
          <FlatList
            data={banks}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handlePress(item)}>
                <BankItem item={item} />
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
  });

export default BankList