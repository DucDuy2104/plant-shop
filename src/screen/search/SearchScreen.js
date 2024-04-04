import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Style from './Style'
import ToolBar from '../../component/toolbar/ToolBar'
import UnderlineInput from '../../component/underlineinput/UnderlineInput'
import HistorySearch from '../../component/historysearch/HistorySearch'
import SearchPlantItem from '../../component/searchplant/SearchPlantItem'
import AxiosInstance from '../../helper/AxiosInstance'

const SearchScreen = ({navigation}) => {
    const [searchProducts, setSearchProducts] = useState([])
    const [searchHistory, setSearchHistory] = useState(['Plant treee',
        'Song of India'])
    const [keySearch, setKeySearch] = useState()

    const fetchSearch = async () => {
        try {
            const response = await AxiosInstance().get(`/products/search?key=${keySearch}`)
            if(response.status) {
                setSearchProducts(response.data)
            } else {
                setSearchProducts([])
            }
        } catch (error) {
            setSearchProducts([])
            console.log('Search error: ', error.message)
        }
    }

    const onProductPress = (item) => {
        navigation.navigate('detail', { item })
    }

    useEffect(() => {
        fetchSearch()
    }, [keySearch])
    return (
        <View style={Style.container}>
            <ToolBar style={Style.toolBar} iconLeft={require('../../assets/image/back.png')} title={'TÌM KIẾM'} />
            <View style={Style.body}>
                <UnderlineInput onChangeText={(txt) => setKeySearch(txt)} value={keySearch} placeholder={'Tìm kiếm'} iconRight={require('../../assets/image/kinh.png')} />
                {
                    (searchProducts.length == 0 && !keySearch) ? (
                        <View>
                            <Text style={Style.lstkTxt}>Lịch sử tìm kiếm</Text>
                            <FlatList
                                data={searchHistory}
                                renderItem={({ item }) => <HistorySearch onItemClick={()=> setKeySearch(item)} historyText={item} />}
                                style={Style.flat}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>
                    ) : (
                        <FlatList
                            data={searchProducts}
                            keyExtractor={(item, id) => id}
                            renderItem={({ item }) => <SearchPlantItem onItemPress={()=>  onProductPress(item)} item={item} />}
                            style={Style.searchFlat}
                        />
                    )
                }

            </View>
            <Text style={[Style.lstkTxt, {marginLeft: 40, display: (keySearch && searchProducts.length == 0) ? 'flex' : 'none'}]}>Không tìm thấy sản phẩm</Text>
        </View>
    )
}




export default SearchScreen