// trending places 3
import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Tp3 = () => {
  return (
    <View>
      <View style={[styles.card, styles.cardElevated]}>
       <Image
       source={{
        uri: 'https://www.gujarattourism.com/content/dam/gujrattourism/images/heritage-sites/vijay-vilas-palace-kutch/Vijay-Vilas-Palace-Kutch-1.jpg',
       }}
       style={styles.cardimage}
       />
       <View style={styles.cardBody}>
         <Text style={styles.cardTitle}>
         Vijay Vilas Palace
         </Text>
         <Text style={styles.cardLable}>
         Kutch, Gujarat
         </Text>
         <Text style={styles.cardDescription}>
         The Vijay Vilas Palace is an impressive 450-acre palace estate at Mandvi where 
         the Maharaos of Kutch spent summer in the 1940s.
         </Text>
         <Text style={styles.cardFooter}>
         18 Min Away Mandvi
         </Text>
       </View>
      </View>
    </View>
  )
}

export default Tp3;

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