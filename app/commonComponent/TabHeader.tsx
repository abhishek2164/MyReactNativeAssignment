import React from 'react';
import {Image, Text, View,TouchableOpacity, StyleSheet} from 'react-native';
import { IMAGES } from '../commonData/Images';
const TabHeader=(props:any)=>{
   return(
    <View style={{backgroundColor:  props.screen == "Home" ?  "#dee5e5":"#FAF9F6",...styles.tabMainContainer}}>
     <View style={styles.headerLeftContainer}>
      <TouchableOpacity >
        <Image source={IMAGES.menu_icon} style={{height:25,width:25}}/>
       
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Dashboard</Text>
     </View>
     <View style={styles.headerRightContainer}>
        <View>
   
        
      <TouchableOpacity style={styles.notificationContainer}>
     
        <Image source={IMAGES.notification_icon} style={styles.notificationIcon}/>
        
      </TouchableOpacity>
      <View style={styles.badgeContainer}>
             <Text style={styles.badgeTitle}>2</Text>
        </View>
</View>
      <TouchableOpacity style={styles.profileContainer}>
        <Image source={IMAGES.profile_icon} style={styles.profileIcon}/>
       
      </TouchableOpacity>
     </View>
    </View>
   )
}
const styles=StyleSheet.create({
tabMainContainer:{height:80,width:"100%",justifyContent:"space-between",flexDirection:"row",paddingHorizontal:20,alignItems:"center"},
profileContainer:{height:40,width:40,justifyContent:"center",alignItems:"center",backgroundColor:"white",borderRadius:20,elevation:2},
profileIcon:{height:40,width:40,resizeMode:"stretch"},
badgeContainer:{backgroundColor:"#2889bc",justifyContent:"center",alignItems:"center" ,height:20,width:20,position:"absolute",top:-5,right:-5,borderRadius:10},
badgeTitle:{fontSize:11,fontWeight:"300",color:"white",marginBottom:2},
notificationIcon:{height:25,width:25,transform: [{ rotate: '-20deg'}]},
notificationContainer:{backgroundColor:"white",justifyContent:"center",alignItems:"center",height:40,width:40,borderRadius:20,elevation:2},
headerRightContainer:{flexDirection:"row",width:100,justifyContent:"space-between"},
headerLeftContainer:{flexDirection:"row",alignItems:"center"},
headerTitle:{fontWeight:'600',fontSize:20,marginLeft:20,color:"black"}
})
export default TabHeader