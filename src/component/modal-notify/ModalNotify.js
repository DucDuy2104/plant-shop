import { View, Text, TouchableOpacity, Modal } from 'react-native'
import React from 'react'
import Style from './Style'
const ModalNotify = ({title,message, isVisible, onYesPress, onCancelPress}) => {

    return (
        <Modal
            animationType='slide'
            visible={isVisible}
            transparent
        >
            <View style={Style.container}>
                <View style={Style.wrapperBackg} />
                <View style={Style.notifyWrapper}>
                    <Text style={Style.title}>{title}</Text>
                    <Text style={Style.message}>{message}</Text>
                    <TouchableOpacity onPress={onYesPress} style={Style.btnYes}>
                        <Text style={Style.txtYes}>Đồng ý</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onCancelPress}>
                        <Text style={Style.cancelTxt}>
                            Hủy bỏ
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default ModalNotify