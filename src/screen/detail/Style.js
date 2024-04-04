import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { colors } from "../../assets/color/Colors";

const Style = StyleSheet.create({
    //Feature Style
    feature: {
        fontFamily: getFontFamily('Lato', 'regular'),
        fontSize: 14,
        color: 'white',
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 5,
        backgroundColor: colors.primaryGreen,
        marginRight: 10
    },
    container: {
        flex: 1
    },
    image: {
        width: '100%',
        objectFit: 'contain',
        height: 300,
        backgroundColor: '#0000000D'
    },
    body: {
        paddingHorizontal: 40,
        paddingTop: 20,
    },
    price: {
        fontFamily: getFontFamily('Lato', 'regular'),
        fontWeight: '500',
        fontSize: 24,
        lineHeight: 34,
        color: colors.primaryGreen,
        marginVertical: 20
    },
    line: {
        width: '100%',
        height: 2,
        backgroundColor: 'black'
    },
    title: {
        fontFamily: getFontFamily('Lato', 'regular'),
        fontSize: 14,
        color: 'black'
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    footer: {
        padding: 20
    },
    count: {
        color:'black',
        fontFamily:getFontFamily('Lato', 'regular'),
        fontSize: 16
    },

    iconControl: {
        width: 25, height: 25,
        objectFit: 'contain'
    },
    estimatePrice: {
        fontFamily: getFontFamily('Lato', 'regular'),
        fontSize: 24,
        color:'black'
    },
    countWrapper: {
        flexDirection:'row',
        width: 130, 
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    countSection:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    headerFooter: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom: 10
    },
    btnAddToCart: {
        padding: 20,
        backgroundColor: colors.primaryGreen,
        borderRadius: 10,
        alignItems:'center',
        marginTop: 10
    },
    btnTxt: {
        fontFamily: getFontFamily('Lato', 'regular'),
        fontSize: 16,
        color:'white', 
    }
})

export default Style