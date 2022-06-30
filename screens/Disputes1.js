import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View,ScrollView } from 'react-native'
import { auth } from '../firebase'

const Disputes = () => {
  const navigation = useNavigation()
  const[people, setPeople] = useState([  
{key:'1',ID:'3', date:'2014-07-26	', amount:'	£50.00	', Status:'Declined'},
{key:'2',ID:'33', date:'2014-11-07	', amount:'	£50.00	', Status:'Open'},
{key:'3',ID:'36', date:'2014-11-20	', amount:'	£140.00	', Status:'Open'},
{key:'4',ID:'38', date:'2014-11-20	', amount:'	£100.00	', Status:'Open'},
{key:'5',ID:'55', date:'2014-12-09	', amount:'	£300.00	', Status:'Reopened'},
{key:'6',ID:'10058', date:'2014-12-24', amount:'£20.00	', Status:'Open'},
{key:'7',ID:'10061', date:'2015-01-25', amount:'£100.00	', Status:'Reopened'},
{key:'8',ID:'10098', date:'2015-05-01', amount:'£70.00	', Status:'Open'},
{key:'9',ID:'10108', date:'2015-05-20', amount:'£250.00	', Status:'Open'},
{key:'10',ID:'	1011ab', date:'2015-05-29', amount:'	£200.00	', Status:'Open'},
{key:'11',ID:'	1011ab', date:'2015-06-04', amount:'	£400.00	', Status:'Open'},
{key:'12',ID:'	1018ab', date:'2015-09-05', amount:'	£30.00	', Status:'Reopened'},
{key:'13',ID:'	1018ab', date:'2015-09-05', amount:'	£50.00	', Status:'Declined'},
{key:'14',ID:'	1023ab', date:'2015-11-26', amount:'	£20.00	', Status:'Open'},
{key:'15',ID:'	1023ab', date:'2015-12-01', amount:'	£50.00	', Status:'	Void	'},
{key:'16',ID:'	1023ab', date:'2015-12-11', amount:'	£20.00	', Status:'Open'},
{key:'17',ID:'	2024ab', date:'2015-12-16', amount:'	£20.00	', Status:'Open'},
{key:'18',ID:'	2025ab', date:'2016-01-29', amount:'	£100.00	', Status:'Open'},
{key:'19',ID:'	2026ab', date:'2016-02-17', amount:'	£20.00	', Status:'Declined'},
{key:'20',ID:'	2026ab', date:'2016-02-11', amount:'	£100.00	', Status:'Closed'},
{key:'21',ID:'	2027ab', date:'2016-03-15', amount:'	£100.00	', Status:'Reopened'},
{key:'22',ID:'	2029ab', date:'2016-05-06', amount:'	£50.00	', Status:'Declined'},
{key:'23',ID:'	2032ab', date:'2016-07-01', amount:'	£200.00	', Status:'Declined'},
{key:'24',ID:'	2035ab', date:'2016-08-10', amount:'	£500.00	', Status:'Declined'},
{key:'25',ID:'	2035ab', date:'2016-08-18', amount:'	£40.00	', Status:'Declined'},
{key:'26',ID:'	2036ab', date:'2016-08-27', amount:'	£140.00	', Status:'Reopened'},
{key:'27',ID:'	2042ab', date:'2016-11-05', amount:'	£100.00	', Status:'Declined'},
{key:'28',ID:'	2039ab', date:'2016-10-07', amount:'	£213.20	', Status:'Cleared'},
{key:'29',ID:'	2044ab', date:'2016-12-01', amount:'	£50.00	', Status:'Declined'},
{key:'30',ID:'	2043ab', date:'2016-11-12', amount:'	£222.54	', Status:'Cleared'},
{key:'31',ID:'	2049ab', date:'2017-01-04', amount:'	£20.00	', Status:'Declined'},
{key:'32',ID:'	2049ab', date:'2017-01-06', amount:'	£50.00	', Status:'Declined'},
{key:'33',ID:'	2054ab', date:'2017-02-10', amount:'	£300.00	', Status:'Open'},
{key:'34',ID:'	2056ab', date:'2017-02-24', amount:'	£200.00	', Status:'Declined'},
{key:'35',ID:'	2058ab', date:'2017-03-10', amount:'	£100.00	', Status:'Declined'},
{key:'36',ID:'	2055ab', date:'2017-02-14', amount:'	£150.00	', Status:'Cleared'},
{key:'37',ID:'	2055ab', date:'2017-02-14', amount:'	£10.00	', Status:'Cleared'},
{key:'38',ID:'	3060ab', date:'2017-03-30', amount:'	£400.00	', Status:'Declined'},
{key:'39',ID:'	3063ab', date:'2017-04-14', amount:'	£200.00	', Status:'Declined'},
{key:'40',ID:'	3066ab', date:'2017-05-03', amount:'	£70.00	', Status:'Declined'},
{key:'41',ID:'	3061ab', date:'2017-04-05', amount:'	£31.04	', Status:'Cleared'},
{key:'42',ID:'	3068ab', date:'2017-05-17', amount:'	£100.00	', Status:'Declined'},
{key:'43',ID:'	4076ab', date:'2017-07-05', amount:'	£300.00	', Status:'Cleared'},
{key:'44',ID:'	4083ab', date:'2017-08-09', amount:'	£100.00	', Status:'Declined'},
{key:'45',ID:'	4078ab', date:'2017-07-14', amount:'	£200.00	', Status:'Cleared'},
{key:'46',ID:'	4080ab', date:'2017-07-22', amount:'	£100.57	', Status:'Cleared'},
{key:'47',ID:'	4086ab', date:'2017-08-23', amount:'	£20.00	', Status:'Declined'},
{key:'48',ID:'	4097ab', date:'2017-10-12', amount:'	£80.00	', Status:'Declined'},
{key:'49',ID:'	4091ab', date:'2017-09-21', amount:'	£148.15	', Status:'Cleared'},
{key:'50',ID:'	4106ab', date:'2017-11-11', amount:'	£50.00	', Status:'Declined'},
{key:'51',ID:'	4109ab', date:'2017-11-19', amount:'	£250.00	', Status:'Accepted'},
{key:'52',ID:'	4100ab', date:'2017-10-24', amount:'	£40.00	', Status:'Cleared'},
{key:'53',ID:'	4111ab', date:'2017-11-28', amount:'	£100.00	', Status:'Declined'},
{key:'54',ID:'	4121ab', date:'2018-01-09', amount:'	£120.00	', Status:'Declined'},
{key:'55',ID:'	5140ab', date:'2018-03-08', amount:'	£100.00	', Status:'Cleared'},
{key:'56',ID:'	5149ab', date:'2018-04-13', amount:'	£20.00	', Status:'Declined'},
{key:'57',ID:'	6153ab', date:'2018-04-28', amount:'	£80.00	', Status:'Declined'},
{key:'58',ID:'	5150ab', date:'2018-04-20', amount:'	£428.82	', Status:'Cleared'},
{key:'59',ID:'	6223ab', date:'2018-10-18', amount:'	£40.00	', Status:'Declined'},
{key:'60',ID:'	6231ab', date:'2018-11-06', amount:'	£250.00	', Status:'Declined'},
{key:'61',ID:'	7242ab', date:'2018-11-28', amount:'	£100.00	', Status:'Declined'},
{key:'62',ID:'	7267ab', date:'2019-01-15', amount:'	£100.00	', Status:'Open'},
{key:'63',ID:'	8301ab', date:'2019-03-20', amount:'	£100.00	', Status:'Declined'},
{key:'64',ID:'	8321ab', date:'2019-04-19', amount:'	£50.00	', Status:'Cleared'},
{key:'65',ID:'	8363ab', date:'2019-06-28', amount:'	£30.00	', Status:'Open'},
{key:'66',ID:'	8390ab', date:'2019-08-08', amount:'	£500.00	', Status:'Declined'},
{key:'67',ID:'	8393ab', date:'2019-08-13', amount:'	£50.00	', Status:'Open'},
{key:'68',ID:'	8410ab', date:'2019-09-14', amount:'	£100.00	', Status:'Reopened'},
{key:'69',ID:'	8410ab', date:'2019-09-12', amount:'	£105.59	', Status:'Declined'},
{key:'70',ID:'	1043ab', date:'2019-10-25', amount:'	£651.76	', Status:'Declined'},
{key:'71',ID:'	1043ab', date:'2019-10-25', amount:'	£132.96	', Status:'Declined'},
{key:'72',ID:'	1148ab', date:'2020-01-14', amount:'	£30.00	', Status:'Declined'},
{key:'73',ID:'	1148ab', date:'2020-01-22', amount:'	£100.00	', Status:'Open'},
{key:'74',ID:'	1149ab', date:'2020-01-29', amount:'	£300.00	', Status:'Declined'},
{key:'75',ID:'	1151ab', date:'2020-02-26', amount:'	£100.00	', Status:'Declined'},
{key:'76',ID:'	1151ab', date:'2020-03-04', amount:'	£50.00	', Status:'Declined'},
{key:'77',ID:'	1157ab', date:'2020-09-26', amount:'	£10.00	', Status:'Cleared'},
{key:'78',ID:'	1181ab', date:'2021-10-14', amount:'	£250.00	', Status:'Declined'},
{key:'79',ID:'	1184ab', date:'2021-11-13', amount:'	£250.00	', Status:'Declined'},
{key:'80',ID:'	1190ab', date:'2021-12-24', amount:'	£250.00	', Status:'Open'},
{key:'81',ID:'	1189ab', date:'2021-12-24', amount:'	£200.00	', Status:'Open'},
{key:'82',ID:'	1190ab', date:'2021-12-24', amount:'	£10.00	', Status:'Open'},
{key:'83',ID:'	1193ab', date:'2021-12-25', amount:'	£20.00	', Status:'Open'},
{key:'84',ID:'	1194ab', date:'2021-12-26', amount:'	£50.00	', Status:'Open'},
{key:'85',ID:'	1194ab', date:'2021-12-26', amount:'	£20.00	', Status:'Open'},
{key:'86',ID:'	1195ab', date:'2021-12-26', amount:'	£100.00	', Status:'Open'},
{key:'87',ID:'	1188ab', date:'2021-12-19', amount:'	£83.00	', Status:'Declined'},
{key:'88',ID:'	1198ab', date:'2022-01-21', amount:'	£100.00	', Status:'Declined'},
{key:'89',ID:'	1201ab', date:'2022-02-22', amount:'	£60.00	', Status:'Declined'}

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
              {"ID:    "}
              
              {item.ID}
              {"\n"}{"\n"}
              {"Date: "}
              {item.date}
              {"\n"}{"\n"}
              {"Amount: "}
              {item.amount}
              {"\n"}{"\n"}
              {"Status: "}
              {item.Status}
            </Text>
          </View>

        )
      })}
      </ScrollView>
      
    </View>
  )
}

export default Disputes

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