import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CountryPicker, { DARK_THEME } from 'react-native-country-picker-modal';
import styles from './styles';

export default function Screen7() {
  const [countryCode, setCountryCode] = useState('US');
  const [country, setCountry] = useState(null);
  const [phone, setPhone] = useState('');
  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity style={styles.backButton}>
        <MaterialCommunityIcons name="chevron-left" size={48} color='#a259ff' />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Create new account</Text>

      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }} // Replace with your avatar source
          style={styles.avatar}
        />
        <TouchableOpacity style={styles.addPhotoCircle}>
          <MaterialCommunityIcons name="camera-enhance-outline" size={24} style={styles.addPhotoIcon} />
        </TouchableOpacity>
      </View>

      {/* Input fields */}
      <TextInput
        style={styles.input}
        placeholder="First Name"
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#888"
      />

      {/* Phone Input with Country Picker */}
      <View style={styles.phoneInputContainer}>
        <CountryPicker
          theme={DARK_THEME}
          countryCode={countryCode}
          withFlag
          withCallingCode
          withFilter
          withCallingCodeButton
          onSelect={country => {
            setCountryCode(country.cca2);
            setCountry(country);
          }}
          containerButtonStyle={styles.flagButton}
        />
        {/* <Text style={styles.callingCode}>
          {country?.callingCode ? `+${country.callingCode}` : '+1'}
        </Text> */}
        <TextInput
          style={styles.phoneInput}
          // placeholder="Phone number"
          // placeholderTextColor="#888"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
      </View>

      {/* Log In Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Send code</Text>
      </TouchableOpacity>

      {/* OR */}
      <Text style={styles.orText}>OR</Text>

      {/* Login with phone number */}
      <TouchableOpacity>
        <Text style={styles.phoneLoginText}>Sign in with E-mail</Text>
      </TouchableOpacity>

      {/* Terms */}
      <Text style={styles.termsText}>
        By creating an account you agree with our{'\n'}
        <Text style={styles.termsLink}>Terms of use</Text>
      </Text>
    </View>
  );
}