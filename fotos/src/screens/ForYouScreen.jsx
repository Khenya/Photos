import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';

import Memory from '../components/commom/Memory';
import { getCats } from "../services/catsService";

const ForYouScreen = () => {
    const [cats, setCats] = useState([]);
    const [randomCats, setRandomCats] = useState([]);

    const fetchCat = async () => {
      const response = await getCats({ limit: 21 });
      setCats(response.data.slice(0, 7));
      const randomIndexes = [];
      while (randomIndexes.length < 6) {
        const randomIndex = Math.floor(Math.random() * response.data.length);
        if (!randomIndexes.includes(randomIndex)) {
          randomIndexes.push(randomIndex);
        }
      }
      const randomCatsArray = randomIndexes.map(index => response.data[index]);
      setRandomCats(randomCatsArray);
    };
  
    useEffect(() => {
      fetchCat();
    }, []);

    return (
        <View >
            <ScrollView>
                {randomCats.map((randomCat, index) => (
                    <Memory
                        key={randomCat.id}
                        title="Año en revisión"
                        year={2023 - index}
                        imageSource={{ uri: randomCat.url }}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

export default ForYouScreen;