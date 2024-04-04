import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";

const Style = StyleSheet.create({
    btnContainer: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        overflow:'hidden'
    },
    title: {
        fontFamily: getFontFamily('Poppins', 'bold'),
        fontSize: 20,
        color: 'white',
    },
    gradient: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        // borderRadius: 15
    }
})

export default Style