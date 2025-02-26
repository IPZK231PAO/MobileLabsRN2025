import { FlatList, StyleSheet, View } from "react-native";
import NewsItem from "@/components/NewsItem";
import { ThemedText } from "@/components/ThemedText";

const array = [
  { id: "1", image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg", title: "Перша новина", description: "Опис першої новини" },
  { id: "2", image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg", title: "Друга новина", description: "Опис другої новини" },
  { id: "3", image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg", title: "Третя новина", description: "Опис третьої новини" },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}>News</ThemedText>
      <FlatList data={array} keyExtractor={(item) => item.id} renderItem={({ item }) => <NewsItem item={item} />} />
    </View>
  );
}

const styles = StyleSheet.create(
  { container: { 
    padding: 10,
    height: '100%', } ,
    title:{
      textAlign:'center',
      fontSize:20,
      fontWeight:600
    }
  });
