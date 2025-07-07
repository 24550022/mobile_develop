import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function ItemDetailScreen({ route, navigation }) {
  const { category, item } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <Image source={{ uri: item.hinh }} style={styles.image} />
      <Text style={styles.categoryName}>Tên loại hoa: "{category.tenloai}"</Text>
      <Text style={styles.name}>Mã hoa: {item.mahoa}</Text>
      <Text style={styles.name}>Tên hoa: "{item.tenhoa}"</Text>
      <Text style={styles.name}>Đơn giá: {item.giaban}</Text>
      <Text style={styles.name}>Mô tả: "{item.mota}"</Text>
      <TouchableOpacity onPress={() => navigation.popToTop('Categories')}>
        <Text style={styles.back}>Về trang các loại hoa</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.back}>Trở lại</Text>
      </TouchableOpacity>
    </View>
  );
}
