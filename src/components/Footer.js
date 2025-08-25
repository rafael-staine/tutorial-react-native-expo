import { View, Text, StyleSheet } from 'react-native'

function Footer() {
    return (
        <View style={style.footer}>
            <Text style={style.footerText}>Footer</Text>
        </View>
    )
}

const style = StyleSheet.create({
    footer: {
        width: '100%',
        height: 100,
        backgroundColor: '#000',
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
})

export default Footer