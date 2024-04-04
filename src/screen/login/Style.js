import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { colors } from "../../assets/color/Colors";

const Style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    logBg: {
        position: 'absolute',
        width: 482,
        height: 487,
        top: -170,
        left: -50
    },
    headerTitle: {
        fontFamily: getFontFamily('Poppins', 'bold'),
        fontSize: 30,
        color: 'black',
        marginTop: 310,
        textAlign: 'center',
    },
    subHeaderTitle: {
        fontFamily: getFontFamily('Poppins', 'regular'),
        fontSize: 18
    },
    input: {
        marginTop: 10
    },
    rememberAcc: {
        fontFamily: getFontFamily('Poppins', 'medium'),
        flex: 1,
        marginLeft: 5
    },
    checkRemember: {
        width: 20,
        height: 20,
        objectFit: 'cover'
    },
    rememberCont: {
        flexDirection: 'row',
        marginTop: 15
    },
    forgetTxt: {
        fontFamily: getFontFamily('Poppins', 'medium'),
        color: colors.primaryGreen
    },
    logBtn: {
        marginTop: 25
    }
})

export default Style;