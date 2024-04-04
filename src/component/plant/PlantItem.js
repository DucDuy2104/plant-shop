import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Style from './Style'
import { convertNumberToMoney } from '../../global-funciton/convert-number'

const PlantItem = ({ item, onItemPress }) => {
  return (
    <TouchableOpacity onPress={onItemPress}>
      <View style={Style.container}>
        <Image style={Style.image} source={{uri: item.image[0]}} />
        <Text numberOfLines={1} ellipsizeMode='tail' style={Style.name}>{item.name}</Text>
        <Text style={[Style.feature, { display: item.category.name ? 'flex' : 'none' }]}>{item.category.name ? item.category.name : ''}</Text>
        <Text style={Style.price}>{convertNumberToMoney(item.price)}đ</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PlantItem