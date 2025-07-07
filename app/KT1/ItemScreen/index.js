import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import items from './items';
import styles from './styles';

const ItemScreen = ({ route, navigation }) => {
  const { category } = route.params;
  const filteredItems = items.filter(item => item.maloai === category.maloai);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mã hoa: {category.maloai}</Text>
      <Text style={styles.header}>Loại hoa: {category.tenloai}</Text>
      <FlatList
        data={filteredItems}
        keyExtractor={(_, index) => `${index}`}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ItemDetail', { item, category })}>
            <View style={styles.itemContainer} >
              <Text style={styles.name}>{item.tenhoa}</Text>
              <Image source={{ uri: item.hinh }} style={styles.image} />
              <Text style={styles.price}>Giá bán: {item.giaban}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ItemScreen;
