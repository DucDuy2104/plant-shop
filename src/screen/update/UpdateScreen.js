import { View, Text, Image, TouchableOpacity, ToastAndroid, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Style from './Style'
import ToolBar from '../../component/toolbar/ToolBar'
import UnderlineInput from '../../component/underlineinput/UnderlineInput'
import { useDispatch, useSelector } from 'react-redux'
import AxiosInstance from '../../helper/AxiosInstance'
import { updateUser } from '../../redux/Reducer'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import axios from 'axios'

const UpdateScreen = ({ navigation }) => {
    const appState = useSelector((state) => state.app)
    const [disable, setDisable] = useState(false)
    const [userInfo, setUserInfo] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const dispacth = useDispatch()

    const cameraOptions = {
        mediaType: 'photo',
        maxWidth: 500,
        maxHeight: 500,
        selectionLimit: 1
    }

    const onGoBack = () => {
        navigation.goBack()
    }

    const checkInfo = () => {

        if (!userInfo?.name || !userInfo?.image || !userInfo?.email || !userInfo?.address || !userInfo?.phoneNumber) {
            setDisable(true)
        } else {
            setDisable(false)
        }
    }

    const changeImage = () => {
        launchImageLibrary(cameraOptions, (response) => {
            if (response?.assets[0]?.uri) {
                uploadImage(response)
            }
        })
    }

    const uploadImage = async (response) => {
        try {
            setLoading(true)
            const data = new FormData();
            data.append('file', {
                fileName: response.assets[0].fileName,
                name: response.assets[0].fileName,
                type: response.assets[0].type,
                uri: response.assets[0].uri,
            });
            data.append('upload_preset', 'ml_default');

            axios({
                url: 'https://api.cloudinary.com/v1_1/dapqiosjm/image/upload',
                method: 'POST',
                data: data,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data',
                    'Authorization': ' '
                }
            })
                .then(function (response) {
                    console.log("ket qua tra ve :", response.data);
                    setUserInfo({
                        ...userInfo,
                        image: response.data.secure_url
                    })
                    setLoading(false)
                })
                .catch(function (error) {
                    console.log("error from image :");
                })

        } catch (error) {
            console.log('Axios: ', error)
        }
    };

    const fecthUpdateUser = async () => {
        try {
            const response = await AxiosInstance().post('/users/update', userInfo)
            if (response.status) {
                dispacth(updateUser(response.data))
                ToastAndroid.show('Update success!', ToastAndroid.SHORT)
                navigation.goBack()
            }
        } catch (error) {
            ToastAndroid.show('Update failure!', ToastAndroid.SHORT)
            console.log('Update err: ', error.message)
        }
    }

    const onUpdatePress = () => {
        console.log('User info: ', userInfo)
        fecthUpdateUser()
    }

    const onChangeName = (txt) => {
        setUserInfo({
            ...userInfo,
            name: txt
        })
    }

    const onChangeEmail = (txt) => {
        setUserInfo({
            ...userInfo,
            email: txt
        })
    }

    const onChangeAddress = (txt) => {
        setUserInfo({
            ...userInfo,
            address: txt
        })
    }

    const onChangePhoneNumber = (txt) => {
        setUserInfo({
            ...userInfo,
            phoneNumber: txt
        })
    }

    useEffect(() => {
        checkInfo()
    }, [userInfo])

    useEffect(() => {
        setUserInfo(appState.user)
    }, [appState.user])
    return (
        <View style={Style.container}>
            <ToolBar onLeftPress={onGoBack} title={"CHỈNH SỬA THÔNG TIN"} iconLeft={require('../../assets/image/back.png')} />
            <TouchableOpacity onPress={changeImage} style={Style.imgBtn}>
                <Image style={Style.image} source={userInfo?.image ? { uri: userInfo?.image } : require('../../assets/image/profile.png')} />
            </TouchableOpacity>

            <ActivityIndicator size={'large'} style={{ display: isLoading ? 'flex' : 'none' }} />
            <Text style={Style.txt}>Thông tin sẽ được lưu cho lần mua kế tiếp.
                Bấm vào thông tin chi tiết để chỉnh sửa.</Text>

            <UnderlineInput onChangeText={onChangeName} value={userInfo?.name || ''} style={Style.input} placeholder={'name'} />
            <UnderlineInput onChangeText={onChangeEmail} disableInput={true} value={userInfo?.email || ''} style={Style.input} placeholder={'email'} />
            <UnderlineInput onChangeText={onChangeAddress} value={userInfo?.address || ''} style={Style.input} placeholder={'address'} />
            <UnderlineInput onChangeText={onChangePhoneNumber} value={userInfo?.phoneNumber || ''} style={Style.input} placeholder={'phone number'} />
            <View style={{ flex: 1 }} />
            <TouchableOpacity onPress={onUpdatePress} disabled={disable} style={[Style.btnBuy, disable && Style.btnDisable]}>
                <Text style={Style.buyTitle}>Lưu thông tin</Text>
            </TouchableOpacity>
        </View>
    )
}

export default UpdateScreen