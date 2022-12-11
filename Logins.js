import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
  } from "react-native";
// create a component
const MyComponent = () => {
    return (
        <View style={styles.maincontainer}>
            <Text style={styles.mainHeader}>
                Login page
                 </Text>
                                     



    
        

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Name"
   autoCapitalize='none'
    
          
        />
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
       

       
   
   ;

// define your styles
const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        justifyContent:  'top',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    mainHeader:{
        fontSize:25,
        color:"pink",
        fontWeight:500,
        paddingTop:100,
        paddingBottom:15,
        text: "capitalize",
    fontFamily: "bold",
    },
    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
     
        alignItems: "center",
      },
     
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      },
     
     
      loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#FF1493",
      },
     
    });


//make this component available to the app
export default MyComponent;

 




