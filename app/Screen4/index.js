import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';

export default function Screen4() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.rocketIcon}>🚀</Text>
      </View>
      <Text style={styles.title}>Instamobile</Text>
      <Text style={styles.subtitle}>
        Use this codebase to start a new Firebase{'\n'}
        mobile app in minutes.
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
