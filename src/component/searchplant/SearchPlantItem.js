import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Style from './Style'
import { convertNumberToMoney } from '../../global-funciton/convert-number'

const SearchPlantItem = ({ item, onItemPress }) => {
    return (
        <TouchableOpacity onPress={onItemPress}>
            <View style={Style.container}>
                <Image style={Style.image} source={{uri: item.image[0]}} />
                <View style={Style.txtWrapper}>
                    <Text style={Style.name}>{item.name}</Text>
                    <Text style={Style.price}>{convertNumberToMoney(item.price)}đ</Text>
                    <Text style={Style.remain}>còn{` ${item.quantity} sp`}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default SearchPlantItem