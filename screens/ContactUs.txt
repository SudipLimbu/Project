import { useNavigation } from '@react-navigation/core';
import { 
    View, 
    Text,
StyleSheet,
Image,
Linking,
TouchableOpacity } from 'react-native'
import React,{container} from 'react'


const ContactUs = () => {
    const navigation = useNavigation()
    const handleLogin = () => { //takes user to the contact us screen
        navigation.replace("Login")
      }
  return (
      
    
    <View style={styles.container}>
        <View style={styles.contentContainer}>
        
       

        <TouchableOpacity style={styles.cuButton}
          onPress={handleLogin}>
          <Text style={styles.text}>Back to Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cuButton}
        onPress={ ()=>{ Linking.openURL('https://www.google.com')}}>
        <Text style={styles.text}>Company Website</Text>
        </TouchableOpacity>
        <Text style={styles.text1}>trnxAPP
        {"\n"}
        London, UK
        01234 012345
        {"\n"}
        2022
        
        </Text>
        </View>

    </View>
  )
}
<view></view>

export default ContactUs

const styles = StyleSheet.create({

    container:{
        flex:1,
        margin:'30%',
        alignItems:'center',// x axis
        justifyContent: "flex-end",//puts text to middle y axis
    },
    text:{
        color: 'white',
        alignItems:'center',
    },
    text1:{
        color:'red',
        alignItems:'center',
        justifyContent: "flex-end",
        },

    contentContainer:{
        margin:10,
        alignItems:'center',// x axis
        justifyContent: "flex-end",//puts text to middle y axis
    },
    cuButton: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        margin:10,
      },


})
