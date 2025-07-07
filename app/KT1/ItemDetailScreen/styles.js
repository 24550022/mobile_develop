import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const imageWidth = deviceWidth * 0.8; // 80% of the device width

export default StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#c2185b',
    marginBottom: 10
  },
  categoryName: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10
  },
  name: {
    fontSize: 16
  },
  image: {
    width: imageWidth,
    height: imageWidth,
    resizeMode: 'cover',
    marginBottom: 20
  },
  back: {
    fontSize: 16,
    color: '#4078f2',
    fontWeight: 'bold',
    marginTop: 10
  },
});