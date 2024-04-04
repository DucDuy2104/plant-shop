import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";

const Style = StyleSheet.create({

    //categoryItem Style 
    catWrapper: {
        backgroundColor:'green',
        alignSelf:'baseline',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginLeft: 10
    },
    itemTxt: {
        fontFamily: getFontFamily('Lato', 'regular'),
        fontSize: 14,
        color:'black',
    },

    container: {
        flex: 1,
        
    },
    wrapper :{
        paddingHorizontal: 40
    }
})


export default Style