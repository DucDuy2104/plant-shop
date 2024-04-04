import { View, Text, TextInput, Image, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import Style from './Style'
import { colors } from '../../assets/color/Colors'

const UnderlineInput = ({ placeholder, onChangeText, iconRight, style, onItemRightPress, value, isLight, onFocus, disable, disableInput }) => {
  return (
    <View style={[Style.container, style]}>
      <TextInput
        style={[Style.input, isLight && Style.lightInput, disable && {color: colors.primaryGreen}]}
        onChangeText={onChangeText}
        placeholder={placeholder}
        onFocus={onFocus}
        value={value}
        disable={disable}
        editable={!disableInput}
      />
      <TouchableOpacity onPress={onItemRightPress} style={Style.searchBtn}>
        <Image style={[Style.icon, { display: iconRight ? 'flex' : 'none' }]} source={iconRight} />
      </TouchableOpacity>
    </View>
  )
}

export default UnderlineInput