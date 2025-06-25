import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './styles';

export default function ProductDetailScreen({ item, onClose }) {
  if (!item) return null;
  const formattedPrice = `${Number(item.price).toLocaleString()}`;
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Image source={{ uri: item.imageURL }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{formattedPrice}</Text>
        <Pressable style={styles.button} onPress={onClose}>
          <Text style={styles.buttonText}>Close</Text>
        </Pressable>
      </View>
    </View>
  );
}