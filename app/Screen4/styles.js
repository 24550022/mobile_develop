import { StyleSheet } from 'react-native';

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
    marginTop: 10,
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
    marginTop: 10,
  },
  signupButtonText: {
    color: '#a259ff',
    fontSize: 18,
    fontWeight: '600',
  },
});
export default styles;