import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import LibraryScreen from '../screens/LibraryScreen';
import ForYouScreen from '../screens/ForYouScreen';
import AlbumScreen from '../screens/AlbumScreen';
import SearchScreen from '../screens/SearchScreen';

const Tab = createBottomTabNavigator();

export const Footer = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: (routeStatus) => setIcon(route, routeStatus),
      tabBarShowLabel: true,
      tabBarInactiveTintColor: 'gray',
      headerRight: () => <SettingsButton />, 
      headerLeft: () => <ProfileButton />,
      headerTitleAlign: 'center',
    })}
    >
      <Tab.Screen name="Library" component={LibraryScreen} />
      <Tab.Screen name="ForYou" component={ForYouScreen} />
      <Tab.Screen name="Albums" component={AlbumScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
};

const SettingsButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
      <AwesomeIcon name="cog" size={20} style={{ marginRight: 15 }} />
    </TouchableOpacity>
  );
};

const ProfileButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
      <AwesomeIcon name="user" size={20} style={{ marginLeft: 15 }} />
    </TouchableOpacity>
  );
};

function setIcon(route, routeStatus) {
  let iconName = "";
  if (route.name === "Library") {
    iconName = "images";
  }
  if (route.name === "Search") {
    iconName = "search";
  }
  if (route.name === "Albums") {
    iconName = "clone";
  }
  if (route.name === "ForYou") {
    iconName = "elementor";
  }

  return <AwesomeIcon name={iconName} size={20} />;
}
