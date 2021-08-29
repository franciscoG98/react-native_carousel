import * as React from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';

import {
  arroyo,
  arroyo2,
  canchitaDeFutbol,
  jakob,
  jakob1,
  lagoFrey,
  miradaDelDr,
  pasoDeLasNubes
} from "../../assets/images/landscape-img"

// export default function TabOneScreen({ navigation, item }: RootTabScreenProps<'TabOne'>) {
export default function TabOneScreen({ item }) {


  console.log(
    `\n item \n: ${item}`,
  )

  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <Text style={styles.title}>Carousel</Text>

      <Text style={styles.content}>Tab Two</Text>

      <Text>Screen </Text>

      <Image source={arroyo} style={[styles.image, { width, resizeMode: ' contain' }]} />
      <Image source={arroyo2} style={[styles.image, { width, resizeMode: ' contain' }]} />
      <Image source={canchitaDeFutbol} style={[styles.image, { width, resizeMode: ' contain' }]} />
      <Image source={jakob} style={[styles.image, { width, resizeMode: ' contain' }]} />
      <Image source={jakob1} style={[styles.image, { width, resizeMode: ' contain' }]} />
      <Image source={lagoFrey} style={[styles.image, { width, resizeMode: ' contain' }]} />
      <Image source={miradaDelDr} style={[styles.image, { width, resizeMode: ' contain' }]} />
      <Image source={pasoDeLasNubes} style={[styles.image, { width, resizeMode: ' contain' }]} />


    

      <View style={{ flex: 0.3 }}>
        {/* <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text> */}
      </View>

      <Text style={styles.content}>Tab Two</Text>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
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
  description: {
    color: '#62656b',
    fontWeight: '300',
    paddingHorizontal: 64,
    textAlign: 'center',
  },
  image: {
    flex: .7,
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
