import React from 'react';
import {StyleSheet, TouchableOpacity, View, Image, Text} from 'react-native';

const image_url = 'https://image.tmdb.org/t/p/'; //todo should be in config

const Card = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.imageBox}>
          <Image
            style={styles.image}
            source={{
              uri: `${image_url}w500${item.poster_path}`,
            }}
          />
        </View>

        <View style={styles.descBox}>
          <Text style={styles.desc}>{item.title}</Text>
          <Text style={styles.vote}>Vote: {item.vote_average}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 120,
    padding: 10,
    marginBottom: 5,
  },
  imageBox: {
    flex: 2,
    height: 100,
  },
  descBox: {
    flex: 2,
    height: 100,
    backgroundColor: 'ghostwhite',
  },
  image: {
    justifyContent: 'center',
    borderRadius: 5,
    margin: 2,
    resizeMode: 'cover',
    minHeight: 100,
  },
  desc: {
    borderRadius: 5,
    margin: 2,
    textAlign: 'center',
    justifyContent: 'center',
    padding: 5,
    color: '#0077b6',
  },
  vote: {
    color: 'green',
    textAlign: 'center',
    justifyContent: 'center',
  },
});

export default Card;
