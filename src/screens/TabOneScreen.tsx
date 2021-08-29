import * as React from 'react';
import { StyleSheet, Image, useWindowDimensions } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Carousel from '../components/carousel/CarouselScreen'

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carousel</Text>

      <Text style={styles.content}>Tab Two</Text>

      <Carousel />

      <Text style={styles.content}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: '#493d8a',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 10,
    teaxtAlign: 'center',
  },
  content: {
    fontSize: 12,
    fontWeight: '200',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
