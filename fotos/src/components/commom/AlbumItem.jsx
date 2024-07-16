import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from "react-native";

import { styles } from "../../confit/theme/app-theme";
const AlbumItem = ({ cat, description }) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity>
        <Image
          source={{ uri: cat.url }}
          style={styles.image}
        />
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.descriptionNI}>42</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AlbumItem;
