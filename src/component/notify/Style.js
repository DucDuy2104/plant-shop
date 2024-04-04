import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { colors } from "../../assets/color/Colors";

const Style = StyleSheet.create({
    //NotifyItem Style
    notifyItemContainer: {
        flexDirection:'row',
        marginTop: 10
    },
    infoWrapper: {
        padding: 5,
        flex: 1,
        marginLeft: 10
    },
    image: {
        width: 80, height: 80,
        objectFit: 'contain',
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#0000000D'
    },
    state: {
        color: colors.primaryGreen,
        fontFamily: getFontFamily('Lato', 'regular'),
        fontSize: 16,
        marginBottom: 5
    },
    plantInfo: {
        fontFamily: getFontFamily('Lato', 'regular'),
        fontSize: 16,
        color: 'black',
        marginBottom: 5,

    },
    feature: {
        fontFamily: getFontFamily('Lato', 'regular'),
        fontSize: 14,
        color: '#7D7B7B'
    },
    quantity: {
        fontFamily: getFontFamily('Lato', 'regular'),
        fontSize: 14,
        color:'black'
    },

    //NotifyComponent Style
    container: {
        marginBottom: 20,
    },
    date: {
        color: 'black',
        fontFamily: getFontFamily('Lato', 'regular'),
        fontSize: 16
    },
    line: {
        marginTop: 5
    }
})

export default Style