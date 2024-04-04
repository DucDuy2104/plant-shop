import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import Style from './Style'
import ToolBar from '../../component/toolbar/ToolBar'
import PayHeader from '../../component/pay-header/PayHeader'
import { NotifyItem } from '../../component/notify/NotifyComponent'
import { convertNumberToMoney } from '../../global-funciton/convert-number'

const OrderDetail = ({ route, navigation }) => {
    const { order } = route.params
    const onBackPress = () => {
        navigation.goBack()
    }

    const onGoHome = () => {
        navigation.navigate('home')
    }
    return (
        <View style={Style.container}>
            <ToolBar onLeftPress={onBackPress} iconLeft={require('../../assets/image/back.png')} title={'CHI TIẾT ĐƠN HÀNG'} />
            <FlatList
                ListHeaderComponent={
                    <View>
                        <Text style={Style.orderSuccessTxt}>Đặt hàng thành công {'\n'}
                            <Text>20/04/2024</Text>
                        </Text>
                        <PayHeader style={Style.payHeader} content={'THÔNG TIN KHÁCH HÀNG'} />
                        <Text style={Style.infoTxt}>cvducduy@gmail.com</Text>
                        <Text style={Style.infoTxt}>Cam Ranh - Khánh Hòa</Text>
                        <Text style={Style.infoTxt}>0362530921</Text>
                        <PayHeader style={Style.payHeader} content={'Phương thức vận chuyển'} />
                        <Text style={Style.infoTxt}>
                            Giao hàng nhanh - 15.000đ {'\n'}
                            <Text>(Dự kiến giao hàng ngày 5-7/9)</Text>
                        </Text>
                        <PayHeader style={Style.payHeader} content={'hình thức thanh toán'} />
                        <Text style={Style.infoTxt}>Thẻ VISA/MASERCARD</Text>
                        <PayHeader style={Style.payHeader} content={'SẢN PHẨM ĐÃ MUA'} />

                    </View>
                }
                style={Style.flat}
                data={order.products}
                renderItem={({ item }) => <NotifyItem item={item} />}
                keyExtractor={(e, i) => i.toString()}
            />
            <View style={Style.footer}>
                <View style={Style.flexContainer}>
                    <Text style={Style.totalTxt}>Đã thanh toán</Text>
                    <Text style={Style.totalTxt}>{convertNumberToMoney(order.total)}đ</Text>
                </View>
                <TouchableOpacity onPress={onGoHome} style={Style.backBtn}>
                    <Text style={Style.btnTxt}>Quay về trang chủ</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OrderDetail