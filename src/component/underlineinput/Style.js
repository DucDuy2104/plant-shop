import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
    container: {
    },
    input: {
        borderBottomWidth: 1,
        borderColor: 'black',
        paddingRight: 50,
        paddingVertical: 5
    },
    lightInput: {
        color: 'gray',
        borderColor: 'gray'
    },
    icon: {
        width: 15, height: 15,
    },
    searchBtn: {
        position: 'absolute',
        right: 10,
        top: 15
    }
})

export default Style