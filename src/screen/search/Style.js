import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";

const Style = StyleSheet.create({
    container: {
        flex: 1
    },
    toolBar: {
        marginTop: 20
    },
    body: {
        paddingHorizontal: 40
    },
    lstkTxt : {
        fontFamily: getFontFamily('Lato', 'regular'),
        fontWeight:'500',
        fontSize: 16,
        color:'black',
        marginTop: 40
    },
    flat: {
        marginTop: 10,
    },
    searchFlat: {
        backgroundColor:'white'
    }
})

export default Style