import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';

import { getCats } from "../services/catsService";
import AlbumItem from '../components/commom/AlbumItem';
import { styles } from "../confit/theme/app-theme";

const AlbumScreen = () => {
  const [cats, setCats] = useState([]);

  const fetchCats = async () => {
    const response = await getCats({ limit: 19 });
    setCats(response.data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cats}
        renderItem={({ item, index }) => (
          <AlbumItem cat={item} description={`Album ${index + 1}`} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2} 
        contentContainerStyle={styles.grid}
      />
    </SafeAreaView>
  );
};

export default AlbumScreen;