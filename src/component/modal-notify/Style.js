import { StyleSheet } from "react-native";
import { colors } from "../../assets/color/Colors";
import { getFontFamily } from "../../assets/fonts/helper";

const Style= StyleSheet.create({
    container: {
        flex: 1
    },
    wrapperBackg: {
        position:'absolute',
        top: 0, bottom: 0, right: 0, left: 0,
        backgroundColor:'gray',
        opacity: 0.3
    },
    title: {
        color: 'black',
        fontFamily: getFontFamily('Lato', 'regular'),
        fontSize: 16,
        fontWeight: '500'
    },
    message:{
        fontSize: 14,
        fontFamily: getFontFamily('Lato', 'regular'),
        marginTop: 10
    },
    notifyWrapper:{
        backgroundColor:'white',
        borderRadius: 10,
        justifyContent:'center',
        alignItems:'center',
        padding: 20, 
        position:'absolute',
        bottom: 20, 
        left: 20, right: 20
    },
    btnYes: {
        backgroundColor:colors.primaryGreen,
        borderRadius: 5,
        padding: 15,
        width:'100%',
        alignItems:'center',
        marginTop: 10
    },
    txtYes: {
        color: 'white',
        fontFamily: getFontFamily('Lato', 'regular'),
        fontSize: 16
    },
    cancelTxt: {
        color: 'black',
        fontSize: 16,
        fontFamily: getFontFamily('Lato', 'regular'),
        textDecorationLine: 'underline',
        marginTop: 10
    }
})

export default Style