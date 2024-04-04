import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { colors } from "../../assets/color/Colors";

const Style = StyleSheet.create({
    container: {
        flex: 1
    },
    body: {
        paddingHorizontal: 40,
        flex: 1
    },
    input: {
        marginTop: 10
    },
    payHeader: {
        marginTop: 20
    },
    payMethodTxt: {
        color: 'black',
        fontFamily: getFontFamily('Lato', 'regular'),
        fontSize:  14
    },
    methodLine: {
        backgroundColor: colors.grayInApp,
        marginTop: 10
    },
    payMethod: {
        marginTop: 15
    },
    image: {
        width: 20, 
        height: 20,
        position: 'absolute',
        top: 2,
        right: 20
    },
    containerFlexRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4
    },
    containerBuySection: {
        padding: 20
    },
    buyTitle: {
        fontFamily:  getFontFamily('Lato', 'regular'),
        fontSize: 14, 
        color: colors.grayInApp
    },
    btnBuy: {
        padding: 20, 
        borderRadius: 15, 
        backgroundColor: colors.primaryGreen,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    btnBuyTxt: {
        color:'white',
        fontFamily: getFontFamily('Lato', 'regular'),
        fontSize: 16
    }
})


export default Style