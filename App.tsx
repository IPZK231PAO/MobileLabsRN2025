// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeTabs from './app/(tabs)/home/_layout'; // Підключаємо ваші вкладки

export default function App() {
  return (
    <NavigationContainer>
      <HomeTabs />
    </NavigationContainer>
  );
}
