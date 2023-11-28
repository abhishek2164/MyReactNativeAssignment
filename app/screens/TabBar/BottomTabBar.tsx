import React from 'react';
import {Image, Text, View} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IMAGES } from '../../commonData/Images';
import Home from '../Home';
import Chat from '../Chat';
import ScheduleScreen from '../ScheduleScreen';
import News from '../News';
import Profile from '../Profile';
import LinearGradient from 'react-native-linear-gradient';
const Tab = createBottomTabNavigator();
export default function BottomTabBar(props:any){
    const renderIcon = (focused: any, activeIcon: any, inActiveIcon: any) => {
        return (
            <LinearGradient
            style={{height:50,width:50,borderRadius:25,justifyContent:"center",alignItems:'center'}}
            colors={focused ? [
                '#dee5e5',
                'transparent',
            ]:[ 'transparent', 'transparent']}
            >
                <Image source={focused ? activeIcon : inActiveIcon} style={{ height: 25, width: 25,tintColor:focused ?"#1d6168":"#6f7e79" }} resizeMode="contain" />
                </LinearGradient>
        )
    }
    return(
        <Tab.Navigator
        initialRouteName={'Home'}
        backBehavior="history"
        tabBarOptions={{
            showLabel:false,
            style:{backgroundColor:"white",borderTopLeftRadius:25,borderTopRightRadius:25,height:70},
        }}
        >
               <Tab.Screen
                name={'Home'}
                component={Home}
                options={({ route }) => ({
                    tabBarIcon: ({ focused }) => renderIcon(focused, IMAGES.home_bar_selected, IMAGES.home_bar),
                })}
            />
               <Tab.Screen
                name={'Chat'}
                component={Chat}
                options={({ route }) => ({
                    tabBarIcon: ({ focused }) => renderIcon(focused, IMAGES.chat_bar_selected, IMAGES.chat_bar),
                })}
            />
            <Tab.Screen
                name={'Schedule'}
                component={ScheduleScreen}
                options={({ route }) => ({
                    tabBarIcon: ({ focused }) => renderIcon(focused, IMAGES.calendar_bar_selected, IMAGES.calendar_bar),
                })}
            />
            <Tab.Screen
                name={'News'}
                component={News}
                options={({ route }) => ({
                    tabBarIcon: ({ focused }) => renderIcon(focused, IMAGES.news_bar_selected, IMAGES.news_bar),
                })}
            />
            <Tab.Screen
                name={'Profile'}
                component={Profile}
                options={({ route }) => ({
                    tabBarIcon: ({ focused }) => renderIcon(focused, IMAGES.profile_bar_selected, IMAGES.profile_bar),
                })}
            />
            </Tab.Navigator>
    )
}
