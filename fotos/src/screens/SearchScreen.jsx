import { ScrollView, SafeAreaView, Text} from "react-native";

import { SearchBox } from "../components/commom/SearchBox";
import { styles } from "../confit/theme/app-theme";
import People from "../components/commom/People";
import Places from "../components/commom/Places";
import Categories from "../components/commom/Categories";

const SearchScreen = () => {  
    return <SafeAreaView style={{
        width: '100%',
        height: '100%',
    }}>
        <ScrollView>
            <SearchBox style={styles.container}/>
            <Text style={styles.text}>People</Text>
            <People />
            <Text style={styles.text}>Places</Text>
            <Places/>
            <Text style={styles.text}>Categories</Text>
            <Categories/>
        </ScrollView>
    </SafeAreaView>
};

export default SearchScreen;


