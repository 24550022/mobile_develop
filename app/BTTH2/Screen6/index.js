import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CountryPicker,{DARK_THEME } from 'react-native-country-picker-modal';
import styles from './styles';

export default function Screen6() {
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
      <Text style={styles.title}>Sign In</Text>

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

      {/* Facebook Button */}
      <TouchableOpacity style={styles.facebookButton}>
        <Text style={styles.facebookButtonText}>Login With Facebook</Text>
      </TouchableOpacity>

      {/* Google Button */}
      <TouchableOpacity style={styles.googleButton}>
        <Image
          source={{
            uri: 'https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s96-fcrop64=1,00000000ffffffff-rw',
          }}
          style={{ width: 42, height: 42 }}
          resizeMode="contain"
        />
      </TouchableOpacity>

      {/* Apple Button */}
      <TouchableOpacity style={styles.appleButton}>
        <FontAwesome name="apple" size={20} color="#000" style={styles.appleIcon} />
        <Text style={styles.appleButtonText}>Sign in with Apple</Text>
      </TouchableOpacity>

      {/* Login with phone number */}
      <TouchableOpacity>
        <Text style={styles.phoneLoginText}>Sign in with E-mail</Text>
      </TouchableOpacity>
    </View>
  );
}