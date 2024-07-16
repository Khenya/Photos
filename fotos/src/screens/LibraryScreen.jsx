import { ScrollView, SafeAreaView, Text } from "react-native";

import LibraryContent from "../components/commom/LibraryContent"
import { styles } from "../confit/theme/app-theme";

const LibraryScreen = () => {
  return <SafeAreaView style={{
    width: '100%',
    height: '100%',
  }}>
    <ScrollView>
      <Text style = {styles.text}>Today</Text>
      <LibraryContent/>
      <Text style = {styles.text}>Yesterday</Text>
      <LibraryContent/>
      <Text style = {styles.text}>15 July</Text>
      <LibraryContent/>
      <Text style = {styles.text}>1 July</Text>
      <LibraryContent/>
    </ScrollView>
  </SafeAreaView>
};

export default LibraryScreen;
