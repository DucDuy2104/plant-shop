import { View, Text, Image, FlatList, TouchableOpacity, AppState } from 'react-native'
import React from 'react'
import Style from './Style'
import ToolBar from '../../component/toolbar/ToolBar'
import Line from '../../component/line/Line'
import { useDispatch, useSelector } from 'react-redux'
import { resetUser } from '../../redux/Reducer'

const InfoList = ({ title, data, onChangeInfo }) => {
    return (
        <View  style={Style.listContainer}>
            <Text>{title}</Text>
            <Line style={Style.line} height={1} />
            <FlatList
                data={data}
                renderItem={({ item, index }) => <TouchableOpacity onPress={() => onChangeInfo(index)}><Text style={Style.item}>{item}</Text></TouchableOpacity>}
                keyExtractor={( item, id ) => id.toString()}
            />
        </View>
    )
}

const InfoScreen = ({navigation}) => {
    const appState =  useSelector((state) => state.app)
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(resetUser())
    }

    const onGoToChangeInfo = (id) => {
        if(id == 0) {
            navigation.navigate('update')
        }
    }
    return (
        <View style={Style.container}>
            <ToolBar title={'PROFILE'} />
            <View style={Style.wrapper}>
                <View style={Style.infoWrapper}>
                    <Image style={Style.image} source={!appState?.user?.image ? require('../../assets/image/profile.png') : {uri: appState.user.image}} />
                    <View style={Style.subInfo}>
                        <Text style={Style.name}>{appState.user.name}</Text>
                        <Text style={Style.email}>{appState.user.email}</Text>
                    </View>
                </View>
                <InfoList
                     data={dataChung}
                     title={'Chung'}
                     onChangeInfo={onGoToChangeInfo}
                />
                <InfoList
                     data={dataDieuKhoan}
                     title={'Điều khoản và bảo mật'}
                />
                <TouchableOpacity onPress={onLogout}>
                    <Text style={Style.logout}>Đăng xuất</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

var dataChung = [
    'Chỉnh sửa thông tin', 
    'Cẩm nang trồng cây',
    'Lịch sử giao dịch',
    'Q&A'
]

var dataDieuKhoan = [
    'Điều khoản và điều kiện', 
    'Chính sách quyền riêng tư'
]

export default InfoScreen