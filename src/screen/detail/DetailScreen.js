import { View, Text, Image, ScrollView, FlatList, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { memo, useState } from 'react'
import Style from './Style'
import ToolBar from '../../component/toolbar/ToolBar'
import { colors } from '../../assets/color/Colors'
import { convertNumberToMoney } from '../../global-funciton/convert-number'
import Line from '../../component/line/Line'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/Reducer'

const Feature = ({ feature }) => {
    return <Text style={Style.feature}>{feature}</Text>
}

const InfoItem = ({ title, info, isHeader, style, isMargin, isHightlihgt }) => {
    return (
        <View style={[style, { marginTop: isMargin ? 15 : 0 }]}>
            <View style={Style.itemContainer}>
                <Text style={[Style.title, isHeader ? { fontSize: 16, color: 'black' } : {}]}>{title}</Text>
                <Text style={[Style.title, isHightlihgt && { color: colors.primaryGreen }]}>{info}</Text>
            </View>
            <Line height={isHeader ? 2 : 1} />
        </View>
    )
}

const AddToCartButton = ({ isDisable, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} disabled={isDisable} style={[Style.btnAddToCart, isDisable && { backgroundColor: '#ABABAB' }]}>
            <Text style={Style.btnTxt}>CHỌN MUA</Text>
        </TouchableOpacity>
    )
}

const BodyDetail = memo(
    ({ features, product }) => {
        return (
            <ScrollView style={Style.body}>
                <FlatList
                    horizontal
                    data={features}
                    renderItem={({ item }) => <Feature feature={item} />}
                    keyExtractor={(item, id) => id.toString()}
                />
                <Text style={Style.price}>{convertNumberToMoney(product.price)}đ</Text>
                <InfoItem title={'Chi tiết sản phẩm'} isHeader={true} />
                <InfoItem title={'Kích cỡ'} info={product.size} isMargin={true} />
                <InfoItem title={'Xuất xứ'} info={product.origin} isMargin={true} />
                <InfoItem title={'Tình trạng'} isHightlihgt={true} info={`còn ${product.quantity} sản phẩm`} isMargin={true} />
            </ScrollView>
        )
    }
)


const DetailScreen = ({route, navigation}) => {
    const [count, setCount] = useState(0)
    const { item } = route.params
    const dispatch = useDispatch()

    console.log('Item: ', item)

    const onHandleCount = (action) => {
        switch (action) {
            case 'add':
                setCount(preCount => preCount + 1)
                break
            case 'less':
                setCount(preCount => preCount == 0 ? 0 : preCount - 1)
                break
            default:
                throw new Error('No action match!')
        }
    }

    const onGoBack = () => {
        navigation.goBack()
    }

    const onGoToCart = () => {
        navigation.navigate('cart')
    }

    const onAddToCart = () => {
        const body = {
            _id:  item._id,
            name: item.name,
            image: item.image[0],
            price: item.price,
            category: item.category.name,
            amount: count,
            isChoose: false
        }

        console.log('Cart Object: ', body)
        dispatch(addToCart(body))
        ToastAndroid.show('Add success!', ToastAndroid.SHORT)
    }

    if(!item) {
        return (
            <Text>Loading...</Text>
        )
    }

    return (
        <View style={Style.container}>
            <ToolBar title={item.name} onRightPress={onGoToCart} onLeftPress={onGoBack} iconRight={require('../../assets/image/cart_icon.png')} iconLeft={require('../../assets/image/back.png')} />
            <Image style={Style.image} source={{uri: item.image[0]}} />
            <BodyDetail product={item} features={(item.category.name == 'Ưa sáng' || item.category.name == 'Ưa bóng') ? ['Cây trồng', item.category.name] : [item.category.name]} />
            <View style={Style.footer}>
                <View style={Style.headerFooter}>
                    <Text>Đã chọn {count} sản phẩm</Text>
                    <Text>Tạm tính</Text>
                </View>
                <View style={Style.countSection}>
                    <View style={Style.countWrapper}>
                        <TouchableOpacity onPress={() => onHandleCount('less')}>
                            <Image style={Style.iconControl} source={require('../../assets/image/less.png')} />
                        </TouchableOpacity>
                        <Text style={Style.count}>{count}</Text>
                        <TouchableOpacity onPress={() => onHandleCount('add')}>
                            <Image style={Style.iconControl} source={require('../../assets/image/add.png')} />
                        </TouchableOpacity>
                    </View>
                    <Text style={Style.estimatePrice}>{convertNumberToMoney(count * item.price)}đ</Text>
                </View>
                <AddToCartButton onPress={onAddToCart}  isDisable={count <= 0} />
            </View>
        </View>
    )
}




export default DetailScreen