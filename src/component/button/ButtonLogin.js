import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { colors } from '../../assets/color/Colors'
import Style from './Style'

const ButtonLogin = ({title, onPress, style}) => {
  return (
    <TouchableOpacity style={[Style.btnContainer, style]} onPress={onPress}>
        <LinearGradient
            colors={[colors.primaryGreen, '#4CAF50']}
            start={{x: 0, y: 0}}
            end={{x:1, y: 0}}
            style={Style.gradient}
        
        />
        <Text style={Style.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonLogin