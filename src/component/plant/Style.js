import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { colors } from "../../assets/color/Colors";

const Style = StyleSheet.create({
    container: {
        width: 160,
        borderRadius: 10,
        marginRight: 35,
        marginTop: 10
    },
    image: {
        width: '100%',
        height: 140,
        objectFit:'cover',
        padding: 10, 
        backgroundColor:'#fdfdfd',
        borderRadius: 10
    },
    name: {
        fontFamily: getFontFamily('Lato','regular' ),
        fontWeight: '500',
        fontSize: 16,
        color:'black',
        marginTop: 10
    },
    feature: {
        color:'#7D7B7B',
        fontFamily: getFontFamily("Lato",'regular'),
        fontSize: 14,
        marginTop: 5
    },
    price: {
        fontFamily:getFontFamily('Lato', 'regular'),
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 24,
        color: colors.primaryGreen,
        marginTop: 5
    },
})

export default Style