import { ScrollView, View, Image } from "react-native";
import { styles } from "../../confit/theme/app-theme";

const People = () => {
    const people = [
        { id: 1, image: 'https://randomuser.me/api/portraits/women/1.jpg' },
        { id: 2, image: 'https://randomuser.me/api/portraits/women/2.jpg' },
        { id: 3, image: 'https://randomuser.me/api/portraits/women/3.jpg' },
        { id: 4, image: 'https://randomuser.me/api/portraits/women/4.jpg' },
        { id: 5, image: 'https://randomuser.me/api/portraits/women/5.jpg' },
    ];
    return (
        <ScrollView horizontal style={styles.horizontalList}>
            {people.map((person) => (
                <View key={person.id} style={styles.item}>
                    <Image source={{ uri: person.image }} style={styles.imagePerson} />
                </View>
            ))}
        </ScrollView>
    )
}
export default People;