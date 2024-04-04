import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { colors } from "../../assets/color/Colors";

const Style = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    title: {
        fontFamily: getFontFamily('Lato', 'regular'),
        fontSize: 14,
        color: 'black'
    },
    message: {
        fontFamily: getFontFamily('Lato', 'regular'),
        fontSize: 14,
        color: colors.grayInApp,
        marginTop: 3
    },
    line: {
        backgroundColor: colors.grayInApp,
        marginTop: 5
    },
    checkImg: {
        width: 20,
        height: 20,
        position:'absolute',
        top: 10,
        right: 20, 
        bottom: 0
    }
})

export default Style