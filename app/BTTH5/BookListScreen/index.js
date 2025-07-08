import React, { useEffect, useState } from 'react';
import {
  View, Text, FlatList, Image, TouchableOpacity
} from 'react-native';
import axios from 'axios';
import { FontAwesome6, Octicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import styles from './styles';

const API_URL = 'https://686d3174c9090c4953858f5b.mockapi.io/api/v1/BookData';

export default function BookListScreen({ navigation }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await axios.get(API_URL);
    setBooks(res.data);
  };

  const deleteBook = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchBooks();
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', fetchBooks);
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>{item.name}</Text>
              <Text>{item.author}</Text>
              <Text style={styles.price}>{item.price}</Text>
              <Text numberOfLines={3}>{item.description}</Text>
            </View>
            <View style={styles.actions}>
              <TouchableOpacity onPress={() => deleteBook(item.id)}>
                <Octicons name="trash" size={20} color="red" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('BookDetail', { book: item })}>
                <FontAwesome6 name="edit" size={20} color="#0f6cbf" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <TouchableOpacity onPress={() => navigation.navigate('BookDetail')}>
        <View style={styles.fab}>
          {/* <Text style={styles.fabIcon}>+</Text> */}
          <AntDesign style={styles.fabIcon} name="plus" size={30} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
}