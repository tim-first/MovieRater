import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { FlatList, Image } from 'react-native';

export default function MovieList() {

  const [ movies, setMovies ] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/movies/', {
      method: 'GET',
      headers: {
        'Authorization': `Token 8d479a6df041c06f80c65264f80f86fac1fdbfa7`
      }
    })
    .then(res => res.json())
    .then(jsonRes => setMovies(jsonRes))
    .catch( error => console.log(error));
  }, []);

  return (
    <View>
      {/* <Image source={require('../assets/splash.png')}
        style={{width: '100%', height: 135, paddingTop: 30}}
        resizeMode='contain'
      /> */}
      <Text style={styles.logo}>MovieRater</Text>
      <FlatList
        data={movies}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flex: 1,
    padding: 10,
    height: 50,
    backgroundColor: '#282C35'
  },
  itemText: {
    color: '#fff',
    padding: 10,
  },
  logo: {
    backgroundColor: '#282C35',
    color: 'yellow',
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold'
  },
});
