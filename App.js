import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet,Text, View } from "react-native-web";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import ContactUs from "./screens/ContactUs";
import EOD from "./screens/EOD";
import Replenishments from "./screens/Replenishments";
import Transactions from "./screens/Transactions";
import Disputes from "./screens/Disputes";
import * as firebase from 'firebase';


const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown :false}} name="Login" component={LoginScreen} />
        <Stack.Screen options={{headerShown :false}} name="Home" component={HomeScreen} />
        <Stack.Screen options={{headerShown :false}} name="contact" component={ContactUs}/>
        <Stack.Screen options={{headerShown :false}} name="EOD" component={EOD}/>
        <Stack.Screen options={{headerShown :false}} name="Transactions" component={Transactions}/>
        <Stack.Screen options={{headerShown :false}} name="Replenishments" component={Replenishments}/>
        <Stack.Screen options={{headerShown :false}} name="Disputes" component={Disputes}/>
      </Stack.Navigator>
    </NavigationContainer> 
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },
});