import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// If you use react-native-vector-icons, uncomment the next line
// import Icon from 'react-native-vector-icons/Feather';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      {/* Replace below with your icon component if needed */}
      <View style={styles.iconContainer}>
        {/* Example SVG Rocket Icon */}
        {/* <Icon name="rocket" size={120} color="#a259ff" /> */}
        <Text style={styles.rocketIcon}>🚀</Text>
      </View>
      <Text style={styles.title}>Instamobile</Text>
      <Text style={styles.subtitle}>
        Use this codebase to start a new Firebase mobile app in minutes.
      </Text>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#18171c',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  iconContainer: {
    marginBottom: 40,
  },
  rocketIcon: {
    fontSize: 120,
    color: '#a259ff',
    // Use an SVG or vector icon for a more accurate look
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#a259ff',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    color: '#b0b0b0',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
  },
  loginButton: {
    backgroundColor: '#a259ff',
    borderRadius: 30,
    width: '100%',
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 16,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  signupButton: {
    borderColor: '#a259ff',
    borderWidth: 1,
    borderRadius: 30,
    width: '100%',
    paddingVertical: 14,
    alignItems: 'center',
  },
  signupButtonText: {
    color: '#a259ff',
    fontSize: 18,
    fontWeight: '600',
  },
});