import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View,ScrollView } from 'react-native'
import { auth } from '../firebase'

const HomeScreen = () => {
  const navigation = useNavigation()
  const[people, setPeople] = useState([
    {key:'1', atmID:'12346578',  date:'2022-03-04',added:'£60,000.00	', removed:'£330.00	'},
    {key:'2',atmID:'12346578',  date:'2022-03-07',added:'£60,000.00	', removed:'£14,720.00'},
    {key:'3',atmID:'12346578',  date:'2022-03-11',added:'£60,000.00	', removed:'£16,390.00'},
    {key:'4',atmID:'12346578',  date:'2022-03-14',added:'£60,000.00	', removed:'£7,850.00'},
    {key:'5',atmID:'12346578',  date:'2022-03-18',added:'£60,000.00	', removed:'£12,230.00'},
    {key:'6',atmID:'12346578',  date:'2022-03-21',added:'£60,000.00	', removed:'£4,950.00'},
    {key:'7',atmID:'12346578',  date:'2022-03-25',added:'£60,000.00	', removed:'£6,280.00'},
    {key:'8',atmID:'12346578',  date:'2022-03-28',added:'£60,000.00	', removed:'£6,930.00'},
    {key:'9',atmID:'12346578',  date:'2022-04-01',added:'£60,000.00	', removed:'£50.00'},
    {key:'10',atmID:'12346578',  date:'2022-04-04',added:'£60,000.00	', removed:'£230.00'},
    {key:'11',atmID:'12346578',  date:'2022-04-08',added:'£60,000.00	', removed:'£6,020.00'},
    {key:'12',atmID:'12346578',  date:'2022-04-12',added:'£60,000.00	', removed:'£900.00	'},
    {key:'13',atmID:'12346578',  date:'2022-04-15',added:'£60,000.00	', removed:'£11,100.00'},
    {key:'14',atmID:'12346578',  date:'2022-04-18',added:'£60,000.00	', removed:'£280.00	'},
    {key:'15',atmID:'12346578',  date:'2022-04-22',added:'£60,000.00	', removed:'£6,240.00'},
    {key:'16',atmID:'12346578',  date:'2022-04-25',added:'£60,000.00	', removed:'£2,100.00'},
    {key:'17',atmID:'12346578',  date:'2022-04-29',added:'£60,000.00	', removed:'£30.00'},
    {key:'18',atmID:'12346578',  date:'2022-05-02',added:'£60,000.00	', removed:'£280.00'},
    {key:'19',atmID:'12346578',  date:'2022-05-06',added:'£60,000.00	', removed:'£50.00'}
    
    ]);
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
      <Text style={styles.trnx}>Replen</Text>
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
            
              {"Replen Date: "}
              {item.date}
              {"\n"}{"\n"}
              {"ATM:    "}
              {item.atmID}
              {"\n"}{"\n"}
              {"Cash Added: "}
              {item.added}
              {"\n"}{"\n"}
              {"Cash removed: "}
              {item.removed}
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
  },
  item:{
    marginTop:20,
    padding:20,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center'
      }

})