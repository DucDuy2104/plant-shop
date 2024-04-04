import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";

const Style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems:'center',
        alignItems:'center',
        marginTop: 10
    },
    icon: {
        width: 16,
        height: 20,
        objectFit: 'contain'
    },
    historyTxt: {
        flex: 1,
        fontFamily: getFontFamily('Lato', 'regular'),
        fontSize: 15,
        color: 'black',
        paddingLeft: 20
    }
})

export default Style