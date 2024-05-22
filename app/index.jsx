import { StatusBar } from 'expo-status-bar'
import { ScrollView, Text, View, Image } from 'react-native'
import { Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../components/CustomButton'

import { images } from "../constants"

export default function App() {
    return (
        <SafeAreaView className="h-full bg-primary">

            <ScrollView
                contentContainerStyle={{
                    height: "100%",
                }}
            >
                <View className="flex items-center justify-center w-full h-full px-4">
                    <Image
                        source={images.logo}
                        className="w-[130px] h-[84px]"
                        resizeMode="contain"
                    />

                    <Image
                        source={images.cards}
                        className="max-w-[380px] w-full h-[298px]"
                        resizeMode="contain"
                    />

                    <View className="relative mt-5">
                        <Text className="text-2xl font-bold text-center text-white">
                            Discover Endless{"\n"}
                            Possibilities with{" "}
                            <Text className="text-secondary-200">Aora</Text>
                        </Text>

                        <Image
                            source={images.path}
                            className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
                            resizeMode="contain"
                        />
                    </View>

                    <Text className="text-xs text-center text-gray-100 font-pregular mt-7">
                        Where Creativity Meets Innovation: Embark on a Journey of Limitless
                        Exploration with Aora
                    </Text>

                    <CustomButton
                        title="Continue with Email"
                        handlePress={() => router.push("/sign-in")}
                        containerStyles="w-full mt-7"
                    />
                </View>
            </ScrollView>

            <StatusBar backgroundColor='#161622' style='light' />

        </SafeAreaView>
    )
}

