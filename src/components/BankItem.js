import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';


const BankItem = ({ item }) => (
    <Card style={styles.card}>
        <Card.Content>
            <View style={styles.itemContent}>
                <Image source={{ uri: item.url }} style={styles.image} />
                <View style={styles.textContainer}>
                    <Title style={styles.title}>{item.bankName}</Title>
                </View>
            </View>
        </Card.Content>
    </Card>
);

const styles = StyleSheet.create({
    card: {
        margin: 10,
        elevation: 4,
    },
    itemContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});


export default BankItem