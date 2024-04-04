import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Style from './Style'

const GrownKit = ({ item }) => {
    return (
        <TouchableOpacity>
            <View style={Style.container}>
                <View style={Style.txtWrapper}>
                    <Text style={Style.title}>{item.title} </Text>
                    <Text style={Style.description} numberOfLines={3} ellipsizeMode='tail'>
                        {item.description}
                    </Text>
                </View>
                <Image style={Style.image} source={item.image} />
            </View>
        </TouchableOpacity>
    )
}

export default GrownKit