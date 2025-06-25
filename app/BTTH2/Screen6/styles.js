import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#18171c',
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  backButton: {
    marginBottom: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  backIcon: {
    color: '#a259ff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  title: {
    color: '#a259ff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#232228',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#232228',
  },
  flagButton: {
    marginRight: 8,
    color: '#fff',
  },
  callingCode: {
    color: '#fff',
    fontSize: 16,
    marginRight: 8,
  },
  phoneInput: {
    color: '#fff',
    fontSize: 16,
    flex: 1,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  forgotPasswordText: {
    color: '#4285F4',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#a259ff',
    borderRadius: 30,
    alignItems: 'center',
    paddingVertical: 14,
    marginTop: 24,
    marginBottom: 18,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  orText: {
    color: '#fff',
    alignSelf: 'center',
    marginBottom: 18,
    fontSize: 16,
    marginTop: 24,
  },
  facebookButton: {
    backgroundColor: '#4267B2',
    borderRadius: 30,
    alignItems: 'center',
    paddingVertical: 14,
    marginBottom: 14,
    marginTop: 24,
  },
  facebookButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  googleButton: {
    // backgroundColor: '#fff',
    // borderRadius: 30,
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 14,
    borderWidth: 1,
    // borderColor: '#eee',    
  },
  googleIcon: {
    fontSize: 28,
    color: '#4285F4',
    fontWeight: 'bold',
  },
  appleButton: {
    backgroundColor: '#fff',
    borderRadius: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 14,
    marginBottom: 18,
  },
  appleIcon: {
    fontSize: 20,
    color: '#000',
    marginRight: 8,
  },
  appleButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  phoneLoginText: {
    color: '#4285F4',
    fontSize: 16,
    alignSelf: 'center',
    marginTop: 10,
  },
});
export default styles;