import { View, Text, Image, FlatList, Modal, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import ToolBar from '../../component/toolbar/ToolBar'
import CartItem from '../../component/cartitem/CartItem'
import ModalNotify from '../../component/modal-notify/ModalNotify'
import Style from './Style'
import { useDispatch, useSelector } from 'react-redux'
import { changeCartAmount, checkCart, deleteAllCart, deleteCartByName, deleteCarts } from '../../redux/Reducer'
import { convertNumberToMoney } from '../../global-funciton/convert-number'

const CartScreen = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false)
    const [isBuyVisible, setBuyVisible] = useState(false)
    const [modalContent, setModalContent] = useState({
        title: '',
        message: '',
        onYesPress: null
    })
    const appState = useSelector((state) => state.app)
    const dispatch = useDispatch()
    //on go back
    const onGoBack = () => {
        navigation.goBack();
    }

    const onCloseModal = () => {
        setModalVisible(false)
    }

    const deleteSingleCart = (name) => {
        dispatch(deleteCartByName(name))
        setModalVisible(false)
    }

    const onDeleteSingleCartPress = (name) => {
        setModalContent({
            title: 'Xác nhận xóa đơn hàng?',
            message: 'Thao tác này sẽ không thể khổi phục.',
            onYesPress: () => {
                deleteSingleCart(name)
            }
        })
        setModalVisible(true)
    }

    const onCheckPress = (name) => {
        dispatch(checkCart(name))
    }

    const onChangeAmount = (name, type) => {
        dispatch(changeCartAmount({ name, type }))
    }

    const toggleBuySection = () => {
        const choseCart = appState.cart.find(e => e.isChoose)
        if (choseCart && !isModalVisible) {
            setBuyVisible(true)
        } else {
            setBuyVisible(false)
        }
    }

    const deleteCheckCarts = () => {
        dispatch(deleteCarts())
        setModalVisible(false)
    }

    const deleteAll = () => {
        dispatch(deleteAllCart())
        setModalVisible(false)
    }

    const onDeletePress = () => {
        const choseCart = appState.cart.find(e => e.isChoose)
        if (choseCart) {
            setModalContent({
                title: 'Xác nhận xóa các đơn hàng này?',
                message: 'Thao tác này sẽ không thể khổi phục.',
                onYesPress: () => {
                    deleteCheckCarts()
                }
            })
        } else {
            setModalContent({
                title: 'Xác nhận xóa tất cả đơn hàng?',
                message: 'Thao tác này sẽ không thể khổi phục.',
                onYesPress: () => {
                    deleteAll()
                }
            })
        }


        setModalVisible(true)
    }

    const onBuyPress =() => {
        navigation.navigate('pay')
    }

    useEffect(() => {
        toggleBuySection()
    }, [appState.cart, isModalVisible])

    return (
        <View style={Style.container}>
            <ToolBar title={'GIỎ HÀNG'} onLeftPress={onGoBack} iconLeft={require('../../assets/image/back.png')} iconRight={require('../../assets/image/bin.png')}
                onRightPress={onDeletePress}
            />
            <FlatList
                style={{ flex: 1 }}
                data={appState.cart}
                renderItem={({ item }) => <CartItem onMinPress={() => onChangeAmount(item.name, 'min')} onAddPress={() => onChangeAmount(item.name, 'add')} onCheckPress={() => onCheckPress(item.name)} onDeletePress={() => onDeleteSingleCartPress(item.name)} item={item} />}
                keyExtractor={(item, id) => id.toString()}
            />

            <View style={[Style.buySection, { display: isBuyVisible ? 'flex' : 'none' }]}>
                <View style={{ flexDirection: 'row', marginBottom: 10, justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={Style.txt}>Tạm tính</Text>
                    <Text style={Style.price}>{convertNumberToMoney(appState.price)}đ</Text>
                </View>
                <TouchableOpacity onPress={onBuyPress} style={Style.buyBtn}>
                    <Text style={Style.btnTxt}>Tiến hành thanh toán</Text>
                    <Image style={{ width: 18, height: 18 }} source={require('../../assets/image/right.png')} />
                </TouchableOpacity>
            </View>

            <ModalNotify onYesPress={modalContent.onYesPress} isVisible={isModalVisible} title={modalContent.title} message={modalContent.message} onCancelPress={onCloseModal} />

        </View>
    )
}

export default CartScreen