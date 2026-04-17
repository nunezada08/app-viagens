import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import dataRestaurante from '../API/API-restaurantes.json';

export default function FavoritosScreen() {
    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.imagem }} style={styles.cardImagem} />
            <View style={styles.cardInfo}>
                <Text style={styles.cardNome}>{item.nome}</Text>
                <Text style={styles.cardLocalizacao}>{item.localizacao}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Restaurantes</Text>

            <FlatList
                data={dataRestaurante}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.lista}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0B121A',
        paddingTop: 60,
    },
    titulo: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 20,
        marginBottom: 20,
    },
    lista: {
        paddingHorizontal: 20,
        gap: 30,
    },
    card: {
        width: '100%',
        height: 200,
        borderRadius: 15,
        overflow: 'hidden',
    },
    cardImagem: {
        width: '100%',
        height: '100%',
    },
    cardInfo: {
        position: 'absolute',
        bottom: 10,
        left: 10,
    },
    cardNome: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    cardLocalizacao: {
        color: '#00BCD9',
        fontSize: 14,
        marginTop: 4,
        fontWeight: 'bold',
    },
});
