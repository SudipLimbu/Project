import { useNavigation } from '@react-navigation/core'
import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'

const HomeScreen = () => {
  const navigation = useNavigation()

  const handleEOD = () => { //takes user to the contact us screen
    navigation.replace("EOD")
  }
  const handleReplenishments = () => { //takes user to the contact us screen
    navigation.replace("Replenishments")
  }
  const handleTransactions = () => { //takes user to the contact us screen
    navigation.replace("Transactions")
  }
  const handleDispute = () => { //takes user to the contact us screen
    navigation.replace("Disputes")
  }
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    
    <View style={styles.container}>
      <View style={styles.signout2}></View>
      <View style={styles.signout}>
      <TouchableOpacity onPress={handleSignOut}>
        <Text >Sign Out: {auth.currentUser?.email}</Text></TouchableOpacity></View>

    <View style={styles.container1}>
      <TouchableOpacity style={styles.cuButton}
          onPress={handleEOD}>
          <Text style={styles.buttonText} >EOD</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cuButton}
          onPress={handleReplenishments}>
          <Text style={styles.buttonText}>Replens</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cuButton}
          onPress={handleTransactions}>
          <Text style={styles.buttonText}>Transactions</Text></TouchableOpacity>

          <TouchableOpacity style={styles.cuButton}
          onPress={handleDispute}>
          <Text style={styles.buttonText}>Disputes</Text></TouchableOpacity></View>
      
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    //justifyContent: "flex-end",//adds to the bottom
    //justifyContent:'center',
    padding:10,
    alignItems: 'center',  
  },
  
  cuButton:{
    alignItems:'center',
    backgroundColor:'#4267B2',
    width:'80%', 
    padding:10,
    marginTop:40,
    //justifyContent: "flex-end",//adds to the bottom
    padding:10,
  },
  buttonText:{
    color:'white',
  },

  container1:{
    alignItems:'center',
    width:'80%',
    padding:0,
  },
  signout:{
    //flex:1,
    backgroundColor:'#4267B2',
    width:'80%', 
    padding:10,
    marginTop:40,
    alignItems:'center',
    //justifyContent: "flex-end",//adds to the bottom
    padding:10,
  },
  signout2:{
    //backgroundColor:'#4267B2',
    width:'80%',
    padding:10,
    marginTop:200,
    alignItems:'center',

  }

})