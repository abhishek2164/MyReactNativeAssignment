import React, { useState } from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import TabHeader from '../commonComponent/TabHeader';
import { ScrollView } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { IMAGES } from '../commonData/Images';
import Separator from '../commonComponent/Separator';
import LinearGradient from 'react-native-linear-gradient';
import { BarChart } from 'react-native-gifted-charts';
const {width}=Dimensions.get("window")
const Home=(props:any)=>{
    const [selectedData,setData]=useState(0);
    function TopLabelView(){
        return(
            <View style={styles.topLabelContainer}>
            <Text style={styles.topLabelText}>{`$${formatPriceAmount(selectedData)}`}</Text>
            </View>
        )
    }
    const data=[ {value:2500,label:'Mar',frontColor:selectedData == 2500 ? "#52b7e9":"#e5f4f8",labelTextStyle:{color:selectedData == 2500 ? "#52b7e9":"grey"}, topLabelComponent:()=>selectedData == 2500 ?<TopLabelView/>:null}, {value:3500,label:'Apr',labelTextStyle:{color:selectedData == 3500 ? "#52b7e9":"grey"},frontColor:selectedData == 3500 ?"#52b7e9":"#e5f4f8",topLabelComponent:()=>selectedData == 3500 ?<TopLabelView/>:null},  {value:4500,label:'May',labelTextStyle:{color:selectedData == 4500 ? "#52b7e9":"grey"},frontColor:selectedData == 4500 ? "#52b7e9":"#e5f4f8",topLabelComponent:()=>selectedData == 4500 ?<TopLabelView/>:null}, {value:6500,label:'Jun',labelTextStyle:{color:selectedData == 6500 ? "#52b7e9":"grey"},frontColor:selectedData == 6500 ?"#52b7e9":"#e5f4f8",topLabelComponent:()=>selectedData == 6500 ?<TopLabelView/>:null}, {value:5320,label:'Jul',labelTextStyle:{color:selectedData == 5320 ? "#52b7e9":"grey"},frontColor:selectedData == 5320 ? "#52b7e9":"#e5f4f8",topLabelComponent:()=>selectedData == 5320 ?<TopLabelView/>:null}, {value:4200,label:'Aug',labelTextStyle:{color:selectedData == 4200 ? "#52b7e9":"grey"},frontColor:selectedData == 4200 ? "#52b7e9":"#e5f4f8",topLabelComponent:()=>selectedData == 4200 ?<TopLabelView/>:null}];
    const formatPriceAmount = (amount: number) => {
        if (!amount)
            return amount
        var x = amount.toString();
        var lastThree = x.substring(x.length - 3);
        var otherNumbers = x.substring(0, x.length - 3);
        if (otherNumbers != '')
            lastThree = ',' + lastThree;
        var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
        return res
    }
    function TopHeading(){
        return (
            <View style={styles.topHeadingContainer}>
                <View style={styles.topHeadingTopContainer}>
              <Text style={styles.accountingText}>Accounting</Text>
              <TouchableOpacity onPress={()=>{console.log("clicked")}} style={styles.monthButtonStyle}>
              <Text style={styles.monthButtonText}>This Month</Text>
              <Image source={IMAGES.down_arrow} style={styles.monthButtonIcon}/>
              </TouchableOpacity>
              </View>
              <Text style={styles.dateText}>Aug 1,2021 - Aug 31, 2021</Text>
              </View>
        )
    }
    function GraphView(){
        return(
            <View style={styles.graphViewContainer}>
            <Text style={styles.averageTextStyle}>AVG. Monthly Income</Text>
            <Text style={styles.avgIncomeText}>$5,849.36</Text>
            <View style={styles.increaseTextContainer}>
                <Image source={IMAGES.up_arrow} style={styles.increaseIcon}/>
                <Text style={styles.percentageText}>3.89%</Text>
                <Text style={{color:"grey",fontSize:14}}>
                {' vs '}<Text style={{fontWeight:'500'}}>$5,432.74 </Text>
                    prev. 90 days
                </Text>
            </View>
            <BarChart  barWidth={36}  hideYAxisText maxValue ={7200} onPress={(item:any)=>{setData(item.value)}} initialSpacing={14} data = {data}   hideAxesAndRules barBorderTopLeftRadius={20} barBorderTopRightRadius={20}  />
          </View>
        )
    }
    function CellView(props:any){
       return (
        <View style={styles.cellMainContainer}>
          <LinearGradient
            style={styles.gradientStyle}
            colors={props.title == "Income" ? [
                '#b2e5ba',
                'transparent',
            ]:[ '#fbb0af', 'transparent']}
            >
             <View style={styles.iconContainer}>
                <Image source={IMAGES.money_icon} style={{tintColor:props.title == "Income" ? '#2d9254'  : '#f32a28',...styles.iconStyle}}/>
                </View>
         </LinearGradient>
         <View style={styles.cellRightContainer}>
            <Text style={styles.cellTitle}>{`$${props.value}`}</Text>
            <Text style={styles.cellSubTitle}>{`Total ${props.title}`}</Text>
         </View>
        </View>
       )
    }
    function BottomView(){
        return(
            <View style={styles.bottomContainer}>
               <CellView title={'Income'} value={'89,240.38'}/>
               <CellView title={'Expenses'} value={'16,237.82'}/>
            </View>
        )
    }
    return(
        <View style={styles.mainContainer}>
            <TabHeader screen={'Home'}/>
            <ScrollView style={styles.scrollStyle} contentContainerStyle={styles.scrollContentStyle}>
                <TopHeading/>
                <Separator style={styles.separatorFirst}/>
                <GraphView/>
                <Separator style={styles.separatorSecond}/>
                <BottomView/>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
mainContainer:{flex:1,backgroundColor:"#dee5e5"},
scrollStyle:{backgroundColor:"#FAF9F6",borderTopLeftRadius:25,borderTopRightRadius:25,paddingTop:20,flex:1},
scrollContentStyle:{paddingBottom:50},
separatorFirst:{marginTop:20,marginBottom:25,width:width-40,alignSelf:"center"},
separatorSecond:{width:width,marginTop:20,marginBottom:13},
bottomContainer:{paddingLeft:20},
topLabelContainer:{backgroundColor:"#223a55",height:20,borderRadius:15,marginBottom:5,width:60},
topLabelText:{color:"white",fontSize:14,alignSelf:"center"},
topHeadingContainer:{paddingHorizontal:20},
monthButtonStyle:{flexDirection:"row",alignItems:"center"},
monthButtonText:{fontSize:16,color:"black",fontWeight:"600",marginRight:1},
monthButtonIcon:{height:18,width:18,tintColor:"black"},
dateText:{color:"gray",fontSize:14,marginTop:5,fontWeight:"600"},
accountingText:{color:"black",fontSize:22,fontWeight:"700",letterSpacing:0.1},
topHeadingTopContainer:{flexDirection:'row',justifyContent:"space-between",alignItems:"center"},
cellMainContainer:{flexDirection:"row",marginVertical:12},
gradientStyle:{height:60,width:60,borderRadius:30,justifyContent:"center",alignItems:'center'},
iconContainer:{backgroundColor:"white",height:50,width:50,borderRadius:25,justifyContent:"center",alignItems:"center"},
iconStyle:{height:25,width:25},
cellRightContainer:{marginLeft:15},
cellTitle:{fontWeight:'700',color:"black",fontSize:30,letterSpacing:0.6},
cellSubTitle:{fontSize:14,color:"grey",marginTop:3,fontWeight:"500"},
percentageText:{color:"green",fontSize:14,fontWeight:'400'},
increaseIcon:{height:14,width:14,transform:[{rotate:"30deg"}],tintColor:"green",marginRight:4},
increaseTextContainer:{flexDirection:"row",alignItems:"center",marginTop:5,marginBottom:20},
averageTextStyle:{color:'black',marginBottom:5,fontSize:16,fontWeight:"600"},
avgIncomeText:{color:'black',fontSize:40,letterSpacing:2,fontWeight:"bold"},
graphViewContainer:{paddingLeft:20}
})
export default Home;