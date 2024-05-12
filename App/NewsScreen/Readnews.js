import { View, Text, Image, Share } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Color from '../Shared/Color';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

const Readnews = () => {
  const news=useRoute().params.news;
  const navigation=useNavigation();
  useEffect(()=>
  {
    console.log(news)
  
  },[])
  const shareNews=()=>{
    Share.share({
      message:news.title+"\nRead More"+news.description
    })
  }
  return (
    <ScrollView style={{backgroundColor:Color.appTextColor, flex:1, marginTop:40, marginLeft:10, marginRight:10}}>
      <View style={{marginTop:10, marginBottom:10, display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
        <TouchableOpacity onPress={(()=>navigation.goBack())}>
          <AntDesign name="arrowleft" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Fontisto name="share" size={28} color="black" />
        </TouchableOpacity>
      
      </View>
      <Image source={{uri:news.urlToImage}} style={{width:'100%', height:300, borderRadius:15}} />

      <Text style={{marginTop:10, fontSize:22, fontWeight:"bold"}}>
      {news.title} 
      </Text>
      <Text style={{marginTop:10, fontSize:16, color:Color.appSecondaryColor}}>
      {news?.source.name}
      </Text>
      <Text style={{marginTop:10, fontSize:18, color:Color.kTextBlackColor,lineHeight:30}}>
      {news.description}
      </Text>
      <TouchableOpacity onPress={()=>WebBrowser.openBrowserAsync(news.url)}>
      <Text style={{marginTop:10, fontSize:16, color:Color.appSecondaryColor, fontWeight:"bold"}}>
      Read More
      </Text>
      </TouchableOpacity>

    </ScrollView>
  )
}

export default Readnews