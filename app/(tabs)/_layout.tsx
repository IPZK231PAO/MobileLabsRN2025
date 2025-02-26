// app/(tabs)/home/HomeTabs.tsx
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import HomeScreen from './home/index'; 
import GalleryScreen from './gallery/index';
import RegisterScreen from './auth';
import {View, StyleSheet } from 'react-native';
import Header from '@/components/Header';

const Tab = createMaterialTopTabNavigator();

export default function HomeTabs() {
  return (
    <View style={styles.container}>
     <Header/>
      
  <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={24} color={color} />
          ),
        }}
      />
       <Tab.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="image" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Auth"
        component={RegisterScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="person-outline" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
    </View>
    
  );
}


const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: "#f5f5f5",
    },
  
})
