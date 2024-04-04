import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Style from './Style'

const HistorySearch = ({ historyText, onDelete, onItemClick }) => {
  return (
    <TouchableOpacity onPress={onItemClick}>
      <View style={Style.container}>
        <Image style={Style.icon} source={require('../../assets/image/clock.png')} />
        <Text style={Style.historyTxt}>{historyText}</Text>
        <TouchableOpacity onPress={onDelete}>
          <Image style={Style.icon} source={require('../../assets/image/close.png')} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

export default HistorySearch