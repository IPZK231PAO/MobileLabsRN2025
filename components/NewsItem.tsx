import { View, Text, Image, StyleSheet } from "react-native";

export default function NewsItem({ item }: { item: { image: string; title: string; description: string } }) {
    console.log(item.image)
    return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "#fff", padding: 10, borderRadius: 10, marginVertical: 5 },
  image: { width: "100%", height: 150, borderRadius: 10 },
  title: { fontSize: 18, fontWeight: "bold", marginTop: 5 },
  description: { fontSize: 14, color: "#666" },
});
