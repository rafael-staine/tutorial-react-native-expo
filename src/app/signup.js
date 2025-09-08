import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import { useRouter } from 'expo-router'
import { useState } from 'react'

export default function Signup() {

    const router = useRouter()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [avatar, setAvatar] = useState("")

    const profile = {
        name,
        email,
        pass,
        avatar
    }

    const handleSigunp = async () => {
        const response = await fetch("http://localhost:3333/profile", {
            method: "POST",
            body: JSON.stringfy(profile)
        })
    }

    return (
        <View style={styles.container}>
            <Text>Cadastre-se</Text>

            <Text>Nome:</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
            />

            <Text>Email:</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
            />

            <Text>Senha:</Text>
            <TextInput
                style={styles.input}
                value={pass}
                onChangeText={setPass}
            />

            <Text>Avatar:</Text>
            <TextInput
                style={styles.input}
                value={avatar}
                onChangeText={setAvatar}
            />

            <Button
                title='Cadastrar'
                onPress={() => {}}
            />

            <Text>Olá {name} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },

    input: {
        width: "80%",
        padding: 10,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 8
    }
})
