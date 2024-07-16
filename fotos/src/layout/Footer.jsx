import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();
import LibraryScreen from '../screens/LibraryScreen';
import ForYouScreen from '../screens/ForYouScreen';
import AlbumScreen from '../screens/AlbumScreen';
import SearchScreen from '../screens/SearchScreen';
export const Footer = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: (routeStatus) => setIcon(route, routeStatus),
      tabBarShowLabel: true,
      tabBarInactiveTintColor: 'gray',
    })}
    >
      <Tab.Screen name="Library" component={LibraryScreen} options={{ headerShown: true, headerTitleAlign: 'center' }} />
      <Tab.Screen name="ForYou" component={ForYouScreen} options={{ headerShown: true, headerTitleAlign: 'center' }} />
      <Tab.Screen name="Albums" component={AlbumScreen} options={{ headerShown: true, headerTitleAlign: 'center' }} />
      <Tab.Screen name="Search" component={SearchScreen} options={{ headerShown: true, headerTitleAlign: 'center' }} />
    </Tab.Navigator>
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