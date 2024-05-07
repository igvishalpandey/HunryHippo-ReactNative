import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../slices/cartSlice';

const CartIcon = () => {
    const navigation = useNavigation();
    const CartItems = useSelector(selectCartItems);
    const cartTotal= useSelector(selectCartTotal);
    if(!CartItems.length) return;
    return (
        <View className="absolute bottom-5 w-full z-50">
            <TouchableOpacity
                onPress={()=>navigation.navigate('Cart')}
                className="shadow-lg flex-row justify-between items-center mx-5 rounded-full p-4 py-3 bg-red-500">
                    <View className="py-2 px-4 rounded-full bg-red-500">
                        <Text className="font-extrabold text-white text-lg">
                            {CartItems.length}
                        </Text>
                    </View>
                    <Text className="flex-1 text-center font-extrabold text-white text-lg">
                        View Cart
                    </Text>
                    <Text className="font-extrabold text-white text-lg">
                    ₹ {cartTotal} </Text>
            </TouchableOpacity>
        </View>
    )
}

export default CartIcon