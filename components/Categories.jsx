import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { categories } from '../constants/'

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(false);
  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15
        }}
      >
        {
          categories.map((category, index) => {
            let isActive= category.id==activeCategory;
            let btnClass= isActive? 'bg-gray-600' : 'b-gray-200';
            let textClass= isActive? 'font-semibold text-gray-800': 'tex-gray-500';
            return (
              <View key={index} className='flex justify-center items-center mr-6'>
                <TouchableOpacity onPress={()=> setActiveCategory(category.id)} className= {`p-1 rounded-full shadow bg-gray-200 ${btnClass}`}>
                  <Image style={{ width: 45, height: 45 }} source={category.image} />
                  <Text className='text-sm'>{category.name}</Text>
                </TouchableOpacity>
              </View>

            )
          })

        }
      </ScrollView>
    </View>
  )
}

export default Categories