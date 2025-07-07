import { StyleSheet, Dimensions } from 'react-native';
const deviceWidth = Dimensions.get('window').width;
const imageWidth = deviceWidth * 0.8; // 80% of the device width
export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  header: {
    textAlign: 'center',
    color: 'red',
    fontSize: 20,
  },
  itemContainer: {
    alignItems: 'center',
    marginVertical: 10
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10
  },
  price: {
    fontSize: 18,
    marginTop: 10
  },
  image: {
    width: imageWidth,
    height: imageWidth,
    resizeMode: 'cover'
  }
});