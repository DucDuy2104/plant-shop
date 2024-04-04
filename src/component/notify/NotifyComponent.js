import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Line from '../line/Line'
import Style from './Style'
import { formatDate } from '../../global-funciton/convert-number'

const NotifyItem = ({ item }) => {
    return (
        <TouchableOpacity>
            <View style={Style.notifyItemContainer}>
                <Image style={Style.image} source={{ uri: item.image }} />
                <View style={Style.infoWrapper}>
                    <Text style={Style.state}>Đặt hàng thành công</Text>
                    <Text style={Style.plantInfo}>
                        {item.name} |
                        <Text style={Style.feature}> {item.category}</Text>
                    </Text>
                    <Text style={Style.quantity}>{item.amount} sản phẩm</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const NotifyComponent = ({ orderInfo, onOrderPress }) => {
    return (
        <TouchableOpacity onPress={onOrderPress} style={Style.container}>
            <Text style={Style.date}>{formatDate(orderInfo.date)}</Text>
            <Line style={Style.line} height={1} />
            <FlatList
                data={orderInfo.products}
                renderItem={({ item }) => <NotifyItem item={item} />}
            />
        </TouchableOpacity>
    )
}


export { NotifyItem }
export default NotifyComponent