import React, { useEffect, useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";

import { getCats } from "../../services/catsService";
import { styles } from "../../confit/theme/app-theme";

const LibraryContent = () => {
  const [cats, setCats] = useState([]);

  const fetchCat = async () => {
    const response = await getCats({ limit: 21 });
    setCats(response.data.slice(0, 7));
  };

  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <View>
      <View style={styles.photoContainer}>
        {cats.length > 0 &&
          cats.map((cat) => (
            <TouchableOpacity key={cat.id}>
              <Image
                key={cat.id} 
                source={{ uri: cat.url }}
                style={{ width: 130, height: 130, marginTop: 2 }}
              />
            </TouchableOpacity>
          ))}
      </View>
    </View>
  );
};

export default LibraryContent;
