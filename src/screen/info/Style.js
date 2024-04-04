import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { colors } from "../../assets/color/Colors";

const Style = StyleSheet.create({
    container: {
        flex: 1
    },
    wrapper: {
        paddingTop: 20,
        paddingHorizontal:50
    }, 
    image: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    name: {
        fontFamily: getFontFamily('Lato', 'regular'),
        fontWeight:'500',
        fontSize: 16,
        color:'black'
    },
    email:{
        fontFamily: getFontFamily('Lato', 'regular'),
        fontSize: 14
    },
    infoWrapper :{
        flexDirection:'row',
        alignItems: 'center',
        alignSelf: 'flex-start'
    },
    subInfo: {
        
        marginLeft: 30
    },
    line: {
        backgroundColor: colors.grayInApp,
        marginTop: 5
    },
    item: {
        fontFamily: getFontFamily('Lato', 'regular'),
        fontWeight:'500',
        color:'black',
        fontSize: 16,
        marginTop: 20
    },
    itemTitle: {
        fontFamily: getFontFamily('Lato', 'reguar'),
        fontSize: 16,
        color: colors.grayInApp
    },
    listContainer: {
        marginTop: 30
    },
    logout: {
        fontFamily: getFontFamily('Lato', 'regular'),
        fontSize: 16, 
        color: 'red',
        fontWeight: '500',
        marginTop: 20
    },
})

export default Style