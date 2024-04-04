import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";

const Style = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    image: {
        width: 80, height: 80,
        objectFit: 'contain',
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#0000000D'
    },
    name: {
        fontFamily: getFontFamily('Lato', 'regular'),
        fontSize: 16,
        color: 'black',
        marginBottom: 5
    },
    price: {
        fontFamily: getFontFamily('Lato', 'regular'),
        fontSize: 15,
        color: 'black',
        marginBottom: 5
    },
    remain: {
        fontFamily: getFontFamily('Lato', 'regular'),
        fontSize: 14,
    },
    txtWrapper: {
        padding: 10,
    }
})

export default Style