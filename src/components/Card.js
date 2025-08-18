import { View, Text, StyleSheet } from 'react-native'

function Card() {
    return (
        <View style={style.card}>
            <View style={style.fotoCard}></View>
            <View style={style.containerCard}>
                <Text style={style.tituloCard}>Título do Card</Text>
                <Text style={style.textCard}>
                    O sol nascia lentamente no horizonte, tingindo o céu de tons dourados e alaranjados.
                </Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
  card: {
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