import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';

export default function SignUpScreen() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation()

  const handleCreateAccount = () => {
    console.log('Create New Account pressed');
    // Add your signup logic here
  };

  const handleGoToSignIn = () => {
    navigation.popToTop();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Logo and Title */}
        <View style={styles.logoContainer}>
          <View style={styles.logoIcon}>
            <MaterialIcons name="shopping-cart" size={90} color="#000" />
          </View>
          <Text style={styles.title}>SMART</Text>
          <Text style={styles.subtitle}>E COMMERCE</Text>
        </View>

        {/* Input Fields */}
        <View>
          <TextInput
            style={styles.input}
            placeholder="User Name"
            value={userName}
            onChangeText={setUserName}
            autoCapitalize="words"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        {/* App Name */}
        <Text style={styles.appName}>Smart E-Commerce</Text>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.createAccountButton} onPress={handleCreateAccount}>
            <Text style={styles.createAccountButtonText}>Create New Account</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signInButton} onPress={handleGoToSignIn}>
            <Text style={styles.signInButtonText}>Go To Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}