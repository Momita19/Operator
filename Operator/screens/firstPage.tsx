import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, Pressable, Image } from 'react-native';


type Errors = {

};

const LoginScreen = () => {



  // Handle login
  const handleLogin = () => {
    const newErrors: Errors = {}; 

    // Simple form validation
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    // If there are errors, set them
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // If no errors, handle successful login
      Alert.alert('Login Successful', `Email: ${email}`);
      // Reset form fields
      setEmail('');
      setPassword('');
    }
  };

  return (
    
      <View style={styles.container}>
        {/* <Image
        source={require('../assests/images/Logo.png')} 
        style={styles.image} 
        /> */}
        <Pressable style={({ pressed }) => [
            styles.button,
            { opacity: pressed ? 0.7 : 1 }
          ]}
  
        >
          <Text style={styles.buttonText}>Registration</Text>
        </Pressable>
        <Pressable style={({ pressed }) => [
            styles.button,
            { opacity: pressed ? 0.7 : 1 }
          ]}
          
        >
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#000000FF',
  },
  image:{
    width:1,
    height:1
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
  text:{
    color: "#DEE1E6FF"
  },

  error: {
    fontSize: 12,
    color: 'red',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#EFB034DB', 
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop:32,
  },
  buttonText: {
    color: '#171A1FFF',
    fontSize: 16,
  },
  image:{
    width: 40,
  }
});

export default LoginScreen;
