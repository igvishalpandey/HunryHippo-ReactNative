import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Icon from 'react-native-feather';
import { themeColors } from '../theme'
import { CartIcon, DishRow } from '../components';
import { StatusBar } from 'expo-status-bar';
import { useDispatch } from 'react-redux';
import {setRestaurant} from '../slices/restaurantSlice'


const RestaurantScreen = () => {

  const { params } = useRoute();
  let item = params;
  const navigation = useNavigation()
  const dispatch= useDispatch();

  useEffect(( )=>{
    if(item && item.id){
      dispatch(setRestaurant({...item}))
    }
  },[]);

  return (
    <View>
      <CartIcon/>
      <StatusBar style="light" />
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={item.image} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow"
          >
            <Icon.ArrowLeft stroke={themeColors.color} strokeWidth={3} />
          </TouchableOpacity>
        </View>
        <View style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white mt-[-40] p-6"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold">
              {item.name}
            </Text>
            <View className="pb-2 space-y-2 space-x-2 flex-row">
              <View className="pt-2 flex-row items-center space-x-1">
                <Image source={require('../assets/star.png')} className="h-4 w-4" />
                <Text className="text-xs">
                  <Text className="text-green-700"> {item.stars} stars</Text>
                  <Text className="text-gray-700"> {item.reviews}
                    <Text className="font-semibold"> {item.category}</Text>
                  </Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Icon.MapPin color="gray" width="15" height="15" />
                <Text className="text-gray-700 text-xs">Nearby. {item.address}</Text>
              </View>
            </View>
            <View>
              <Text className="text-gray-500 mt-2">
                {item.description}
              </Text>
            </View>
          </View>
          <View className="pb-36 bg-white">
            <Text className="px-4 py-4 text-2xl font-bold">
              Menu
            </Text>
            {
              item.dishes.map((dish, index)=> <DishRow item={{...dish}} key={index}/>)
            }
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default RestaurantScreen