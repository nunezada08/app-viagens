import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import HomeScreen from './src/screens/HomeScreen.js';
import RestauranteScreen from './src/screens/RestauranteScreen.js';
import ViagensScreen from './src/screens/ViagensScreen';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false, // remove o header padrão
                    tabBarStyle: {
                        backgroundColor: '#0f0f0f',
                        borderTopWidth: 0,
                        height: 65,
                        paddingBottom: 10,
                    },
                    tabBarActiveTintColor: '#00BCD9', // cor do ícone ativo
                    tabBarInactiveTintColor: '#555', // cor do ícone inativo
                }}>
                <Tab.Screen
                    name="Início"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome name="home" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Restaurante"
                    component={RestauranteScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome name="cutlery" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Viagens"
                    component={ViagensScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome name="plane" size={size} color={color} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
