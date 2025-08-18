import { View, Text, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Card from './src/components/Card';
import VerMais from './src/components/VerMais';

export default function App() {
  return (
    <View style={style.container}>

      <Header />

      <View style={style.content}>

        <Card />

        <Card />

        <VerMais />

        <Footer />

      </View>

    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5bf13dff',
  },

  content: {
    flex: 7,
    width: '100%',
    backgroundColor: '#f19f32ff',
    padding: 10,
  },
});
