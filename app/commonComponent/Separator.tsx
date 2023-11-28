import React from 'react';
import {Image, Text, View,TouchableOpacity} from 'react-native';
export default function Separator(props:any){
    return(
  <View style={{backgroundColor:"#dee5e5",height:1,width:"100%",...props.style}}/>

    )
}