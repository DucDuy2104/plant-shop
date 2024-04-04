import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { colors } from "../../assets/color/Colors";

const Style = StyleSheet.create({
    container: {
        
    },
    
    txtHeader: {
        fontFamily: getFontFamily('Lato', 'regular'),
        fontWeight: '500',
        fontSize: 16,
        color: 'black'
    }, 
    changeTxt: {
        fontFamily: getFontFamily('Lato', 'regular'),
        fontSize: 14,
        color: colors.grayInApp
    },
    headContent : {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})


export default Style