import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native';

type Errors = {
  email?: string;
  password?: string;
};

const LoginScreen = () => {
  // State for email and password
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<Errors>({});  // Initialize the errors state with the correct type

  // Email validation regex
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle login
  const handleLogin = () => {
    const newErrors: Errors = {};  // Make sure to initialize an object with the correct shape

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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Brand Name</Text>
        <View>
        <Text style={styles.text}>
        UserName
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
        />
        {errors.email && <Text style={styles.error}>{errors.email}</Text>}
        </View>
        <View>
          <Text style={styles.text}>
            Password
          </Text>
        
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />
        {errors.password && <Text style={styles.error}>{errors.password}</Text>}

        </View>
        <Text style={styles.text}>
          Forget Pin?
        </Text>
        <Pressable style={({ pressed }) => [
            styles.button,
            { opacity: pressed ? 0.7 : 1 } // Change opacity when pressed
          ]}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#000000FF',
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
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    color: 'white',
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
});

export default LoginScreen;
