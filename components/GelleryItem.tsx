import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const GalleryItem = ({ item }: { item: any }) => (
  <View style={styles.item}>
    <Image source={{ uri: item.image }} style={styles.image} />
  </View>
);

const styles = StyleSheet.create({
  item: {
    flex:1,
    margin:5,
    height: '100%',
    borderRadius:5,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius:5
  },
});

export default GalleryItem;
