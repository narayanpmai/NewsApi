import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import Color from '../Shared/Color'
import { useNavigation } from '@react-navigation/native';

function HeadLineList({newsList}) {
  const navigation=useNavigation();

  return (
    <View>
        <FlatList 
    data={newsList}
    renderItem={({item})=>(
      <View>
        <View style={{height:1, backgroundColor:Color.ktealColor, marginTop:10, marginLeft:-20}}>
        </View>
        <TouchableOpacity
        onPress={()=>navigation.navigate('readNews',{news:item})}
         style={{marginTop:10, display:"flex", flexDirection:"row", marginLeft:15}}>
          <Image source={{uri:item.urlToImage}} 
          style={{height:130, width:130, borderRadius:10}} />
          <View style={{marginRight:130, marginLeft:10}}>
          <Text 
            numberOfLines={3}
            style={{marginTop:5, fontSize:18, fontWeight:"800" }}>
                {item.title}
            </Text>
            <Text style={{marginTop:5, fontSize:16, fontWeight:"500", color:Color.appMainBlueColor }}>
                {item?.source.name}
            </Text>
          </View>
        </TouchableOpacity>

      </View>
    )}

    />
    </View>
  )
}

export default HeadLineList