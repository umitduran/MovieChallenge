import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {SearchBar} from 'react-native-screens';

test('fire changeText event', () => {
  const onEventMock = jest.fn();
  const {getByPlaceholderText} = render(
    <SearchBar handleChangeText={onEventMock} />,
  );

  fireEvent(getByPlaceholderText('Search Movie...'), 'onChangeText', 'Fight');
  expect(onEventMock).toHaveBeenCalledWith('Fight');
});
