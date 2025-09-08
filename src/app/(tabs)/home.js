import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Card from '../../components/Card';
import VerMais from '../../components/VerMais';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={style.container}>
      <Header />

      <View style={style.linkContainer}>
        <Link href={'/contact'}>
          <Text style={style.linkText}>Contatos</Text>
        </Link>

        <Link href={'/about'}>
          <Text style={style.linkText}>Sobre Nós</Text>
        </Link>

        <Link href={'/profile'}>
          <Text style={style.linkText}>Perfil</Text>
        </Link>
      </View>

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
    backgroundColor: '#1a1a1a',
  },

  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 50,
    marginVertical: 10,
  },

  linkText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },

  content: {
    flex: 7,
    width: '100%',
    backgroundColor: '#222',
    padding: 10,
  },
});

