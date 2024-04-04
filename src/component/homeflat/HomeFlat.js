import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import Style from './Style'
import PlantItem from '../plant/PlantItem'
const HomeFlat = ({ listItem, title, numColumns, renderItem, onViewMorePress }) => {
    return (
        <View style={Style.container}>
            <FlatList
                ListHeaderComponent={
                    <Text style={Style.title}>{title}</Text>
                }
                style={Style.flat}
                numColumns={numColumns || 2}
                data={listItem}
                renderItem={renderItem}
                keyExtractor={(item, i) => i.toString()}
            />
            <TouchableOpacity onPress={onViewMorePress} style={Style.viewMoreBtn}>
                <Text style={Style.viewMore}>xem thêm {title.toLowerCase()}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeFlat