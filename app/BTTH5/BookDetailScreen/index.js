import React, { useState } from 'react';
import { TextInput, Alert, ScrollView, TouchableOpacity, Text } from 'react-native';
import axios from 'axios';
import styles from './styles';

const API_URL = 'https://686d3174c9090c4953858f5b.mockapi.io/api/v1/BookData';

export default function BookDetailScreen({ route, navigation }) {
  const book = route.params?.book;

  const [name, setName] = useState(book?.name || '');
  const [author, setAuthor] = useState(book?.author || '');
  const [price, setPrice] = useState(book?.price?.toString() || '');
  const [imageUrl, setImageUrl] = useState(book?.imageUrl || '');
  const [description, setDescription] = useState(book?.description || '');

  const saveBook = async () => {
    const bookData = { name, author, price, imageUrl, description };
    try {
      if (book?.id) {
        await axios.put(`${API_URL}/${book.id}`, bookData);
      } else {
        await axios.post(API_URL, bookData);
      }
      navigation.goBack();
    } catch (err) {
      Alert.alert("Error", "Unable to save book");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Author"
        value={author}
        onChangeText={setAuthor}
        style={styles.input}
      />
      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Image URL"
        value={imageUrl}
        onChangeText={setImageUrl}
        style={styles.input}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
        style={[styles.input, styles.description]}
      />
      <TouchableOpacity style={styles.save} onPress={saveBook}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}