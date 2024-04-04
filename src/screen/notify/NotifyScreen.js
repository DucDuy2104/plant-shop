import { View, Text, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Style from './Style'
import ToolBar from '../../component/toolbar/ToolBar'
import NotifyComponent from '../../component/notify/NotifyComponent'
import { useSelector } from 'react-redux'
import AxiosInstance from '../../helper/AxiosInstance'

const NotifyScreen = ({ navigation }) => {
    const [orders, setOrders] = useState([])
    const [resfresh, setRefesh] = useState(1)
    const [refreshing, setRefeshing] = useState(false)
    const appState = useSelector((state) => state.app)
    const fecthOrders = async () => {
        try {
            const response = await AxiosInstance().get(`/orders/get?email=${appState.user.email}`)
            if (response.status) {
                setOrders(response.data)
            }
        } catch (error) {
            console.log('Get orders: ', error.message)
        }
        setRefeshing(false)
    }

    const onOrderPress = (item) => {
        navigation.navigate('order-detail', {
            order: item
        })
    }
    useEffect(() => {
        fecthOrders()
    }, [appState.user, resfresh])
    return (
        <View
            style={Style.container}>
            <ToolBar iconLeft={require('../../assets/image/back.png')} title={'THÔNG BÁO'} />
            <FlatList
                refreshing={refreshing}
                onRefresh={() => {
                    setRefeshing(true)
                    setRefesh(pre => pre + 1)
                }}
                data={orders}
                renderItem={({ item }) => <NotifyComponent onOrderPress={() => onOrderPress(item)} orderInfo={item} />}
                style={Style.flat}
                keyExtractor={(item, id) => id}
            />
        </View>
    )
}


export default NotifyScreen