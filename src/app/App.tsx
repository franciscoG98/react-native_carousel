import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheetProperties, Text } from 'react-native';

import useCachedResources from '../hooks/useCachedResources';
import useColorScheme from '../hooks/useColorScheme';
import Navigation from '../navigation';

const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <Text>Carousel</Text>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

// const styles = StyleSheet.create({
//   safe:{
//     flex: 1,
//   }
// })

export default App;
