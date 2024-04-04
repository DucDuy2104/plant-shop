import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";

const Style = StyleSheet.create({
    container :{
        paddingBottom: 30,
    },
    title: {
        fontFamily: getFontFamily('Lato', 'regular'),
        fontSize: 24, fontWeight: '500',
        color:'black',
        marginBottom: 10
    },
    flat: {
        marginTop:10
    },
    viewMore: {
        textDecorationLine: 'underline',
        fontFamily: getFontFamily('Lato'),
        fontWeight:'500', fontSize: 16
    },
    viewMoreBtn: {
        marginTop: 20,
        alignSelf:'flex-end',
        marginRight: 20
    }

})

export default Style