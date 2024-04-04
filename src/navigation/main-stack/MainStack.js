import React from 'react'
import BottomNav from '../bottomnav/BottomNav'
import LoginScreen from '../../screen/login/LoginScreen'
import RegisterScreen from '../../screen/register/RegisterScreen'
import CartScreen from '../../screen/cart/CartScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailScreen from '../../screen/detail/DetailScreen'
import CategoryScreen from '../../screen/category/CategoryScreen'
import { useSelector } from 'react-redux'
import PayScreen from '../../screen/pay/PayScreen'
import OrderDetail from '../../screen/order-detail/OrderDetail'
import UpdateScreen from '../../screen/update/UpdateScreen'

const Stack = createNativeStackNavigator()

const MainStack = () => {
  const appState = useSelector((state) => state.app)
  const screenOptions = {
    headerShown:  false
  }

  return (

    appState.user ?(
      <Stack.Navigator
        screenOptions={screenOptions}
      >
        <Stack.Screen name='main' component={BottomNav} />
        <Stack.Screen name='cart' component={CartScreen} />
        <Stack.Screen name='detail' component={DetailScreen} />
        <Stack.Screen name='category' component={CategoryScreen} />
        <Stack.Screen name='pay' component={PayScreen} />
        <Stack.Screen name='order-detail' component={OrderDetail} />
        <Stack.Screen name='update' component={UpdateScreen} />
      </Stack.Navigator>
    ) : (
      <Stack.Navigator
        screenOptions={screenOptions}
      >
        <Stack.Screen name='login' component={LoginScreen} />
        <Stack.Screen name='register' component={RegisterScreen} />
      </Stack.Navigator>
    )
  )
}

export default MainStack