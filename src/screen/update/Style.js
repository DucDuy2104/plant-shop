import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { colors } from "../../assets/color/Colors";

const Style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40
    },
    image: {
        width: 100,
        height: 100,
    },
    imgBtn: {
        borderRadius: 100,
        alignSelf: 'center',
        marginTop: 20,
        overflow: 'hidden'
    },
    txt: {
        fontFamily: getFontFamily('Lato', 'regular'),
        fontSize: 14,
        color: 'black',
        marginTop: 20
    },
    input: {
        marginTop: 20,
    },

    buyTitle: {
        fontFamily: getFontFamily('Lato', 'regular'),
        fontSize: 14,
        color: 'white'
    },
    btnBuy: {
        padding: 20,
        borderRadius: 15,
        backgroundColor: colors.primaryGreen,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    btnDisable: {
        backgroundColor: 'gray'
    }
})

export default Style