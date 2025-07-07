import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import categories from './categories';
import styles from './styles';
const CategoryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh mục loại hoa</Text>
      <FlatList
        data={categories}
        keyExtractor={item => item.maloai}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Items', { category: item })}
          >
            <Text style={styles.categoryName}>{item.tenloai}</Text>
            <Image source={{ uri: item.image }} style={styles.image} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CategoryScreen;
