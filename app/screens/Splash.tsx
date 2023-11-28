import React, { useEffect } from 'react';
import {StyleSheet, Text, View} from 'react-native';
export default function Splash(props: any) {
    useEffect(() => {
        setTimeout(() => {
            props.navigation.replace('TabScreens');
        }, 1000);
    },[])
    return (
        <View style={styles.splashContainer}>
            <Text style={styles.splashText}>Assignment Splash</Text>
        </View>
    )

}
const styles=StyleSheet.create({
splashContainer:{flex:1,backgroundColor:"blue",justifyContent:"center",alignItems:"center"},
splashText:{fontSize:20,color:"white",fontWeight:"bold"}
})