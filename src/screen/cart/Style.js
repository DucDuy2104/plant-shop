import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { colors } from "../../assets/color/Colors";

const Style =  StyleSheet.create({
    container: {
        flex: 1
    }, 
    buySection: {
        width: '100%',
        padding: 20,
        backgroundColor: '#fff'
    },
    txt: {
        fontFamily: getFontFamily('Lato', 'regular'),
        fontSize: 14
    },
    price: {
        
        fontFamily: getFontFamily('Lato', 'regular'),
        fontWeight:'500',
        fontSize: 16,
        lineHeight: 22,
        color: 'black'
    },
    btnTxt: {
        fontFamily: getFontFamily('Lato', 'regular'),
        fontWeight: '500',
        color: 'white',
        fontSize: 18
    },
    buyBtn: {
        padding: 20,
        flexDirection:'row',
        justifyContent: 'space-between',
        backgroundColor: colors.primaryGreen,
        borderRadius: 5
    }
})

export default Style