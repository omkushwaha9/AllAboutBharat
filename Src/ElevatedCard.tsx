import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>All About BHARAT</Text>
      <ScrollView horizontal={true} style={styles.container}>

        <View style={[styles.card, styles.cardElevated]}>
            <Text> History </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Trending Places </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text> Religion's </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text> Famous Food </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text> Latest  News </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text> States </Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default ElevatedCards

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 10,
      },
      container: {
        padding:8,
      },
      card: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        width:100,
        height:100,
        borderRadius:4,
        margin:8,
        
      },
      cardElevated:{
        backgroundColor:"#bfcfff",
        elevation:4,
        shadowOffset:{
            width:1,
            height: 1,
        },
        shadowColor:"black",
        shadowOpacity:0.5,
        shadowRadius:2,
      },
})