import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Style from './Style'
const LogFooter = ({ footTitle, creOrLog, onFbPress, onGgPress, style, onMessPress }) => {
    return (
        <View style={style}>
            <View style={Style.orWrapper}>
                <View style={Style.line} />
                <Text style={Style.orTxt}>Hoặc</Text>
                <View style={Style.line} />
            </View>
            <View style={Style.orderLogWrapper}>
                <TouchableOpacity onPress={onGgPress}>
                    <Image style={[Style.iconGg]} source={require('../../assets/image/ggicon.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={onFbPress}>
                    <Image style={Style.iconFb} source={require('../../assets/image/fbicon.png')} />
                </TouchableOpacity>
            </View>
            <View style={Style.createAccWrapper}>
                <Text style={Style.hasNoAcc}>
                    {footTitle}
                </Text>
                <TouchableOpacity onPress={onMessPress}>
                    <Text style={Style.createAcc}>{creOrLog}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}




export default LogFooter