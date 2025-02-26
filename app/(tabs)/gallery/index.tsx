import React from 'react';
import { FlatList, View, Image, StyleSheet } from 'react-native';
import GalleryItem from '@/components/GelleryItem';
import { ThemedText } from '@/components/ThemedText';

const galleryData = [
  { id: '1', image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' },
  { id: '2', image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' },
  { id: '3', image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' },
  { id: '4', image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' },
];

export default function GalleryScreen() {
  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}>Gallery</ThemedText>
      <FlatList
        data={galleryData}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => <GalleryItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:10
  },
  title:{
    textAlign:'center',
      fontSize:20,
      fontWeight:600
  }
   
});
