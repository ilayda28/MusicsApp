import React from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet } from 'react-native';
import music_data from './music-data.json';
import SongCard from "./components/SongCard";
import SearchBar from './components/SongCard/SearchBar';

function App () {
  const renderSong = ({item}) => <SongCard song = {item}/>;

  const renderSeperator =() => <View style ={styles.seperator}/>

  return (
    <SafeAreaView style = {styles.container}>
      <SearchBar/>
       <FlatList
       keyExtractor = {item => item.id}
       data = {music_data }
       renderItem = {renderSong}
       ItemSeparatorComponent={renderSeperator}
       />
      
    </SafeAreaView>
  );

}

export default App;

const styles =StyleSheet.create({
  container : {flex : 1},
  seperator: {
    borderWidth:1,
    borderColor :'#e0e0e0',
  },
});