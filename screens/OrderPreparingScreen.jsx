import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const OrderPreparingScreen = () => {

    const navigation = useNavigation();
    useEffect(()=>{
      setTimeout(()=>{
        navigation.navigate('Delivery');
      },1000)
    }, [])
  return (
    <View className="flex-1 bg-red-200 justify-center items-center">
      <Image source={require('../assets/delivery.gif')} className="w-80 h-80"/>
    </View>
  )
}

export default OrderPreparingScreen