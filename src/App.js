import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainStack from './navigation/main-stack/MainStack'
import { Provider } from 'react-redux'
import OrderDetail from './screen/order-detail/OrderDetail'
import UpdateScreen from './screen/update/UpdateScreen'
import { PersistGate } from 'redux-persist/es/integration/react'
import { persistor, store } from './redux/Store'
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App