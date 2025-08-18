import { View, Text, StyleSheet } from 'react-native'

function VerMais() {
    return (
        <View style={style.verMais}>
            <Text style={style.textoVerMais}>Ver Mais</Text>
        </View>
    )
}

const style = StyleSheet.create({
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
})

export default VerMais