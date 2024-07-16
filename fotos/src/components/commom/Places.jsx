import { ScrollView, View, Image, Text } from "react-native";
import { styles } from "../../confit/theme/app-theme";

const Places = () => {
    const places = [
        { id: 1, image: 'https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2019/05/San-francisco.png', name: 'La Paz' },
        { id: 2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYaEnLWBOzxQcTq6GpZo_9HVqKFg1FYAaYVQ&s.png', name: 'Boston' },
        { id: 3, image: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Egypt.Giza.Sphinx.02.jpg', name: 'Egipto' },
        { id: 4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcssQ4215Dn8w5JTKRwpImgojHCJV4kVNO3g&s.png', name: 'Paris' },
        { id: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVALvxP30ycdpAP8SvKfP9DbOr0BOJzAd1XQ&s', name: 'Nueva York' },
        { id: 6, image: 'https://www.visitphilly.com/wp-content/uploads/2023/10/philly-skyline-schuylkill-kelly-drive-elevated-angles-2200x1237px.jpg', name: 'Filadelfia' },
        { id: 7, image: 'https://imageio.forbes.com/specials-images/imageserve/653bbb94a312e38eefc5bcb0/aerial-view-of-Manhattan-from-Jersry-City--New-York--USA/960x0.jpg?format=jpg&width=960', name: 'Nueva Jersey' },
        { id: 8, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUs4AQ6tF9lW1ZLq8PdNvDZArnB6r-p3ElkA&s', name: 'Sao Paulo' },
        { id: 9, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJcdsOcarcTo9rqGvoulR05NHfPo822kvoAQ&s', name: 'Buenos Aires' },
    ];
    return (
        <ScrollView horizontal style={styles.horizontalList}>
            {places.map((place) => (
                <View key={place.id} style={styles.item}>
                    <Image source={{ uri: place.image }} style={styles.Busquedaimage} />
                    <Text>{place.name}</Text>
                </View>
            ))}
        </ScrollView>
    )
}
export default Places;