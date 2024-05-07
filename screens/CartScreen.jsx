import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Icon from 'react-native-feather';
import { featured } from '../constants';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/restaurantSlice';
import { removeFromCart, selectCartItems, selectCartTotal } from '../slices/cartSlice';

const CartScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant)
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    const [groupItems, setGroupedItems] = useState({})
    const dispatch = useDispatch();
    const deliveryFee = 50;

    useEffect(() => {
        const items = cartItems.reduce((group, item) => {
            if (group[item.id]) {
                group[item.id].push(item);
            } else {
                group[item.id] = [item];
            }
            return group;
        }, {})
        setGroupedItems(items);
    }, [cartItems])

    return (
        <View className="bg-white flex-1">
            <View className="relative py-4 shadow-sm">
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    className="absolute z-10 rounded-full p-1 shadow top-5 left-2 bg-red-500"
                >
                    <Icon.ArrowLeft strokeWidth={3} stroke={"white"} />
                </TouchableOpacity>
                <View>
                    <Text className="text-center font-bold text-xl">Your Cart</Text>
                    <Text className="text-center text-gray=-500">{restaurant.name}</Text>
                </View>
            </View>
            <View className="bg-red-200 flex-row p-4 items-center">
                <Image source={require('../assets/deliverybike.png')} className="w-20 h-20 rounded-full" />
                <Text className="flex-1 pl-4">Deliver in 20-30 minutes</Text>
                <TouchableOpacity>
                    <Text className="font-bold text-red-500">Change</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 50
                }}
                className="bg-white pt-5"
            >
                {
                    Object.entries(groupItems).map(([dishId, items]) => {
                        let dish = items[0];
                        let quantity = items.length;

                        return (
                            <View
                                key={dishId}
                                className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md"
                            >
                                <Text className="font-bold text-red-500">{quantity} X</Text>
                                <Image className="h-14 w-14 rounded-full" source={dish.image} />
                                <Text className="flex-1 font-bold text-gray-700">{dish.name}</Text>
                                <Text className="font-semibold text-base">₹ {dish.price}</Text>
                                <TouchableOpacity
                                    onPress={() => dispatch(removeFromCart({ id: dish.id }))}
                                    className="p-1 rounded-full bg-red-500"
                                >
                                    <Icon.Minus strokeWidth={2} height={20} width={20} stroke={"white"} />
                                </TouchableOpacity>
                            </View>
                        );
                    })

                }
            </ScrollView>

            <View className="p-6 px-8 rounded-t-3xl space-y-4 bg-red-200">
                <View className="flex-row justify-between">
                    <Text className="text-gray-700">Subtotal</Text>
                    <Text className="text-gray-700">₹{cartTotal}</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="text-gray-700">Delivery Fee</Text>
                    <Text className="text-gray-700">₹{deliveryFee}</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="text-gray-700 font-extrabold">Order Total</Text>
                    <Text className="text-gray-700 font-extrabold">₹{deliveryFee + cartTotal}</Text>
                </View>
                <View className="p-3 rounded-xl bg-red-500">
                    <TouchableOpacity
                        onPress={() => navigation.navigate('OrderPreparing')}
                    >
                        <Text className="text-white text-center font-bold text-lg">Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default CartScreen