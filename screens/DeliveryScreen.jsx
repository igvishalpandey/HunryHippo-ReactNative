import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { featured } from '../constants'
import { useNavigation } from '@react-navigation/native';
import * as Icon from 'react-native-feather';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/restaurantSlice';
import MapView , { Marker } from 'react-native-maps';
import { emptyCart } from '../slices/cartSlice';

const DeliveryScreen = () => {
    const restaurant= useSelector(selectRestaurant)
    const navigation= useNavigation();
    const dispatch= useDispatch();

    const cancelOrder= ()=>{
        navigation.navigate("Home")
        dispatch(emptyCart());
    };

  return (
    <View className="flex-1">
      <MapView 
      initialRegion={{
        latitude: restaurant.lat,
        longitude: restaurant.lng,
        latitudeDelta:0.01,
        longitudeDelta:0.01
      }} className="flex-1" mapType='standard'
      >
        <Marker 
            coordinate={{
                latitude: restaurant.lat,
                longitude:restaurant.lng,
            }}
            title={restaurant.name}
            description={restaurant.description}
        />
      </MapView>
      <View className="rounded-s-3xl -mt-12 bg-white relative">
        <View className="flex-row justify-between px-5 pt-10">
            <View>
                <Text className="text-lg text-gray-700 font-semibold">
                    Estimated Arrival
                </Text>
                <Text className="text-3xl font-extrabold text-gray-700">
                    20-30 minutes
                </Text>
                <Text className="mt-2 font-extrabold text-gray-700">
                    Your order is on its way!
                </Text>
            </View>
            <Image className="w-24 h-24" source={require('../assets/FDV.gif')} />
        </View>
        <View className="bg-red-500 p-2 flex-row justify-between items-center rounded-full my-5 mx-2">
            <View className="p-1 rounded-full bg-red-200 " >
                <Image source={require('../assets/delivery-boy.png')} className="h-16 w-16 rounded-full"/>
            </View>
            <View className="flex-1 ml-3">
                <Text className="text-lg font-bold text-white">
                    Vishal Pandey
                </Text>
                <Text className="font-semibold text-white">
                    Your Rider
                </Text>
            </View>
            <View className="flex-row items-center space-x-3 mr-3">
                <TouchableOpacity className="bg-white p-2 rounded-full">
                    <Icon.Phone strokeWidth={1} stroke={"black"} />
                </TouchableOpacity>
                <TouchableOpacity onPress={cancelOrder} className="bg-white p-2 rounded-full">
                    <Icon.X strokeWidth={4} stroke={"red"} />
                </TouchableOpacity>
            </View>
        </View>

      </View>
    </View>
  )
}

export default DeliveryScreen