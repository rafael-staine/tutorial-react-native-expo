import { View, Text, StyleSheet, Image } from 'react-native'

function Card({ titulo, desc, img }) {
  return (
    <View style={style.card}>
      <Image
        style={style.image}
        source={img}
      />
      <View style={style.containerCard}>
        <Text style={style.tituloCard}>{titulo}</Text>
        <Text style={style.textCard}>{desc}</Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  card: {
    width: '100%',
    height: 150,
    backgroundColor: '#c7146eff',
    marginVertical: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderRadius: 8,
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
    backgroundColor: '#000',
  },

  containerCard: {
    flex: 1,
    justifyContent: 'center',
  },

  tituloCard: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'left',
  },

  textCard: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
    textAlign: 'left',
  },
})

export default Card