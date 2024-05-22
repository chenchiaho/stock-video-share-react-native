import { useState } from "react"
import { Link, router } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import { View, Text, ScrollView, Image } from "react-native"

import { images } from "../../constants"
import CustomButton from "../../components/CustomButton"
import FormField from "../../components/FormField"


const SignIn = () => {

    const [isSubmitting, setSubmitting] = useState(false)
    const [form, setForm] = useState({
        email: "",
        password: "",
    })

    const submit = async () => {
        return
    }

    return (
        <SafeAreaView className="h-full bg-primary">
            <ScrollView>
                <View
                    className="flex justify-center w-full h-full px-4 my-6"

                >
                    <Image
                        source={images.logo}
                        resizeMode="contain"
                        className="w-[95px] h-[26px]"
                    />

                    <Text className="mt-10 text-lg font-semibold text-white font-psemibold">
                        Log in to Aora
                    </Text>

                    <FormField
                        title="Email"
                        value={form.email}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles="mt-5"
                        keyboardType="email-address"
                    />

                    <FormField
                        title="Password"
                        value={form.password}
                        handleChangeText={(e) => setForm({ ...form, password: e })}
                        otherStyles="mt-5"
                    />

                    <CustomButton
                        title="Sign In"
                        handlePress={submit}
                        containerStyles="mt-7 h-12"
                        isLoading={isSubmitting}
                    />

                    <View className="flex flex-row justify-center gap-2 pt-5">
                        <Text className="text-lg text-gray-100 font-pregular">
                            Don't have an account?
                        </Text>
                        <Link
                            href="/sign-up"
                            className="text-lg font-psemibold text-secondary"
                        >
                            Sign Up
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn