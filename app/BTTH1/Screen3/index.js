import { View } from 'react-native';
import styles from './styles';

export default function Screen3() {
  return (
    <View style={styles.container}>
      {/* Row 1 */}
      <View style={styles.box1}>
        <View style={styles.boxChild} />
        <View style={styles.boxChild} />
        <View style={styles.boxChild} />
      </View>

      {/* Row 2 & 3 */}
      <View style={styles.box2}>
        <View style={styles.box2ChildLarge} />
        <View style={styles.box2ChildColumn}>
          <View style={styles.boxChild} />
          <View style={styles.boxChild} />
        </View>
      </View>

      {/* Row 4 */}
      <View style={styles.box3}>
        <View style={styles.boxChild} />
        <View style={styles.boxChild} />
        <View style={styles.boxChild} />
      </View>
    </View>
  );
}
