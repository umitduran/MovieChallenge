import React, {useState, useCallback} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

import useDebounce from '../utils/helpers';
//import {CloseIcon} from './Icons';

const SearchBar = ({onChange}) => {
  const [searchValue, setSearchValue] = useState('');

  useDebounce(searchValue, item => onChange(item), 500);

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Search Movie..."
        value={searchValue}
        onChangeText={item => setSearchValue(item)}
      />
      {/*      {searchValue.length > 0 && (
        <TouchableOpacity
          style={styles.closeIconWrapper}
          onPress={handleClearSearch}>
          <CloseIcon />
        </TouchableOpacity>
      )}*/}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {},
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: '#243643',
    borderRadius: 3,
  },
});

export default SearchBar;
