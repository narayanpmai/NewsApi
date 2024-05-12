import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import Color from '../Shared/Color'
import { useNavigation } from '@react-navigation/native'

function TopHeadLineSlider({newsList}) {
 
const navigation=useNavigation();
  return (
   <View style={{marginTop:15}}>
    <FlatList 
    data={newsList}
    horizontal
    showsHorizontalScrollIndicator={false}
    renderItem={({item})=>(
        <TouchableOpacity 
        onPress={()=>navigation.navigate('readNews',{news:item})}
        style={{width:Dimensions.get('screen').width*0.80, marginRight:15,}}>
            <Image source={{uri:item.urlToImage}} 
            style={{height:Dimensions.get('screen').width*0.80,
            height:350, borderRadius:15}} />
            <Text 
            numberOfLines={2}
            style={{marginTop:10, fontSize:22, fontWeight:"800", marginLeft:15 }}>
                {item.title}
            </Text>
            <Text style={{marginTop:5, fontSize:16, fontWeight:"500", color:Color.appMainBlueColor, marginLeft:15 }}>
                {item?.source.name}
            </Text>
        </TouchableOpacity>
    )}

    />
   </View>
  )
}

export default TopHeadLineSlider