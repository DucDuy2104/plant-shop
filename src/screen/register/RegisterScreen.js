import { View, Text, KeyboardAvoidingView, Image, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import Style from './Style'
import InputText from '../../component/input/InputText'
import ButtonLogin from '../../component/button/ButtonLogin'
import LogFooter from '../../component/logfooter/LogFooter'
import AxiosInstance from '../../helper/AxiosInstance'

const RegisterScreen = ({ navigation }) => {
    const [err, setErr] = useState('')
    const [user, setUser] = useState()

    const fecthRegister = async () => {
        try {
            const response = await AxiosInstance().post('/users/register', user)
            if (response.status) {
                ToastAndroid.show('Register success, please verify your email!', ToastAndroid.SHORT)
                setUser(null)
                navigation.navigate('login')
            } else {
                ToastAndroid.show('Register failure', ToastAndroid.SHORT)
            }
        } catch (error) {
            console.log('register err: ', error.message)
            ToastAndroid.show('Register failure', ToastAndroid.SHORT)
        }
    }


    //go to log in
    const onLoginPress = () => {
        navigation.navigate('login')
    }

    const onNameChange = (txt) => {
        setUser({
            ...user,
            name: txt
        })
    }

    const onEmailChange = (txt) => {
        setUser({
            ...user,
            email: txt
        })
    }

    const onPasswordChange = (txt) => {
        setUser({
            ...user,
            password: txt
        })
    }

    const onRePassChange = (txt) => {
        setUser({
            ...user,
            repass: txt
        })
    }

    const onRegisterPress = () => {
        console.log('user: ', user)
        if(!user.repass || !user.password || !user.name || !user.email) {
            setErr('Empty value!')
            return
        }

        if(user.repass !== user.password) {
            setErr('Password not match')
            return
        }

        fecthRegister()
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
        >
            <View style={Style.container}>
                <Image style={Style.backg} source={require('../../assets/image/login_backg.png')} />
                <Text style={Style.title}>Đăng ký {'\n'}
                    <Text style={Style.subTitle}>Tạo tài khoản</Text>
                </Text>
                <InputText onChangeText={onNameChange} value={user?.name || ''} placeHolder={'Họ tên'} style={Style.input} />
                <InputText onChangeText={onEmailChange} value={user?.email || ''} placeHolder={'Email'} style={Style.input} />
                <InputText onChangeText={onPasswordChange} value={user?.password || ''} placeHolder={'Mật khẩu'} style={Style.input} isPassWord={true}/>
                <InputText errorText={err} onChangeText={onRePassChange} value={user?.repass || ''} placeHolder={'Nhập lại mật khẩu'} style={Style.input} isPassWord={true} />
                <Text style={Style.conditions}>Để đăng ký tài khoản, bạn đồng ý{' '}
                    <Text style={Style.subCon}>Terms & Conditions</Text>
                    {' '}và{' '}
                    <Text style={Style.subCon}>Privacy Policy</Text>
                </Text>
                <ButtonLogin onPress={onRegisterPress} style={Style.btnSignUp} title={'Đăng ký'} />
                <LogFooter onMessPress={onLoginPress} footTitle={'Tôi đã có tài khoản'} creOrLog={'đăng nhập'} />
            </View>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen