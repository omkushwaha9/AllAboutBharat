import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Tp2 = () => {
  return (
    <View>
      
      <View style={[styles.card, styles.cardElevated]}>
       <Image
       source={{
        uri: 'https://www.tourmyindia.com/blog//wp-content/uploads/2020/11/Feature-Akshardham-Temple.jpg',
       }}
       style={styles.cardimage}
       />
       <View style={styles.cardBody}>
         <Text style={styles.cardTitle}>
            Akshar Dham
         </Text>
         <Text style={styles.cardLable}>
         Gandhinagar, Gujarat
         </Text>
         <Text style={styles.cardDescription}>
         Akshardham is a majestic, intricately carved stone structure that stands amid
          sprawling gardens set in a 23-acre plot at Gandhinagar. 
         </Text>
         <Text style={styles.cardFooter}>
         42 Min away Ahemdabad
         </Text>
       </View>
      </View>
    </View>
  )
}

export default Tp2;

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
        color:"#242B2E",
        fontSize:12,
        marginBottom:12,
        flexShrink:1,
        marginTop:6,
    },
    cardFooter:{
        color:"white",
    },


})