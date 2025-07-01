import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24, // Added padding for better layout
  },
  content: {
    flex: 1,
    paddingTop: 40,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    letterSpacing: 1,
    marginBottom: 32
  },
  input: {
    backgroundColor: '#f8f8f8',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 16,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  appName: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 18,
  },
  buttonContainer: {
    gap: 16,
  },
  loginButton: {
    backgroundColor: '#000',
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  signUpButton: {
    backgroundColor: 'transparent',
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  signUpButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
});