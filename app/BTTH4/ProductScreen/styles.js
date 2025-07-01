import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
    backgroundColor: 'black',
  },
  logoIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 6,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 1,
    // marginBottom: 32
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 12,
    marginBottom: 4,
    width: '48%',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    alignItems: 'flex-start',
    minHeight: 220,
  },
  cartIcon: {
    backgroundColor: '#111',
    borderRadius: 16,
    padding: 4,
    position: 'absolute',
    top: 8,
    left: 8,
    zIndex: 1,
  },
  image: {
    alignSelf: 'center',
    width: 160,
    height: 160,
    marginBottom: 12,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 15,
    minHeight: 36,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});