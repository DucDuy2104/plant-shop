import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Style from './Style'

const InputText = ({ placeHolder, onChangeText, isPassWord, errorText, style, value }) => {
  const [showPass, setShowPass] = useState(false)
  const [isFocus, setFocus] = useState(false)
  const onEyeClick = () => {
    setShowPass(!showPass)
  }
  const onFocus = () => {
    setFocus(true)
  }

  const onBlur = () => {
    setFocus(false)
  }

  const RNInput = () => {
    return (
      <View>
        <TextInput
          value={value}
          style={[Style.normal, isFocus && Style.focus]}
          placeholder={placeHolder}
          onFocus={onFocus}
          onChangeText={onChangeText}
          secureTextEntry={isPassWord && !showPass}
          onBlur={onBlur}
        />
        <TouchableOpacity onPress={onEyeClick} style={[Style.eyeButton, { display: isPassWord ? 'flex' : 'none' }]}>
          <Image style={Style.eye} source={showPass ?  require('../../assets/image/eye_close.png') : require('../../assets/image/eye.png')} />
        </TouchableOpacity>
        <Text style={[Style.errorTxt, { display: errorText ? 'flex' : 'none' }]}>{errorText}</Text>
      </View>
    )
  }
  return (
    <View style={style}>
      {RNInput()}
    </View>
  )
}

export default InputText