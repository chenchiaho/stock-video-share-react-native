import { FlatList, Text, View, Image, RefreshControl } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from "../../constants"
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'


const home = () => {

  const [refreshing, setRefreshing] = useState(false)


  const onRefresh = () => {

  }

  return (
    <SafeAreaView className="bg-primary">
      <FlatList
        data={[{ id: 1 }]}
        keyExtractor={(item) => item.$id}

        ListHeaderComponent={() => (
          <View className="flex px-4 my-6 space-y-6">
            <View className="flex flex-row items-start justify-between mb-6">
              <View>
                <Text className="text-sm text-gray-100 font-pmedium">
                  Welcome Back
                </Text>
                <Text className="text-2xl text-white font-psemibold">
                  UserName
                </Text>
              </View>

              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="h-10 w-9"
                  resizeMode="contain"
                />
              </View>
            </View>
            <SearchInput />
            <View>
              <Text className='text-white'>
                Latest Videos
              </Text>

              <Trending post={[]} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => {
          <EmptyState
            title="No Videos Found"
            subtitle="No videos created yet"
          />
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }

      />
    </SafeAreaView>
  )
}

export default home

