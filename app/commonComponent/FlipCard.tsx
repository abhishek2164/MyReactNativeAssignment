import React from 'react';
import {Image, Text, View,TouchableOpacity, Dimensions, StyleSheet} from 'react-native';
import Animated, {
  runOnUI,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
const {width}=Dimensions.get("window")
const FlipCard=(props:any)=>{

  const rotationF = useSharedValue(0);
  const rotationB = useSharedValue(180);
  const frontStyle = useAnimatedStyle(() => {
    return {
      transform: [{ perspective: 1000 }, { rotateY: `${rotationF.value}deg` }],
    };
  });
  const backStyle = useAnimatedStyle(() => {
    return {
      transform: [{ perspective: 1000 }, { rotateY: `${rotationB.value}deg` }],
    };
  });
  const onAnimate = () => {
    "worklet";
    if (rotationF.value === 180) {
      rotationF.value = withTiming(0, { duration: 1000 });
      rotationB.value = withTiming(180, { duration: 1000 });
      return;
    }
    rotationF.value = withTiming(180, { duration: 1000 });
    rotationB.value = withTiming(360, { duration: 1000 });
  };
  const animate = () => {
    runOnUI(onAnimate)();
  };
    function FrontView(){
      return(
        <Animated.View
        style={[
          frontStyle,
          styles.cardStyle,
          {
            backgroundColor:props?.data.color,
            paddingLeft:16
          },
          
        ]}
      >
         <Text style={styles.cardTopText}>{props.data.label}</Text>
         <View style={styles.cardBottomContainer}>
         <Text style={styles.cardBottomText}>{props.data.value}</Text>
         <Image source={props.data.icon} style={styles.cardIcon}/>
         </View>
        
        </Animated.View>
      )
    }
    function BackView(){
        return(
          <Animated.View
          style={[
            backStyle,
            {
              backgroundColor:props?.data.color,
             paddingHorizontal:5,
             justifyContent:"center",
             alignItems:"center"
            },
            styles.cardStyle
          ]}
        >
           <Text style={styles.backText}>{props.data.text}</Text>
          </Animated.View>
        )
      }
 return(
    <TouchableOpacity onPress={animate} style={styles.cardMainContainer}>
             <FrontView />
        <BackView/>
    </TouchableOpacity>
 )
}

const styles=StyleSheet.create({
  cardMainContainer:{        height:(width-80)/3 ,width: (width-80)/3,
  borderRadius:20,marginHorizontal:10,overflow:"hidden"},
  cardStyle:  {borderRadius:20,
  height: "100%",
  width:"100%",
  backfaceVisibility: "hidden",
  position: "absolute",
  },
  cardTopText:{fontSize:15,fontWeight:"400",color:"white",marginTop:15,marginBottom:20},
  cardBottomText:{fontSize:30,fontWeight:"600",color:"white"},
  cardBottomContainer:{flexDirection:"row",justifyContent:"space-between",alignItems:"center"},
  cardIcon:{height:36,width:36,tintColor:"white",opacity:0.4,marginRight:-6},
  backText:{color:"white",fontSize:12,fontWeight:"600"}
})
export default FlipCard