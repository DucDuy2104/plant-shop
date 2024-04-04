import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Style from './Style'
import { convertNumberToMoney } from '../../global-funciton/convert-number'

const CartItem = ({ item, onCheckPress, onAddPress, onMinPress, onDeletePress }) => {

    return (
        <View style={Style.container}>
            <TouchableOpacity onPress={onCheckPress}>
                <Image style={Style.checkIcon} source={item.isChoose ? require('../../assets/image/checkcart.png') : require('../../assets/image/uncheck.png')} />
            </TouchableOpacity>
            <Image style={Style.image} source={{ uri: item.image }} />
            <View style={Style.controllWrapper}>
                <Text style={Style.name}>
                    {item.name} |
                    <Text style={Style.feature}> {item.category}</Text>
                </Text>
                <Text style={Style.price}>{convertNumberToMoney(item.price)}đ</Text>
                <View style={Style.countWrapper}>
                    <TouchableOpacity onPress={onMinPress}>
                        <Image style={Style.iconControll} source={require('../../assets/image/less.png')} />
                    </TouchableOpacity>
                    <Text>{item.amount}</Text>
                    <TouchableOpacity onPress={onAddPress}>
                        <Image style={Style.iconControll} source={require('../../assets/image/add.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity onPress={onDeletePress} style={Style.btnDelete}>
                <Text style={Style.delete}>Xóa</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CartItem