import { StyleSheet } from "react-native";
import { colors } from "../../assets/color/Colors";
import { getFontFamily } from "../../assets/fonts/helper";

const Style = StyleSheet.create({
    orWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: colors.primaryGreen,
    },
    orTxt: {
        fontFamily: getFontFamily('Poppins', 'medium'),
        fontSize: 12,
        color: 'black',
        marginHorizontal: 20
    },
    iconFb: {
        width: 34,
        height: 34,
        objectFit: 'cover'
    },
    iconGg: {
        width: 39,
        height: 39,
        marginRight: 40
    },
    orderLogWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    hasNoAcc: {
        fontFamily: getFontFamily('Poppins', 'regular'),
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center'
    },
    createAcc: {
        color: colors.primaryGreen,
        marginLeft: 10
    },
    createAccWrapper: {
        flexDirection:'row',
        justifyContent:'center',
        marginTop: 30
    }
})

export default Style
