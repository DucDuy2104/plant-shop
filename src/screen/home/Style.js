import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { colors } from "../../assets/color/Colors";

const Style = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingHorizontal: 20,
        paddingTop: 70,
        backgroundColor: '#F6F6F6',
        paddingBottom:140
    },
    headerTitle: {
        fontFamily: getFontFamily('Poppins', 'medium'),
        fontSize: 24,
        lineHeight: 40,
        color: 'black',
        width: 250
    },
    newProTxt: {
        fontFamily: getFontFamily('Lato', 'regular'),
        color:colors.primaryGreen,
        fontSize: 16,
        marginTop: 10
    },
    headerBack: {
        height: 210,
        position:'absolute',
        bottom:0,
        right: 0,
    },
    cartIcon: {
        width: 25, height: 25,
    },
    cartBtn: {
        padding: 15, backgroundColor:'white',
        alignSelf:'baseline',
        borderRadius: 50,
        position:'absolute',
        top: 60, 
        right:20
    },
    body: {
        padding: 20
    }
    
})

export default Style