import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';

import Tile from './components/Tile'

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.tilesContainer}>
        <Tile title="tile one" startTeller="2" />
        <Tile title="tile two"  startTeller="4"/>
        <Tile title="tile three" startTeller="6"/>
        <Tile title="tile four" startTeller="8"/>
        <Tile title="tile five" startTeller="10" />
        <Tile title="tile six" startTeller="12" />
        <Tile title="tile seven" startTeller="14" />
        <Tile title="tile eight" startTeller="16" />
        <StatusBar style="auto" />
      </View>
    </ScrollView >
    //

  );
}

const styles = StyleSheet.create({
  header1: {
    fontSize: 32,
    fontWeight: '800',
    margin: 12,
  },
  container: {
    backgroundColor: '#fff',
    paddingTop: 56,
  },
  tilesContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 0,
    flexShrink: 0,
    justifyContent: 'space-evenly',

  },
});
