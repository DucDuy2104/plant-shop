import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { colors } from "../../assets/color/Colors";

const Style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems:'center', 
        padding: 10
    },
    checkIcon: {
        width: 30, height: 30,
        objectFit: 'cover'
    },
    image: {
        width: 100, height: 100,
        borderRadius: 10,
        padding: 10, backgroundColor: 'white',
        marginLeft: 10
    },
    iconControll: {
        width: 20, height: 20
    }, 

    controllWrapper: {
        marginLeft: 15
    },
    name: {
        fontFamily: getFontFamily('Lato', 'regular'),
        fontWeight: '500', 
        fontSize: 16, 
        color:'black'
    },
    feature: {
        fontFamily:  getFontFamily('Lato', 'regular'),
        fontSize: 14,
        color: '#7D7B7B'
    },
    price: {
        fontFamily: getFontFamily('Lato', 'regular'),
        fontSize: 16,
        color: colors.primaryGreen,
        lineHeight: 22
    },
    countWrapper: {
        flexDirection: 'row',
        width: 100,
        justifyContent: 'space-between',
        marginTop: 10
    },
    delete: {
        textDecorationLine:'underline',
        fontFamily: getFontFamily('Lato', 'regular'),
        fontSize: 16,
        color: 'black'
    },
    btnDelete: {
        position: 'absolute',
        bottom: 20,
        right: 20
    }
})

export default Style