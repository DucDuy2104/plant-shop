import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Style from './Style'
import HomeFlat from '../../component/homeflat/HomeFlat'
import PlantItem from '../../component/plant/PlantItem'
import GrownKit from '../../component/grownkit/GrownKit'
import AxiosInstance from '../../helper/AxiosInstance'

const HomeScreen = ({ navigation }) => {

  const [plants, setPlants] = useState([])
  const [pots, setPots] = useState([])
  const [accessories, setAccessories] = useState([])


  const fetchProducts = async (type) => {
    
    try {
      const result = await AxiosInstance().get(`/products/get/${type}`)
      console.log('data: ', result.data)
      return result
    } catch (error) {
      console.log('get product err: ', error.message)
    }
  }

  const fecthCombine = async () => {
    const resultPlants = await fetchProducts('plants')
    if (resultPlants.status) {
      setPlants(resultPlants.data.slice(0, 4))
    }

    const resultPots = await fetchProducts('pots')
    if (resultPots.status) {
      setPots(resultPots.data.slice(0, 4))
    }

    const resultAccessories = await fetchProducts('accessories')
    if (resultAccessories.status) {
      setAccessories(resultAccessories.data.slice(0, 4))
    }
  }

  const onItemPress = (item) => {
    navigation.navigate('detail', { item })
  }

  const renderItemPlant = ({ item }) => <PlantItem onItemPress={()=> onItemPress(item)} isPlant={true} item={item} />
  const renderGrownKit = ({ item }) => <GrownKit item={item} />

  //go to cart
  const onGoToCart = () => {
    navigation.navigate('cart')
  }

  //go to detail
  const onGoToDetail = (type) => {
    navigation.navigate('category', { type })
  }


  useEffect(() => {
    fecthCombine()
  }, [])
  return (
    <ScrollView>
      <View style={Style.container}>
        <View style={Style.header}>
          <Image style={Style.headerBack} source={require('../../assets/image/header_log_backg.png')} />
          <Text style={Style.headerTitle}>Planta - Tỏa sáng không gian nhà bạn</Text>
          <TouchableOpacity>
            <Text style={Style.newProTxt}>Hàng mới về {'->'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onGoToCart} style={Style.cartBtn}>
            <Image style={Style.cartIcon} source={require('../../assets/image/cart_icon.png')} />
          </TouchableOpacity>
        </View>
        <View style={Style.body}>
          <HomeFlat onViewMorePress={() => onGoToDetail('plants')} listItem={plants} renderItem={renderItemPlant} title={'Cây trồng'} />
          <HomeFlat onViewMorePress={() => onGoToDetail('pots')} listItem={pots} renderItem={renderItemPlant} title={'Chậu cây'} />
          <HomeFlat onViewMorePress={() => onGoToDetail('accessories')} listItem={accessories} renderItem={renderItemPlant} title={'Phụ kiện'} />
          <HomeFlat onViewMorePress={() => onGoToDetail(false)} listItem={listGrowKit} renderItem={renderGrownKit} title={'Compo chăm sóc (mới)'} numColumns={1} />
        </View>

      </View>
    </ScrollView>
  )
}


var listGrowKit = [
  {
    id: 1,
    title: 'Lemon Balm Grow Kit',
    description: 'Gồm: hạt giống Lemon Balm, gói đất hữu cơ, chậu Planta, marker đánh dấu...',
    image: require('../../assets/image/growkit.png')
  }
]
export default HomeScreen