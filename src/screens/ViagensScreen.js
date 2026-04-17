import { View, Text } from 'react-native';

export default function FavoritosScreen() {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#0B121A',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 20 }}>Favoritos</Text>
        </View>
    );
}
