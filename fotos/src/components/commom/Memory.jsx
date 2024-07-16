import React from 'react';
import { View, Text, Image, TouchableOpacity  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { styles } from "../../confit/theme/app-theme";

const Memory = ({ title, year, imageSource }) => {
    return (
        <View style={styles.memoryContainer}>
            <Image style={styles.memoryImage} source={imageSource} />
            <View style={styles.overlay}>
                <Text style={styles.memoryTitle}>{title}</Text>
                <Text style={styles.memoryYear}>{year}</Text>
            </View>
            <View style={styles.iconsContainer}>
                <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name="share-social" size={24} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name="ellipsis-vertical" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
};



export default Memory;