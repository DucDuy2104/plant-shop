import { View, Text } from 'react-native'
import React from 'react'
import Style from '../../screen/detail/Style'

const Line = ({ height, style }) =>
 <View style={[Style.line, { height: height || 1 }, style]} />

export default Line