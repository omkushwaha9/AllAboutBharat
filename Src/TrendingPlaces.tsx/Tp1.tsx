import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Tp1 = () => {
  return (
    <View>
        <Text style={styles.headingText}> Trending Places </Text>
      <View style={[styles.card, styles.cardElevated]}>
       <Image
       source={{
        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Ayodhya_Ram_Mandir_Inauguration_Day_Picture.jpg/1200px-Ayodhya_Ram_Mandir_Inauguration_Day_Picture.jpg',
       }}
       style={styles.cardimage}
       />
       <View style={styles.cardBody}>
         <Text style={styles.cardTitle}>
         Ram Mandir, Ayodhya
         </Text>
         <Text style={styles.cardLable}>
         Ayodhya, Uttar Pradesh
         </Text>
         <Text style={styles.cardDescription}>
         The Ayodhya Ram Mandir is a majestic temple constructed in the holy city of Ayodhya, India. 2. It is believed to be the birthplace of Lord Rama,
          a revered Hindu deity and hero of the Ramayana epic. 
         </Text>
         <Text style={styles.cardFooter}>
         5 Min Away Ayodhya
         </Text>
       </View>
      </View>
    </View>
  )
}

export default Tp1;

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight:"bold",
        paddingHorizontal:4,

    },
    card:{
        width:350,
        height:360,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:"auto",
    },
    cardElevated:{
        backgroundColor:"#bfcfff",
        borderRadius:5,
        elevation:3,
        shadowOffset:{
            width:0,
            height:2
        },
    },
    cardimage:{
        height:180,
        marginBottom:4,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
       // borderRadius:5,
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,
    },
    cardTitle:{
        color:"white",
        fontSize:22,
        fontWeight:"bold",
        marginBottom:6,
        
    },
    cardLable:{
        color:"white",
        fontSize:14,
        marginBottom:6,
    },
    cardDescription:{
        color:"#000000",
        fontSize:12,
        marginBottom:12,
        flexShrink:1,
        marginTop:6,
    },
    cardFooter:{
        color:"white",
    },


})