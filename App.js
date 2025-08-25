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
        <Card
          titulo="Card 01"
          desc="descrição card 01"
          img="https://github.com/rafael-staine.png"
        />
        <Card
          titulo="Card 02"
          desc="descrição card 02"
          img="https://github.com/deivinho007.png"
        />
        <Card
          titulo="Card 03"
          desc="descrição card 03"
          img="https://github.com/rafael-staine.png"
        />
        <VerMais />
      </View>
      <Footer />
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
