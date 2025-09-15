import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';

function CardUser({ id, name, email, avatar, users, setUsers }) {

  const handleDelete = async () => {
    const response = await fetch(`http://localhost:3333/profile/${id}`, {
      method: "DELETE",
    })
    if (response.ok) {
      console.log("Deletado com sucesso")
      const updatedUsers = users.filter(user => user.id !== id) // cria um novo array sem o id que foi excluído
      setUsers(updatedUsers)
      console.log("Erro ao deletar")
    }
  }

  return (
    <View style={style.card}>
      <Image
        style={style.image}
        source={avatar}
      />
      <View style={style.containerCard}>
        <Text style={style.tituloCard}>{name}</Text>
        <Text style={style.textCard}>{email}</Text>
      </View>
      <View>
        <Pressable onPress={handleDelete}>
          <FontAwesome name="trash" size={24} color="black" />
        </Pressable>
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

export default CardUser