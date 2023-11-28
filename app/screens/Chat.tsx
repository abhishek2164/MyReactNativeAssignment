import React from 'react';
import {FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import TabHeader from '../commonComponent/TabHeader';
import Separator from '../commonComponent/Separator';
import FlipCard from '../commonComponent/FlipCard';
import { IMAGES } from '../commonData/Images';
import { PieChart } from 'react-native-gifted-charts';
const Chat=(props:any)=>{
    const PieData=[{value:298,title:"Occupied",range:"48%",color:"#3e52b6"},{value:249,title:"Vacant",range:"39%",color:"#99def0"},{value:85,title:"Maintenance",range:"13%",color:"#f09930"}]
    function CardView(){
        const taskList=[{label:"New",value:3,text:'New Back Text',color:"#f09930",icon:IMAGES.flag_icon},{label:"Assigned",value:16,text:'Assigned Back Text',color:"#3e52b6",icon:IMAGES.round_arrow},{label:"Closed",value:32,text:'Closed Back Text',color:"#99def0",icon:IMAGES.checkmark}]
        return(
            <View style={{width:'100%'}}>
              <FlatList horizontal data={taskList}
              style={{paddingHorizontal:10}}
                  keyExtractor={item => item.label.toString()}
              renderItem={
                ({item})=>
                <FlipCard data={item}/>
              }
              />
            </View>
        )
    }
    function TopBottomView(){
        return(
            <View style={styles.topBottomContainer}>
               <Text style={styles.onTimeText}>
                On-time Completion Rate
               </Text>
               <View style={styles.midContainer}>
                <View style={styles.percentageContainer}>
                  <Text style={styles.bigPercentageText}>98%</Text>
                  <View style={styles.riseContainer}>
                  <Image source={IMAGES.up_arrow} style={styles.upArrowStyle}/>
                  <Text style={styles.percentageText}>2.73%</Text>
                  </View>
                  
                </View>
                <Image source={IMAGES.wave_icon} style={styles.waveStyle}/>
               </View>
            </View>
        )
    }
    function TopView(){
   return (
    <View style={{width:"100%",paddingBottom:30}}>
      <Text style={styles.taskSummaryText}>Task Summary</Text>
      <CardView/>
      <TouchableOpacity onPress={()=>{}} style={styles.seeButtonStyle} >
        <Text style={styles.seeText}>See all today tasks</Text>
        <Image source={IMAGES.down_arrow} style={styles.seeImageStyle}/>
      </TouchableOpacity>
      <Separator style={{marginHorizontal:20,marginVertical:25}}/>
      <TopBottomView/>
    </View>
   )
    }
    function PieChartView(){
        return(
            <View style={styles.pieMainContainer}>
               <View style={styles.pieLeftContainer}>
                {PieData.map((item:any,index)=>
                <View style={{flexDirection:'row'}}>
                    <View style={[styles.pointerStyle,{backgroundColor:item.color}]}/>
                    <View style={{marginLeft:15}}>
                        <Text style={styles.pointerTitleStyle}>{item.value}</Text>
                        <View style={{flexDirection:"row"}}>
                            <Text style={styles.subTitleStyle}>{item.title}</Text>
                            <Text style={styles.rangeStyle}>{` ${item.range}`}</Text>
                        </View>
                    </View>
                    </View>)}
               </View>
               <View style={{justifyContent:"center",alignItems:"center"}}>
               <PieChart data={PieData}  innerRadius={90} donut radius={100}/>
               <View  style={styles.pieInsideContainer}>
               <Text style={styles.pieTitleStyle}>632</Text>
               <Text style={styles.pieSubTitle}>Total Units</Text>
               </View>
               </View>
            </View>
        )
    }
    function BottomView(){
        return(
            <View style={styles.bottomContainer}>
                <View style={styles.bottomLeftContainer}>
                <Text style={styles.bottomLeftTitle}>Properties</Text>
                <TouchableOpacity onPress={()=>{}} style={{flexDirection:"row",alignItems:"center"}} >
        <Text style={styles.propertyTitle}>All properties</Text>
        <Image source={IMAGES.down_arrow} style={styles.downArrowStyle}/>
      </TouchableOpacity>
             </View>
             <PieChartView/>
            </View>
        )
    }
    return(
        <View style={styles.mainContainer}>
           <TabHeader/>
           <ScrollView  style={{flex:1}} contentContainerStyle={styles.scrollContentContainer}>
           <Separator/>
           <TopView/>
           <Separator style={{height:10}}/>
           <BottomView/>
           </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer:{flex:1},
    scrollContentContainer:{paddingBottom:50,backgroundColor:"#FAF9F6"},
    bottomContainer:{flex:1,backgroundColor:"#FAF9F6",paddingHorizontal:20,paddingTop:30},
    bottomLeftContainer:{flexDirection:"row",alignItems:"center",justifyContent:"space-between"},
    bottomLeftTitle:{color:"black",fontWeight:"700",fontSize:22},
    topBottomContainer:{paddingHorizontal:20},
    onTimeText:{fontSize:16,fontWeight:"700",color:"grey"},
    waveStyle:{height:35,width:150,tintColor:"#f09930",transform:[{rotate:"-15deg"}],resizeMode:"stretch"},
    upArrowStyle:{height:18,width:18,transform:[{rotate:"30deg"}],tintColor:"green",marginHorizontal:4},
    percentageText:{color:"green",fontSize:16,fontWeight:"500"},
    riseContainer:{flexDirection:"row",alignItems:"flex-end",marginBottom:5},
    bigPercentageText:{color:"black",fontSize:30,letterSpacing:1,fontWeight:"bold"},
    percentageContainer:{flexDirection:"row",marginTop:10,alignItems:"flex-end"},
    midContainer:{flexDirection:"row",justifyContent:"space-between",width:"100%"},
    taskSummaryText:{color:"black",fontSize:22,fontWeight:"700",letterSpacing:0.1,marginVertical:20,marginLeft:20},
    seeButtonStyle:{flexDirection:"row",marginLeft:20,alignItems:"center",marginTop:20},
    seeText:{fontSize:13,fontWeight:"700",color:"#52b7e9"},
    seeImageStyle:{height:22,width:22,transform:[{rotate:"-90deg"}],tintColor:"#52b7e9"},
    pieMainContainer:{flexDirection:"row",justifyContent:"space-between",marginTop:30},
    pieLeftContainer:{flex:1,justifyContent:"space-between"},
    pointerStyle:{height:20,width:20,borderRadius:5},
    pointerTitleStyle:{fontSize:20,fontWeight:"700",color:"black",lineHeight:21,letterSpacing:0.2},
    subTitleStyle:{color:"black",fontSize:14,fontWeight:"500"},
    rangeStyle:{color:"grey",fontSize:14,fontWeight:"700"},
    pieSubTitle:{fontSize:14,color:"grey",fontWeight:"600",marginTop:5},
    pieTitleStyle:{color:"black",fontSize:40,fontWeight:"800",letterSpacing:1},
    downArrowStyle:{height:24,width:24,transform:[{rotate:"-90deg"}],tintColor:"#52b7e9"},
    propertyTitle:{fontSize:15,fontWeight:"600",color:"#52b7e9"},
    pieInsideContainer:{position:"absolute",alignItems:"center"}

})

export default Chat;