import React from "react";
import { SafeAreaView, View,Text, FlatList, StyleSheet } from "react-native";
import music_data from './music-data.json';
import SongCard from "./components/SongCard";

function App () {
  const renderSong = ({item}) => <SongCard song={item}/>;
  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.container}>
       <FlatList
      keyExtractor={(item) => item.id}
       data={music_data }
       renderItem= {renderSong}
       />
      </View>
    </SafeAreaView>
  );

}

export default App;

const styles =StyleSheet.create({
  container : {flex : 1},
});