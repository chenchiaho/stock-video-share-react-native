import { useState } from "react"
import { Link, router } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import { View, Text, ScrollView, Image } from "react-native"

import { images } from "../../constants"
import CustomButton from "../../components/CustomButton"
import FormField from "../../components/FormField"

const SignUp = () => {

    const [isSubmitting, setSubmitting] = useState(false)
    const [form, setForm] = useState({
        username: "",
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
                        Sign Up to Aora
                    </Text>

                    <FormField
                        title="Username"
                        value={form.username}
                        handleChangeText={(e) => setForm({ ...form, username: e })}
                        otherStyles="mt-10"
                    />

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
                        title="Sign Up"
                        handlePress={submit}
                        containerStyles="mt-7"
                        isLoading={isSubmitting}
                    />

                    <View className="flex flex-row justify-center gap-2 pt-5">
                        <Text className="text-lg text-gray-100 font-pregular">
                            Have an account already?
                        </Text>
                        <Link
                            href="/sign-in"
                            className="text-lg font-psemibold text-secondary"
                        >
                            Login
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignUp
