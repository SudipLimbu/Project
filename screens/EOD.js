import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView} from 'react-native'
import { auth } from '../firebase'

const HomeScreen = () => {
  const navigation = useNavigation()

  const[people, setPeople] = useState([  
{key:'1', date: '2022-03-01',dispensed:'£8,350',openingBalance:'£5,681',close:'£48,460', key: '2'},
{key:'2', date: '2022-03-02',dispensed:'£14,420',openingBalance:'£48,460',close:'£34,040', key: '3'},
{key:'3', date: '2022-03-03',dispensed:'£18,880',openingBalance:'£34,040',close:'£15,160', key: '4'},
{key:'4', date: '2022-03-04',dispensed:'£17,700',openingBalance:'£15,160',close:'£57,130', key: '5'},
{key:'5', date: '2022-03-05',dispensed:'£17,540',openingBalance:'£57,130',close:'£39,590', key: '6'},
{key:'6', date: '2022-03-06',dispensed:'£19,210',openingBalance:'£39,590',close:'£20,380', key: '7'},
{key:'7', date: '2022-03-07',dispensed:'£11,070',openingBalance:'£20,380',close:'£54,590', key: '8'},
{key:'8', date: '2022-03-08',dispensed:'£11,090',openingBalance:'£54,590',close:'£43,500', key: '9'},
{key:'9', date: '2022-03-09',dispensed:'£13,100',openingBalance:'£43,500',close:'£30,400', key: '10'},
{key:'10', date: '2022-03-10',dispensed:'£11,230-',openingBalance:'£30,400',close:'£19,170', key: '11'},
{key:'11', date: '2022-03-11',dispensed:'£9,600',openingBalance:'£19,170',close:'£53,180', key: '12'},
{key:'12', date: '2022-03-12',dispensed:'£19,490',openingBalance:'£53,180',close:'£33,690', key: '13'},
{key:'13', date: '2022-03-13',dispensed:'£33,690',openingBalance:'£14,740',close:'£53,550', key: '14'},
{key:'14', date: '2022-03-14',dispensed:'£13,340',openingBalance:'£14,740',close:'£53,550', key: '15'},
{key:'15', date: '2022-03-15',dispensed:'£9,750',openingBalance:'£53,550',close:'£43,800', key: '16'},
{key:'16', date: '2022-03-16',dispensed:'£10,100',openingBalance:'£43,800',close:'£33,700', key: '17'},
{key:'17', date: '2022-03-17',dispensed:'£13,020',openingBalance:'£33,700',close:'£20,680', key: '18'},
{key:'18', date: '2022-03-18',dispensed:'£16,570',openingBalance:'£20,680',close:'£51,880', key: '19'},
{key:'19', date: '2022-03-19',dispensed:'£19,760',openingBalance:'£51,880',close:'£32,120', key: '20'},
{key:'20', date: '2022-03-20',dispensed:'£21,050',openingBalance:'£32,120',close:'£11,070', key: '21'},
{key:'21', date: '2022-03-21',dispensed:'£11,480',openingBalance:'£11,070',close:'£54,640', key: '22'},
{key:'22', date: '2022-03-22',dispensed:'£12,980',openingBalance:'£54,640',close:'£41,660', key: '23'},
{key:'23', date: '2022-03-23',dispensed:'£13,270',openingBalance:'£41,660',close:'£28,390', key: '24'},
{key:'24', date: '2022-03-24',dispensed:'£12,470',openingBalance:'£28,390',close:'£15,920', key: '25'},
{key:'25', date: '2022-03-25',dispensed:'£16,170',openingBalance:'£15,920',close:'£53,470', key: '26'},
{key:'26', date: '2022-03-26',dispensed:'£22,810',openingBalance:'£53,470',close:'£30,660', key: '27'},
{key:'27', date: '2022-03-27',dispensed:'£17,810',openingBalance:'£30,660',close:'£12,850', key: '28'},
{key:'28', date: '2022-03-28',dispensed:'£9,070',openingBalance:'£12,850',close:'£56,850', key: '29'},
{key:'29', date: '2022-03-29',dispensed:'£12,620',openingBalance:'£56,850',close:'£44,230', key: '30'},
{key:'30', date: '2022-03-30',dispensed:'£17,490',openingBalance:'£44,230',close:'£26,740', key: '31'}

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