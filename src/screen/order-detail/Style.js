import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { colors } from "../../assets/color/Colors";

const Style = StyleSheet.create({
    container: {
        flex: 1
    },
    orderSuccessTxt: {
        fontFamily: getFontFamily('Lato', 'regular'),
        fontSize: 14,
        color: colors.primaryGreen,
        alignSelf: 'center',
        textAlign: 'center'
    },
    body: {
        paddingHorizontal: 40
    },
    payHeader: {
        marginTop: 30
    },
    infoTxt: {
        fontFamily: getFontFamily('Lato', 'regular'),
        fontSize: 14,
        color: colors.grayInApp,
        marginTop: 20
    },
    flat: {
        paddingHorizontal: 40,
        flex: 1,
    },
    flexContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    totalTxt: {
        fontFamily: getFontFamily('Lato', 'regular'),
        fontSize: 16,
        color: 'black',
        fontWeight: '500'
    },
    backBtn: {
        backgroundColor: colors.primaryGreen,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        marginTop: 10,
        borderRadius: 10
    },
    btnTxt: {
        color: 'white',
        fontFamily: getFontFamily('Lato', 'regular'),
        fontSize: 16,
    },
    footer: {
        padding: 20
    }
})

export default Style