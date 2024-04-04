import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Style from './Style'

const ToolBar = ({ iconLeft, iconRight, title, style, onLeftPress, onRightPress }) => {
    return (
        <View style={[Style.container, style]}>
            <TouchableOpacity onPress={onLeftPress}>
                {iconLeft ? <Image style={Style.icon} source={iconLeft} /> :
                    <View style={Style.icon} />
                }
            </TouchableOpacity>
            <Text style={Style.title}>{title}</Text>
            <TouchableOpacity onPress={onRightPress}>
                {iconRight ? <Image style={Style.icon} source={iconRight} /> :
                    <View style={Style.icon} />
                }
            </TouchableOpacity>
        </View>
    )
}

export default ToolBar