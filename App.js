import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <View style={styles.box3}></View>
        <View style={styles.box3}></View>

      </View>
      <Text style={styles.tituloPrincipal}>Título Principal</Text>
      <Text style={styles.subTitulo}>Subtitulo</Text>
      <Text style={styles.paragrafo}>Paragafo</Text>
      <Text style={styles.saibaMais}>Saiba mais ...</Text>
      <View style={styles.box2}></View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tituloPrincipal: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ff00ff',
    marginVertical: 20,
  },

  subTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00ff00',
    marginVertical: 20,
  },

  paragrafo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffcc00',
    marginVertical: 20,

  },

  saibaMais: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#0000ff',
    marginVertical: 20,
  },

  box1: {
    display: 'flex',
    width: "100%",
    height: 80,
    backgroundColor: '#ff0000',
    justifyContent: 'space-around',
  },

  box2: {
    width: "100%",
    height: 80,
    backgroundColor: '#00ffff',
  },

  box3: {
    width: 50,
    height: 50,
    backgroundColor: '#ffff00',
  }
});
