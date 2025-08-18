import { View, Text, StyleSheet } from 'react-native'

export default function Header() {
    return (
        <View style={style.header}>
            <Text>Logo</Text>
            <View style={style.menu}></View>
        </View>
    )
}

const style = StyleSheet.create({
    header: {
        flex: 1,
        width: '100%',
        backgroundColor: '#3daff1',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
    },

    menu: {
        width: 40,
        height: 40,
        backgroundColor: '#000',
    },
})
