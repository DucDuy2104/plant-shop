import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";

const Style = StyleSheet.create({
    container: {
        backgroundColor: '#cdcdcd',
        borderRadius: 8,
        flexDirection:'row',
    },
    txtWrapper: {
        flex: 6,
        paddingVertical: 30,
        paddingHorizontal: 20
    },
    image: {
        flex:4,
        borderTopRightRadius:8,
        borderBottomRightRadius:8,
        height:'100%'
    },
    title: {
        fontFamily: getFontFamily('Lato', "regular"),
        color:'black',
        fontSize: 16,
        
        fontWeight: '600'
    },
    description: {
        fontFamily: getFontFamily('Lato', 'regular'),
        fontSize: 14,
        marginTop:3,

    }

})

export default Style
