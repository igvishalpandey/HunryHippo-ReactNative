import { View, Text, TextInput , ScrollView} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import GlobalStyles from '../GlobalStyles.js';
import * as Icon from 'react-native-feather';
import {Categories, FeaturedRow, RestaurantCard} from '../components/';
import { featured, featured02, featured03 } from '../constants/index.js';

const Home = () => {
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea} className='bg-white'>
            <View className='flex-row items-center space-x-2 px-4 pb-2'>
                <View className="flex-1 flex-row items-center p-3 rounded-full border border-gray-300">
                    <Icon.Search height='25' width='25' stroke='gray' />
                    <TextInput placeholder='Restaurants' className="ml-2 flex-1" />
                    <View className="flex-row items-center space-x-1 border-0 border-l-2 border-gray-200 pl-1">
                        <Icon.MapPin height="20" width="20" stroke="gray" />
                        <Text className="text-gray-600">New Delhi, India</Text>
                    </View>
                </View>
                <View className="p-3 bg-red-500 rounded-full">
                    <Icon.Sliders height='20' width='20' strokeWidth={2.5} stroke='white' />
                </View>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 20
                }}    
            >
                <Categories />

                <View className="mt-3">
                    {
                        [featured, featured02, featured03].map((item, index)=>{
                            return(
                                <FeaturedRow
                                key={index}
                                title={item.title}
                                restaurants= {item.restaurants}
                                description={item.description}
                                />
                            )
                        })
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home