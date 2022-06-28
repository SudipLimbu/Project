import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView} from 'react-native'
import { auth } from '../firebase'
import database from '@react-native-firebase/database';

const HomeScreen = () => {
  const navigation = useNavigation();

  
  const reference = database().ref('/User');
  reference.on('value', snapshot => {
    console.log('User data: ', snapshot.val());
    this.setState({
      name: snapshot.val(),
    });
  });

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Home")
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <View style={styles.signout}></View>
      <View style={styles.signout}></View>
      <View style={styles.signout}>
      <Text style={styles.trnx}>EOD</Text>
      </View>
      <View style={styles.signout2}>
      <TouchableOpacity onPress={handleSignOut}>
      <Text style={styles.back}>Back</Text>
      </TouchableOpacity></View>
      
      <ScrollView>
      {people.map((item)=>{
        return(
          <View key={item.key}>
            <Text style={styles.item}>
              {"Date:    "}
          
              {item.date}
              {"\n"}{"\n"}
              {"Dispensed: "}
              {item.dispensed}
              {"\n"}{"\n"}
              {"Opening Balance: "}
              {item.openingBalance}
              {"\n"}{"\n"}
              {"Closing Balance: "}
              {item.close}
            </Text>
          </View>

        )
      })}
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

  buttonText:{
    color:'white'
  },
  item:{
marginTop:20,
padding:20,
backgroundColor:'white',
alignItems:'center'

  },

trnx:{
  alignItems:'center',
  color:'white'
},
  signout:{
    //flex:1,
    backgroundColor:'#4267B2',
    width:'100%', 
    alignItems:'center',
    padding:10
  },
  signout2:{
    //flex:1,
    backgroundColor:'#4267B2',
    width:'100%', 
    padding:10
  },
  back:{
    color:'white'
  }

})