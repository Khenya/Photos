import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import Profile from '../components/commom/Profile';
import { styles } from "../confit/theme/app-theme";
const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
        <Text style={styles.title}>Profile</Text>
        <Profile />
        <Text style={styles.ProfileText}>danila@gmail.com</Text>
      </ScrollView>
    </SafeAreaView>
  );
};


export default ProfileScreen;
