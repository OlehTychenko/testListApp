import React, {memo, useCallback, useState} from 'react';
import {Button, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';

import {addListItem} from '../../store/list/listActions';
import {styles} from './styles';

export const AddListItem = memo(() => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>('');

  const handleAddItemList = useCallback(() => {
    dispatch(addListItem({title, id: Math.random()}));
    setTitle('');
  }, [dispatch, title]);

  return (
    <View style={styles.container}>
      <TextInput
        value={title}
        onChangeText={setTitle}
        style={styles.textInput}
      />
      <Button
        title="Add item"
        color="black"
        onPress={handleAddItemList}
        disabled={!title}
      />
    </View>
  );
});
