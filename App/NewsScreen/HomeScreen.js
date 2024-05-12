import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import CategoryTextSlider from '../Componets/CategoryTextSlider'
import Color from '../Shared/Color';
import { Ionicons } from '@expo/vector-icons';
import TopHeadLineSlider from '../Componets/TopHeadLineSlider';
import HeadLineList from '../Componets/HeadLineList';
import TourismAPI from '../Services/TourismAPI';

function HomeScreen() {
  const [newsList, setNewsList]=useState([])
  const [loading, setLoading]=useState(true)
    useEffect(()=>{
        //getTopHeadline();
        getNewsByCategory('latest');

    }, [])

    const getNewsByCategory = async(category)=>{
      setLoading(true);
        const result=(await TourismAPI.getByCategory(category)).data;
        setNewsList(result.articles)
        setLoading(false)
        

    }
  return (
    <ScrollView style={{backgroundColor:Color.appTextColor}}>
     
        <View style={{display:"flex", flexDirection:"row", justifyContent:'space-between', alignItems:'center', marginTop:20}}>
        <Text style={styles.appName}> Panchpokhari Tourism</Text>
        <Ionicons name="notifications-outline" size={25} color="black" />
        </View>
        {/* Category List */}
        <CategoryTextSlider selectCategory={(category)=>getNewsByCategory(category)} />
        {loading?<ActivityIndicator style={{marginTop:Dimensions.get('screen').height*0.40}} />: 
      <View>

        {/* Category List */}
        <TopHeadLineSlider newsList={newsList} />
        
        {/* HeadLine List */}
        <HeadLineList newsList={newsList}/>
        
        </View>
      }
        

    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
appName:{
    top:10,
    fontSize:24,
    fontWeight:'bold',
    color:Color.ktealColor,
    padding:20,
    
},

})