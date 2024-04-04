import { Text, TouchableOpacity, View } from "react-native"
import Line from "../line/Line"
import Style from "./Style"
import DeliveryMethod from "../delivery-method/DeliveryMethod"


const PayHeader = ({ content, style, needChange }) => {
    return (
        <View style={style}>
            <View style={Style.headContent}>
                <Text style={Style.txtHeader}>{content.toUpperCase()}</Text>
                <TouchableOpacity style={{display: needChange ? 'flex': 'none'}}>
                    <Text style={Style.changeTxt}>Chỉnh sửa</Text>
                </TouchableOpacity>
            </View>
            <Line style={{ marginTop: 10 }} height={2} />
        </View>
    )
}

export default PayHeader