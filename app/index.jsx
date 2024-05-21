import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

export default function App() {
    return (
        <View className='items-center justify-center flex-1 bg-white'>
            <Text className='text-3xl font-pblack'>Share Video!</Text>
            <StatusBar style="auto" />
            <Link href="/home">Go to Home</Link>
        </View>
    )
}

