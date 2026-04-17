import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function App() {
  return (
      <View style={styles.container}>
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
                  <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white'}} >Viagens favoritas</Text>
              </View>
          </View>
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerView: {
        width: '100%',
        height: 62,
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    menuHeader: {
        marginLeft: 40,
    },
    pesquisaHeader: {
        marginRight: 40,
    },
    main: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewViagensText: {
        width: '100%',
        height: 40,
        justifyContent: 'center'
    }
});
