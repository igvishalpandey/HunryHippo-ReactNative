import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ title, description, restaurants }) => {
    return (
        <View>
            <View className="flex-row justify-between items-center px-4">
                <View>
                    <Text className="font-bold text-lg">
                        {title}
                    </Text>
                    <Text className="text-gray-500 text-xs">
                        {description}
                    </Text>
                </View>
                    <TouchableOpacity>
                        <Text className="font-semibold text-red-500" />
                    </TouchableOpacity>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
                className="overflow-visible py-5"
            >
                {
                    restaurants.map((restaurants, index)=>{
                        return (
                            <RestaurantCard key={index} item={restaurants}/>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default FeaturedRow