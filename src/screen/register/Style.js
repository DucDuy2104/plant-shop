import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { colors } from "../../assets/color/Colors";

const Style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    title: {
        fontFamily: getFontFamily('Poppins', 'bold'),
        fontSize: 30,
        color:'black',
        textAlign: 'center',
        marginTop: 190,
        marginBottom: 20
    },
    backg: {
        position:'absolute',
        width: 482,
        height: 487,
        top: -280,
        left: -50
        
    },
    subTitle: {
        fontFamily: getFontFamily('Poppins', 'regular'),
        fontSize: 18,
    },
    input: {
        marginBottom:10
    },
    conditions: {
        fontFamily: getFontFamily('Poppins', 'regular'),
        fontSize: 12,
        textAlign:'center',
        width:'80%',
        marginLeft: '10%',
        marginTop: 10,
        color:'black'
    }, 
    subCon: {
        fontSize: 12,
        fontFamily: getFontFamily('Poppins', 'medium'),
        color: colors.primaryGreen
    },
    btnSignUp: {
        marginTop: 10
    }
})

export default Style