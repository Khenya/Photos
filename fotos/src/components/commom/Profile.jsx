import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import { styles } from "../../confit/theme/app-theme";
const Profile = () => {
  return (
    <View style={styles.containerProfile}>
      <View style={styles.profileImageContainer}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/women/55.jpg' }}
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.cameraButton}>
          <AwesomeIcon name="camera" size={20} color="#000000" />
        </TouchableOpacity>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.profileName}>Daniela</Text>
        <TouchableOpacity style={styles.editButton}>
          <AwesomeIcon name="edit" size={20} color="#000000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
