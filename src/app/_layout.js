import { Tabs } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';

export default function RootLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#c7146eff",
                tabBarInactiveTintColor: "#fff",
                tabBarStyle: { backgroundColor: '#000' }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarLabelStyle: { fontSize: 8 },
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Entypo name="home" size={24} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: "Perfil",
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Feather name="user" size={24} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="contact"
                options={{
                    title: "Contato",
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="contacts-outline" size={24} color={color}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="about"
                options={{
                    title: "Sobre",
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="house-user" size={24} color={color} />
                    ),
                }}
            />

        </Tabs>
    );
}
