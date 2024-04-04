import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";

const Style = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    icon: {
        width: 16, height: 16,
        objectFit: 'cover'
    },
    title: {
        fontFamily: getFontFamily('Lato', 'regular'),
        fontSize: 16,
        color:'black'
    },
})

export default Style