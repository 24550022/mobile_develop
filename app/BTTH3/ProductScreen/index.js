import React, { useState } from 'react';
import { View, Text, Image, FlatList, SafeAreaView, TouchableOpacity, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import ProductDetailScreen from '../ProductDetailScreen';

import styles from './styles';
import products from './products';

export default function ProductScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (item) => {
    setSelectedProduct(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedProduct(null);
  };

  const ProductCard = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => openModal(item)}>
      <View style={styles.cartIcon}>
        <MaterialIcons name="shopping-cart" size={20} color="#fff" />
      </View>
      <Image source={{ uri: item.imageURL }} style={styles.image} />
      <Text style={styles.name} numberOfLines={2}>{item.title}</Text>
      <Text style={styles.price}>{`${Number(item.price).toLocaleString()}`}</Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={ProductCard}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={{ padding: 8 }}
        showsVerticalScrollIndicator={false}
      />
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <ProductDetailScreen item={selectedProduct} onClose={closeModal} />
      </Modal>
    </SafeAreaView>
  );
}