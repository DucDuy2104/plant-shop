import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Style from './Style'
import Line from '../line/Line'
import { colors } from '../../assets/color/Colors'

const DeliveryMethod = ({ isChoose, style, isCOD, disable }) => {
    return (
        <TouchableOpacity disabled={disable} style={[Style.container, style]}>
            <Text style={[Style.title, { color: isChoose ? colors.primaryGreen : 'black' }, disable && {color: colors.grayInApp}]}>{!isCOD ? 'Giao hàng nhanh - 15.000đ' : 'Giao hàng COD - 20.000đ'}</Text>
            <Text style={Style.message}>Dự kiến giao 10-12/4</Text>
            <Line style={[Style.line, disable && {display: 'none'}]} />
            <Image style={[Style.checkImg, {display: (isChoose && !disable)? 'flex' : 'none'}]} source={require('../../assets/image/check_ch.png')}/>
        </TouchableOpacity>
    )
}
export default DeliveryMethod

