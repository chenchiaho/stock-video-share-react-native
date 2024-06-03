import { useState } from "react"
import {
    FlatList,
    View,
    Image,
    TouchableOpacity,
} from "react-native"

import { icons } from "../constants"


const Trending = ({ posts }) => {


    return (
        <FlatList
            data={posts}
            horizontal
            keyExtractor={(item) => item.$id}
            renderItem={({ item }) => (
                <Text className="text-black">
                    {item.id}
                </Text>
            )}

        />
    )
}


export default Trending
