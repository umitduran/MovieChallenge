import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

const Card = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default Card;
