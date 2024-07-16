import React from 'react';
import { View, Text, Switch } from 'react-native';
import { useState } from 'react';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';

import { styles } from "../confit/theme/app-theme";

const SettingsScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.settingItem}>
        <AwesomeIcon name="bell" size={24} color="black" style={styles.iconButton} />
        <Text style={styles.settingText}>Notifications</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={styles.settingItem}>
        <AwesomeIcon name="lock" size={24} color="black" style={styles.iconButton} />
        <Text style={styles.settingText}>Privacy</Text>
      </View>
      <View style={styles.settingItem}>
        <AwesomeIcon name="file-import" size={24} color="black" style={styles.iconButton} />
        <Text style={styles.settingText}>Imports</Text>
      </View>
      <View style={styles.settingItem}>
        <AwesomeIcon name="cloud" size={24} color="black" style={styles.iconButton} />
        <Text style={styles.settingText}>Backup</Text>
      </View>
      <View style={styles.settingItem}>
        <AwesomeIcon name="share" size={24} color="black" style={styles.iconButton} />
        <Text style={styles.settingText}>Sharing</Text>
      </View>
      <View style={styles.settingItem}>
        <AwesomeIcon name="trash" size={24} color="black" style={styles.iconButton} />
        <Text style={styles.settingText}>Recently Deleted</Text>
      </View>
      <View style={styles.settingItem}>
        <AwesomeIcon name="info-circle" size={24} color="black" style={styles.iconButton} />
        <Text style={styles.settingText}>About</Text>
      </View>
    </View>
  );
};


export default SettingsScreen;
