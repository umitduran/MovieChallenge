import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const Loading = ({visible, children}) => {
  return visible ? (
    <View style={styles.content}>
      <ActivityIndicator size={'large'} color={'#1e6091'} />
    </View>
  ) : (
    children
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginTop: 300,
    justifyContent: 'center',
  },
});

export default Loading;
