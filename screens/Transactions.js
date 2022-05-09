import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View,ScrollView } from 'react-native'
import { auth } from '../firebase'

const HomeScreen = () => {
  const navigation = useNavigation()
  const[people, setPeople] = useState([  
{ key:'1',	date:'2022-03-01',	ATMid:'12346578	',trackingnumber:'	20600051abcd	',amount:'£100.00	'},
{	key:'2',date:'2022-03-02',	ATMid:'12346578	',trackingnumber:'	20600051abcd	',amount:'£20.00	'},
{	key:'3',date:'2022-03-03',	ATMid:'12346578	',trackingnumber:'	20600051abcd	',amount:'£250.00	'},
{	key:'4',date:'2022-03-04',	ATMid:'12346578	',trackingnumber:'	20600051abcd	',amount:'£200.00	'},
{	key:'5',date:'2022-03-05',	ATMid:'12346578	',trackingnumber:'	20600051abcd	',amount:'£200.00	'},
{	key:'6',date:'2022-03-06',	ATMid:'12346578	',trackingnumber:'	20600051abcd	',amount:'£300.00	'},
{	key:'7',date:'2022-03-07',	ATMid:'12346578	',trackingnumber:'	20600051abcd	',amount:'£130.00	'},
{	key:'8',date:'2022-03-08',	ATMid:'12346578	',trackingnumber:'	20600051abcd	',amount:'£100.00	'},
{	key:'9',date:'2022-03-09',	ATMid:'12346578	',trackingnumber:'	20600051abcd	',amount:'£100.00	'},
{	key:'10',date:'2022-03-10',	ATMid:'12346578	',trackingnumber:'	20600051abcd	',amount:'£10.00	'},
{	key:'11',date:'2022-03-11',	ATMid:'12346578	',trackingnumber:'	20600051abcd	',amount:'£200.00	'},
{	key:'12',date:'2022-03-12',	ATMid:'12346578	',trackingnumber:'	20600051abcd	',amount:'£50.00	'},
{	key:'13',date:'2022-03-13',	ATMid:'12346578	',trackingnumber:'	20600051abcd	',amount:'£10.00	'},
{	key:'14',date:'2022-03-14',	ATMid:'12346578	',trackingnumber:'	20600451abcd	',amount:'£200.00	'},
{	key:'15',date:'2022-03-15',	ATMid:'12346578	',trackingnumber:'	20600051abcd	',amount:'£500.00	'},
{	key:'16',date:'2022-03-16',	ATMid:'12346578	',trackingnumber:'	20600051abcd	',amount:'£300.00	'},
{	key:'17',date:'2022-03-17',	ATMid:'12346578	',trackingnumber:'	20600051abcd	',amount:'£20.00	'},
{	key:'18',date:'2022-03-18',	ATMid:'12346578	',trackingnumber:'	20601053abcd	',amount:'£50.00	'},
{	key:'19',date:'2022-03-19',	ATMid:'12346578	',trackingnumber:'	20600053abcd	',amount:'£30.00	'},
{	key:'20',date:'2022-03-20',	ATMid:'12346578	',trackingnumber:'	20601053abcd	',amount:'£400.00	'},
{	key:'21',date:'2022-03-21',	ATMid:'12346578	',trackingnumber:'	20600054abcd	',amount:'£20.00	'},
{	key:'22',date:'2022-03-22',	ATMid:'12346578	',trackingnumber:'	20600054abcd	',amount:'£50.00	'},
{	key:'23',date:'2022-03-23',	ATMid:'12346578	',trackingnumber:'	20600055abcd	',amount:'£100.00	'},
{	key:'24',date:'2022-03-24',	ATMid:'12346578	',trackingnumber:'	20600055abcd	',amount:'£10.00	'},
{	key:'25',date:'2022-03-25',	ATMid:'12346578	',trackingnumber:'	20601355abcd	',amount:'£80.00	'},
{	key:'26',date:'2022-03-26',	ATMid:'12346578	',trackingnumber:'	20600056abcd	',amount:'£100.00	'},
{	key:'27',date:'2022-03-27',	ATMid:'12346578	',trackingnumber:'	20600056abcd	',amount:'£300.00	'},
{	key:'28',date:'2022-03-28',	ATMid:'12346578	',trackingnumber:'	20600056abcd	',amount:'£20.00	'},
{	key:'29',date:'2022-03-29',	ATMid:'12346578	',trackingnumber:'	20600056abcd	',amount:'£10.00	'},
{	key:'30',date:'2022-03-30',	ATMid:'12346578	',trackingnumber:'	20600056abcd	',amount:'£100.00	'},
{	key:'31',date:'2022-03-31',	ATMid:'12346578	',trackingnumber:'	20601356abcd	',amount:'£40.00	'},
{	key:'32',date:'2022-04-01',	ATMid:'12346578	',trackingnumber:'	20601456abcd	',amount:'£20.00	'},
{	key:'33',date:'2022-04-02',	ATMid:'12346578	',trackingnumber:'	20600057abcd	',amount:'£30.00	'},
{	key:'34',date:'2022-04-03',	ATMid:'12346578	',trackingnumber:'	20600057abcd	',amount:'£10.00	'},
{	key:'35',date:'2022-04-04',	ATMid:'12346578	',trackingnumber:'	20600057abcd	',amount:'£20.00	'},
{	key:'36',date:'2022-04-05',	ATMid:'12346578	',trackingnumber:'	20600057abcd	',amount:'£200.00	'},
{	key:'37',date:'2022-04-06',	ATMid:'12346578	',trackingnumber:'	20600058abcd	',amount:'£250.00	'},
{	key:'38',date:'2022-04-07',	ATMid:'12346578	',trackingnumber:'	20600058abcd	',amount:'£300.00	'},

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
      <Text style={styles.trnx}>Transaction</Text>
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
              {"ATM id: "}
              {item.ATMid}
              {"\n"}{"\n"}
              {"Tracking Number: "}
              {item.trackingnumber}
              {"\n"}{"\n"}
              {"Dispensed: "}
              {item.amount}
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
    alignItems:'center'
      }
    

})