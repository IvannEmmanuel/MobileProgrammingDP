import React from 'react';
import { Image, StyleSheet, Text, View, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';

export default function App() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <Image source={require('./Images/FoxLogo.png')} style={styles.mainImage} /> 
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleLabel}>CunningCarat</Text>
        </View>
        <View style={styles.mainContainer}>
          <Card style={styles.subContainer}>
            <Text style={styles.emailLabel}> Email: </Text>
            <TextInput 
              placeholder="Username" 
              style={styles.inputEmailAddress} 
              mode="outlined"
            />
            <Text style={styles.passwordLabel}> Password: </Text>
            <TextInput 
              placeholder="Password" 
              style={styles.inputPassword} 
              secureTextEntry
              mode="outlined"
            />
            <Button
              mode="elevated"
              style={styles.submitButton}
            >
              <Text style={styles.signInLabel}> Sign In </Text>
            </Button>
            <View style={styles.accountText}>
              <Text>
                Don't have an account?
                  <Text style = {styles.signUpLabel}>
                    {' '}
                    Sign Up
                  </Text>
              </Text>
            </View>
          </Card>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  signUpLabel: {
    color: "#FCD12A",
  },
  accountText: {
    alignItems: 'center'
  },
  signInLabel:{
    fontSize: 18,
    color: "white",
  },
  submitButton: {
    marginVertical: 20,
    backgroundColor: "#424242",
    borderRadius: 10,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  titleContainer: {
    alignItems: "center",
  },
  titleLabel: {
    fontSize: 35,
    fontWeight: "800",
    marginVertical: -40,
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: 30,
  },
  mainContainer: {
    marginVertical: 150,
    marginTop: 30,
    padding: 20,
  },
  subContainer: {
    backgroundColor: "#F9F9F9",
    padding: 22,
    borderRadius: 25,
  },
  emailLabel: {
    fontSize: 19,
    marginBottom: 5,
  },
  inputEmailAddress: {
    marginBottom: 10,
    backgroundColor: "#F9F9F9",
  },
  passwordLabel: {
    fontSize: 19,
    marginBottom: 5,
  },
  inputPassword: {
    backgroundColor: "#F9F9F9",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFDC2E",
  },
});
