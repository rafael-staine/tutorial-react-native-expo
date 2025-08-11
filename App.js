import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text>Logo</Text>
        <View style={style.menu}></View>
      </View>

      <View style={style.content}>
        <View style={style.card1}>
          <View style={style.fotoCard}></View>
          <View style={style.containerCard1}>
            <Text style={style.tituloCard1}>Título do Card 1</Text>
            <Text style={style.textCard1}>
              O sol nascia lentamente no horizonte, tingindo o céu de tons dourados e alaranjados.
            </Text>
          </View>
        </View>

        <View style={style.card1}>
          <View style={style.fotoCard}></View>
          <View style={style.containerCard1}>
            <Text style={style.tituloCard1}>Título do Card 2</Text>
            <Text style={style.textCard1}>
              O sol nascia lentamente no horizonte, tingindo o céu de tons dourados e alaranjados.
            </Text>
          </View>
        </View>

        <View style={style.verMais}>
          <Text style={style.textoVerMais}>Ver Mais</Text>
        </View>

          <View style={style.footer}>
        <Text style={style.footerText}>Footer</Text>
      </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5bf13dff',
  },

  header: {
    flex: 1,
    width: '100%',
    backgroundColor: '#3daff1',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },

  content: {
    flex: 7,
    width: '100%',
    backgroundColor: '#f19f32ff',
    padding: 10,
  },

  menu: {
    width: 40,
    height: 40,
    backgroundColor: '#000',
  },

  card1: {
    width: '100%',
    height: 200,
    backgroundColor: '#c7146eff',
    marginVertical: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderRadius: 8,
  },

  fotoCard: {
    width: 70,
    height: 70,
    borderRadius: 10,
    backgroundColor: '#000',
  },

  containerCard1: {
    flex: 1,
    justifyContent: 'center',
  },

  tituloCard1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'left',
  },

  textCard1: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
    textAlign: 'left',
  },

  verMais: {
    alignSelf: 'center',
    marginTop: 20,
    width: 120,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoVerMais: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

footer: {
  width: '100%',
  height: 100,
  backgroundColor: '#3daff1',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  bottom: 0,
  left: 0,
},

footerText: {
  color: '#fff',
  fontSize: 14,
},


});
