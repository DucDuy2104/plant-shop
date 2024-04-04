import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Style from './Style'
import ToolBar from '../../component/toolbar/ToolBar'
import Line from '../../component/line/Line'
import UnderlineInput from '../../component/underlineinput/UnderlineInput'
import PayHeader from '../../component/pay-header/PayHeader'
import DeliveryMethod from '../../component/delivery-method/DeliveryMethod'
import { colors } from '../../assets/color/Colors'
import ModalNotify from '../../component/modal-notify/ModalNotify'
import { useDispatch, useSelector } from 'react-redux'
import { convertNumberToMoney } from '../../global-funciton/convert-number'
import AxiosInstance from '../../helper/AxiosInstance'
import { deleteAllCart } from '../../redux/Reducer'

const PayMethod = ({ method, style, isChoose }) => {
    return (
        <TouchableOpacity style={style}>
            <Text style={[Style.payMethodTxt, { color: !isChoose ? 'black' : colors.primaryGreen }]}>{method}</Text>
            <Line height={1} style={Style.methodLine} />
            <Image style={[Style.image, !isChoose && { display: 'none' }]} source={require('../../assets/image/check_ch.png')} />
        </TouchableOpacity>
    )
}


const BuySection = ({ price, deliveryFee, isShow, isDisable, onBuyPress }) => {
    return (
        <View style={[Style.containerBuySection, {display: isShow ? 'flex' : 'none'}]}>
            <View style={Style.containerFlexRow}>
                <Text style={Style.buyTitle}>Tạm tính</Text>
                <Text style={[Style.buyTitle, { color: 'black' }]}>{convertNumberToMoney(price)}đ</Text>
            </View>
            <View style={Style.containerFlexRow}>
                <Text style={Style.buyTitle}>Phí vận chuyển</Text>
                <Text style={[Style.buyTitle, { color: 'black' }]}>{convertNumberToMoney(deliveryFee)}đ</Text>
            </View>
            <View style={Style.containerFlexRow}>
                <Text style={Style.buyTitle}>Tổng cộng</Text>
                <Text style={[Style.buyTitle, { color: colors.primaryGreen, fontSize: 16 }]}>{convertNumberToMoney(price + deliveryFee)}đ</Text>
            </View>
            <TouchableOpacity onPress={onBuyPress} disabled={isDisable} style={[Style.btnBuy, {backgroundColor: isDisable ? 'gray' : colors.primaryGreen}]}>
                <Text style={Style.btnBuyTxt}>TIẾP TỤC</Text>
            </TouchableOpacity>
        </View>
    )
}

const PayScreen = ({ navigation }) => {
    const appState = useSelector((state => state.app))
    const [isShowDialog, setShowDialog] = useState(false)
    const [isShowBuySection, setShowBuySection] = useState(true)
    const [isBtnDisable, setDisable ]= useState(false)
    const [customerInfo, setCustomer] = useState()
    const dispacth = useDispatch()

    useEffect(() => {
        setCustomer(appState.user)
    }, [appState.user])

    const checkFullInfo = () => {
        if(customerInfo?.name && customerInfo?.email && customerInfo?.address && customerInfo?.phoneNumber) {
            setDisable(false)
        } else {
            setDisable(true)
        }
    }

    const fecthBuy = async (order) => {
        try {
            const response = await AxiosInstance().post('/orders/order', order)
            console.log('response: ', response)
        } catch (error) {
            console.log('err: ', error.message)
        }
    }
    

    useEffect(() => {
        checkFullInfo()
    }, [customerInfo])

    const onBuyPress =() => {
        setShowDialog(true)
        setShowBuySection(false)
    }

    const onYesPress = async () => {
        const order = {
            email: appState.user.email,
            products: appState.cart.map(e => {
                return {
                    _id: e._id,
                    name: e.name,
                    amount: e.amount,
                    price: e.price,
                    image: e.image,
                    category: e.category
                }
            }),
            total: appState.deliveryFee + appState.price,
            address: customerInfo.address,
            phoneNumber: customerInfo.phoneNumber
        }
        console.log('Order: ', order)
        await fecthBuy(order)
        dispacth(deleteAllCart())
        navigation.navigate('order-detail', {
            order
        })
    }


    const onNameChange  = (txt) => {
        setCustomer(pre => ({
            ...pre,
            name: txt
        }))
    }

    const onEmailChange =(txt) => {
        setCustomer(pre => ({
            ...pre,
            email: txt
        }))
    }

    const onAddressChange = (txt) => {
        setCustomer(pre => ({
            ...pre,
            address: txt
        }))
    }

    const onPhoneNumberChange = (txt) => {
        setCustomer(pre => ({
            ...pre,
            phoneNumber: txt
        }))
    }
    return (
        <View style={Style.container}>
            <ToolBar iconLeft={require('../../assets/image/back.png')} title={'THANH TOÁN'} />
            <ScrollView contentContainerStyle={Style.body}>
                <PayHeader style={Style.payHeader} content={'thông tin khách hàng'} />
                <UnderlineInput onChangeText={onNameChange} value={customerInfo?.name || ''} style={Style.input} placeholder={'Họ và tên'} />
                <UnderlineInput onChangeText={onEmailChange} value={customerInfo?.email || ''} style={Style.input} placeholder={'Email'} />
                <UnderlineInput onChangeText={onAddressChange} value={customerInfo?.address || ''} style={Style.input} placeholder={'Địa chỉ'} />
                <UnderlineInput onChangeText={onPhoneNumberChange} value={customerInfo?.phoneNumber || ''} style={Style.input} placeholder={'Số điện thoại'} />
                <PayHeader style={Style.payHeader} content={'Phương thức vận chuyển'} />
                <DeliveryMethod isChoose={true} />
                <DeliveryMethod isChoose={false} isCOD={true} />
                <PayHeader style={Style.payHeader} content={'hình thức thanh toán'} />
                <PayMethod style={Style.payMethod} isChoose={true} method={'Thẻ VISA/MASTERCARD'} />
                <PayMethod style={Style.payMethod} method={'Thẻ ATM'} />
            </ScrollView>

            <BuySection onBuyPress={onBuyPress} isShow={isShowBuySection} isDisable={isBtnDisable} deliveryFee={appState.deliveryFee} price={appState.price} />
            <ModalNotify onYesPress={onYesPress} title={'Xác nhận thanh toán?'} isVisible={isShowDialog} />
        </View>
    )
}

export default PayScreen