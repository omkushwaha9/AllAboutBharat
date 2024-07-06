// ActionCard
import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'
//
const ActionCard = () => {
    function openWebsite(WebsiteLink: string){
        Linking.openURL(WebsiteLink)
    }
  return (
    //
    <View>
      <Text style={styles.headingText}>FOUNDER</Text>
      <View style={[styles.card, styles.elevatedcard]}> 
        <View style={styles.headingContainer}>
        <Text style={styles.headerText}>
            OM KUSHWAHA
        </Text>
        </View>
        <Image source={{
          uri: 'https://ivanmosquera.net/wp-content/uploads/2018/05/react-native-800x450.png?w=492&h=277',
        }} 
        style={styles.cardimage}
        />
        <View style={styles.bodycontainer}>
          <Text numberOfLines={3}
          style={styles.introductioncontainer}>
          Myself, Om kushwaha i'm an Software Engineer,
          Completed my Degree from Ganpat University. Mehsana ,Gujrat 
          </Text>
        </View>
        <View style={styles.footercontainer}>
          <Text numberOfLines={3}
          style={styles.descriptioncontainer}>
          I'm passionate about building scalable and efficient software solutions.
          I have experience in developing web/Android/Ios applications. 
          </Text>
        </View>
        <View style={styles.footercontainer}>
          <TouchableOpacity
          onPress={() => openWebsite('https://reactnative-archive-august-2023.netlify.app/docs/getting-started?guide=ios') }
          >
            <Text style={styles.SocialLinks}> Read More </Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => openWebsite('https://www.instagram.com/p/Crl0ty4BvMV/?utm_source=ig_web_button_share_sheet') }
          >
            <Text style={styles.SocialLinks}> Follow me </Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  )
}

export default ActionCard

const styles = StyleSheet.create({
    headingText: {
      fontSize:24,
      fontWeight:"bold",
      padding:8,
    },
    card: {
      width:350,
      height:437,
      borderRadius:5,
      marginVertical:12,
      marginHorizontal:"auto",
    },
    elevatedcard: {
      backgroundColor:"#bfcfff",
      elevation:3,
    },
    headingContainer: {
      height:40,
      flexDirection:"row",
      justifyContent:"center",
      alignItems:'center',
    },
    headerText: {
      color:'white',
      fontSize:16,
      fontWeight:"bold",
    },
    cardimage:{
      height:190,
    },
    bodycontainer:{
      padding:10,
    },
    footercontainer:{
      padding:8,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-evenly",
    },
    introductioncontainer:{
      color:'black',
      fontWeight:"500",
    },
    descriptioncontainer:{
      color:'black',
      fontWeight:"500",
    },

    SocialLinks:{
      color:'white',
      fontSize:16,
      backgroundColor:"#809fff",
      paddingHorizontal:20,
      paddingVertical:2,
      borderRadius:40,
    },


})