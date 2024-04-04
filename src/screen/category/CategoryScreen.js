import { View, Text, FlatList, Touchable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Style from './Style'
import ToolBar from '../../component/toolbar/ToolBar'
import PlantItem from '../../component/plant/PlantItem'
import AxiosInstance from '../../helper/AxiosInstance'

const CategoryItem = ({ item, onItemClick }) => {
  return (
    <TouchableOpacity onPress={onItemClick} style={[Style.catWrapper, { backgroundColor: item.isChoose ? 'green' : 'white' }]}>
      <Text style={[Style.itemTxt, { color: item.isChoose ? 'white' : 'black' }]}>{item.name}</Text>
    </TouchableOpacity>
  )
}

const CategoryScreen = ({ route, navigation }) => {
  const [page, setPage] = useState(1)
  const [products, setProducts] = useState([])
  const [currentFeature, setCurfeature] = useState('Tất cả')
  const [curProducts, setCurProducts] = useState([])
  const [categories, setCategories] = useState(listCategory)
  const { type } = route.params


  const fecthProducts = async () => {
    try {
      const response = await AxiosInstance().get(`/products/get/${type}?page=${page}`)
      if (response.status) {
        setProducts([...products, ...response.data])
      }
    } catch (error) {
      console.log('Get products err: ', error.message)
    }
  }


  useEffect(() => {
    fecthProducts()
  }, [page, type])


  useEffect(() => {
    if (currentFeature == 'Tất cả') {
      setCurProducts(products)
    } else {
      setCurProducts(products.filter(e => e.category.name == currentFeature))
    }
  }, [currentFeature, products])


  const onGoBack = () => {
    navigation.goBack()
  }

  const onGoToCart = () => {
    navigation.navigate('cart')
  }

  const onItemPress = (item) => {
    navigation.navigate('detail', { item })
  }

  const onCategoryItemClick = (item) => {
    setCategories(pre => pre.map((e, i) => ({
      ...e,
      isChoose: e.id == item.id
    })))
    setCurfeature(item.name)
  }

  return (
    <View style={Style.container}>
      <ToolBar title={'CÂY TRỒNG'} onLeftPress={onGoBack} onRightPress={onGoToCart} iconLeft={require('../../assets/image/back.png')} iconRight={require('../../assets/image/cart_icon.png')} />
      <View style={{ marginHorizontal: 20, display: type == 'plants' ? 'flex' : 'none' }}>
        <FlatList
          data={categories}
          renderItem={({ item }) => <CategoryItem onItemClick={() => onCategoryItemClick(item)}  item={item} />}
          keyExtractor={(item, id) => id.toString()}
          horizontal
        />
      </View>
      <View style={Style.wrapper}>
        <FlatList
          data={curProducts}
          renderItem={({ item }) => <PlantItem onItemPress={() => onItemPress(item)} item={item} />}
          keyExtractor={(item, id) => id.toString()}
          numColumns={2}
          contentContainerStyle={{ marginTop: 20 }}
        />
      </View>
    </View>
  )
}


var listCategory = [
  {
    id: 1,
    name: "Tất cả",
    isChoose: true
  },
  {
    id: 2,
    name: 'Ưa bóng',
    isChoose: false
  },
  {
    id: 3,
    name: 'Ưa sáng',
    isChoose: false
  }
]



export default CategoryScreen