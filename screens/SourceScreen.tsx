import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Source</Text>
      <Text style={styles.github}>
        <a href="https://github.com/franciscoG98" target="_blank" rel="noopener noreferrer">
          Author github
        </a>
      </Text>
      <Text style={styles.github}>
        <a href="https://github.com/franciscoG98/react-native_carousel" target="_blank" rel="noopener noreferrer">
          Repository
        </a>
      </Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  github: {
    fontSize: 15,
    backgroundColor: '#000',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
