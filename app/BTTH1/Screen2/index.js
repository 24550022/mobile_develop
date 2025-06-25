import { View } from 'react-native';
import styles from './styles';

export default function Screen2() {
  return (
    <View style={styles.container}>
      <View style={[styles.block, { backgroundColor: '#F4C542' }]} />
      <View style={[styles.block, { backgroundColor: '#3E2A64' }]} />
      <View style={[styles.block, { backgroundColor: '#205E73' }]} />
      <View style={[styles.block, { backgroundColor: '#3B9DA3' }]} />
    </View>
  );
}
