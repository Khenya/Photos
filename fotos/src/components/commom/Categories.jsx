import { ScrollView, View, Image, Text } from "react-native";
import { styles } from "../../confit/theme/app-theme";

const Categories = () => {
    const categories = [
        { id: 1, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/250px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg', name: 'Art' },
        { id: 2, image: 'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/6B34/production/_94244472_9.jpg.webp', name: 'Vehicles' },
        { id: 3, image: 'https://static01.nyt.com/images/2022/07/18/science/18SCI-universal-call-of-music1-esp-1/18SCI-universal-call-of-music1-mediumSquareAt3X.jpg', name: 'Babies' },
        { id: 4, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/220px-Cat_November_2010-1a.jpg', name: 'Cat' },
        { id: 5, image: 'https://img.hellofresh.com/w_3840,q_auto,f_auto,c_fill,fl_lossy/hellofresh_website/es/cms/SEO/recipes/albondigas-caseras-de-cerdo-con-salsa-barbacoa.jpeg', name: 'Foot' },
        { id: 6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7lkawcqjiHdmN-FquvzilxYI1outSpfO-YA&s', name: 'Dog' },
        { id: 7, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT347ziJITiFP4CZ78kG20h30DRyyq7McQbmg&s', name: 'House' },
        { id: 8, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcWr6Q9wwNSpolraAlAcmBkjTDObRlr3Ncvg&s', name: 'Animals' },
        { id: 9, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl2eXXGDD5D9HSOIh9N7w1rP8D2tmtpgmpSw&s', name: 'Dinosaurs' },
    ];
    return (
        <ScrollView horizontal style={styles.horizontalList}>
            {categories.map((place) => (
                <View key={place.id} style={styles.item}>
                    <Image source={{ uri: place.image }} style={styles.Busquedaimage} />
                    <Text>{place.name}</Text>
                </View>
            ))}
        </ScrollView>
    )
}
export default Categories;