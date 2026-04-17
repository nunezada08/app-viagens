import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import dataLocais from '../API/API-locais.json';
import dataRestaurantes from '../API/API-restaurantes.json';

export default function App() {
    const scrollViewRef = useRef();

    const handleScrollToBottom = () => {
        scrollViewRef.current.scrollToEnd({ animated: true });
    };

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
            <ScrollView ref={scrollViewRef} nestedScrollEnabled={true}>
                <View style={styles.header}>
                    <View style={styles.headerView}>
                        <FontAwesome
                            style={styles.menuHeader}
                            name="align-justify"
                            size={24}
                            color="#00BCD9"
                        />
                        <FontAwesome
                            style={styles.pesquisaHeader}
                            name="search"
                            size={24}
                            color="#00BCD9"
                        />
                    </View>
                </View>

                <View style={styles.main}>
                    <View style={styles.viewViagensText}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                            Melhores viagens
                        </Text>
                    </View>

                    <FlatList
                        data={dataLocais}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderItem}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.flatListContainer}
                        snapToAlignment="center"
                        decelerationRate="fast"
                        snapToInterval={227}
                        style={styles.flatList}
                        nestedScrollEnabled={true}
                    />

                    <View style={styles.viewViagensText}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                            Melhores Restaurantes
                        </Text>
                    </View>

                    <FlatList
                        data={dataRestaurantes}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderItem}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.flatListContainer}
                        snapToAlignment="center"
                        decelerationRate="fast"
                        snapToInterval={227}
                        style={styles.flatList}
                        nestedScrollEnabled={true}
                    />
                </View>
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0B121A',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        height: 92,
        backgroundColor: '#0f0f0f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerView: {
        width: '100%',
        height: 62,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    menuHeader: { marginLeft: 40 },
    pesquisaHeader: { marginRight: 40 },
    main: {
        width: '100%',
        flex: 1,
        paddingTop: 20,
    },
    viewViagensText: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        paddingLeft: 20,
        marginBottom: 10,
    },
    flatListContainer: {
        paddingHorizontal: 20,
        gap: 15,
        alignItems: 'center',
    },
    flatList: {
        height: 318,
        marginTop: 20,
        marginBottom: 30,
    },
    card: {
        width: 212,
        height: 318,
        borderRadius: 15,
        overflow: 'hidden',
    },
    cardImagem: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
    },
    cardInfo: {
        padding: 10,
        flex: 1,
        justifyContent: 'center',
        position: 'absolute',
        marginTop: 250,
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
