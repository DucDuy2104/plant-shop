import { StyleSheet } from "react-native";
import { colors } from "../../assets/color/Colors";
import { getFontFamily } from "../../assets/fonts/helper";

const Style = StyleSheet.create({
    normal: {
        borderWidth: 1,
        borderColor: colors.grayInApp,
        borderRadius: 10,
        paddingHorizontal: 20,
        fontSize: 12,
        fontFamily: getFontFamily("Poppins", 400)
    },
    focus: {
        borderColor: colors.primaryGreen,
        borderWidth: 2
    },
    eyeImage: {
        width: 29, 
        height: 24,
        objectFit: 'cover',
    },
    eyeButton: {
        position: 'absolute',
        right: 20,
        top: 20,
        justifyContent:'center',
        alignItems:'center',
        alignSelf: 'baseline',
    },
    errorTxt: {
        fontFamily: getFontFamily('Poppins', 600),
        color:'red',
        fontSize: 11,
        marginTop: 5
    },
})


export default Style