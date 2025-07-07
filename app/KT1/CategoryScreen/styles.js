import { StyleSheet, Dimensions } from 'react-native';
const deviceWidth = Dimensions.get('window').width;
const imageWidth = deviceWidth * 0.8; // 80% of the device width
export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
    marginVertical: 10
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    width: imageWidth,
    height: imageWidth,
    resizeMode: 'cover',
    marginVertical: 10,
    alignSelf: 'center'
  }
});