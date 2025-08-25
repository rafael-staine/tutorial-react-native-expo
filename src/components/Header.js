import { View, Text, StyleSheet, Image } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';

export default function Header() {
    return (
        <View style={style.header}>
            <View>
            <Image
                style={style.logo}
                source={{ uri: "https://github.com/rafael-staine.png" }}q    
            />
            <Text style={style.textHeader}>Staine</Text>
            </View>
            <Entypo name="menu" size={24} color="#fff" />
        </View>
    )
}

const style = StyleSheet.create({
    header: {
        flex: 1,
        width: '100%',
        backgroundColor: '#000',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
    },

    menu: {
        width: 40,
        height: 40,
        backgroundColor: '#fff',
    },

    logo: {
        width: 50,
        height: 50,
        borderRadius: 20,
    },

    textHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#5eff00ff',
    },
})
