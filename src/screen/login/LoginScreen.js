import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, Pressable } from 'react-native'
import React, { useState } from 'react'
import Style from './Style'
import InputText from '../../component/input/InputText'
import ButtonLogin from '../../component/button/ButtonLogin'
import LogFooter from '../../component/logfooter/LogFooter'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/usersAPI'
import { setErrTxt } from '../../redux/Reducer'



const LoginScreen = ({ navigation }) => {
    const [checkRemember, setCheckRemember] = useState(false)
    const [email, setEmail] = useState()
    const [pass, setPass] = useState()
    const dispatch = useDispatch()
    const appState = useSelector((state) => state.app)
    const onCheckPress = () => {
        setCheckRemember(!checkRemember)
    }


    const handleLogin = () => {
        try {
            const body = {
                email,
                password: pass
            }
            dispatch(login(body))
        } catch (error) {
            dispatch(setErrTxt('Login error'))
            console.log('Login err: ', error.message)
        }
    }


    const onRegisterPress = () => {
        navigation.navigate('register')
    }


    const onLoginPress = async () => {
        if (!pass || !email) {
            dispatch(setErrTxt('Empty value!'))
            return
        }
        handleLogin()
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}>
            <View style={Style.container}>
                <Image style={Style.logBg} source={require('../../assets/image/login_backg.png')} />
                <Text style={Style.headerTitle}>Chào  mừng bạn{`\n`}
                    <Text style={Style.subHeaderTitle}>Đăng nhập tài khoản</Text>
                </Text>
                <InputText
                    placeHolder={'Nhập email'}
                    style={Style.input}
                    value={email}
                    onChangeText={(txt) => setEmail(txt)}
                />
                <InputText
                    placeHolder={'Mật khẩu'}
                    style={Style.input}
                    isPassWord={true}
                    value={pass}
                    onChangeText={(txt) => setPass(txt)}
                    errorText={appState.errText}
                />
                <View style={Style.rememberCont}>
                    <Pressable onPress={onCheckPress}>
                        <Image style={[Style.checkRemember]} source={checkRemember ? require('../../assets/image/check_ch.png') : require('../../assets/image/check.png')} />
                    </Pressable>
                    <Pressable onPress={onCheckPress} style={Style.rememberAcc}>
                        <Text style={Style.rememberAcc}>Nhớ tài khoản</Text>
                    </Pressable>
                    <TouchableOpacity>
                        <Text style={Style.forgetTxt}>Quên mật khẩu?</Text>
                    </TouchableOpacity>
                </View>
                <ButtonLogin onPress={onLoginPress} style={Style.logBtn} title={'Đăng nhập'} />
                <LogFooter onMessPress={onRegisterPress} footTitle={'Bạn chưa có tài khoản?'} creOrLog={'tạo tài khoản'} />
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen