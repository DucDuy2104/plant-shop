import { View, Text, Image } from 'react-native'
import React from 'react'
import HomeScreen from '../../screen/home/HomeScreen'
import SearchScreen from '../../screen/search/SearchScreen'
import NotifyScreen from '../../screen/notify/NotifyScreen'
import InfoScreen from '../../screen/info/InfoScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Style from './Style'

const Tab = createBottomTabNavigator()

const TabIcon = ({ icon, isFocus }) => {
  return (
    <View style={Style.iconContainer}>
      <Image style={Style.icon} source={icon} />
      <View style={[Style.dot, { display: isFocus ? 'flex' : 'none' }]} />
    </View>
  )
}

const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabel: () => null
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => <TabIcon isFocus={focused} icon={require('../../assets/image/home.png')} />
        }}
        name='home' component={HomeScreen} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => <TabIcon isFocus={focused} icon={require('../../assets/image/search.png')} />
        }}
        name='search' component={SearchScreen} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => <TabIcon isFocus={focused} icon={require('../../assets/image/notify.png')} />
        }}
        name='notify' component={NotifyScreen} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => <TabIcon isFocus={focused} icon={require('../../assets/image/info.png')} />
        }}
        name='info' component={InfoScreen} />
    </Tab.Navigator>
  )
}

export default BottomNav