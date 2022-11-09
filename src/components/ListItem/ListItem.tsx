import React, {memo, useCallback, useRef, useState} from 'react';
import {Button, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';

import {deleteItem, editItem} from '../../store/list/listActions';
import {IListItem} from '../../interfaces';
import {styles} from './styles';

export const ListItem = memo(({title, id}: IListItem) => {
  const dispatch = useDispatch();
  const [itemTitle, setItemTitle] = useState<string>(title);
  const [isInputEditable, setIsInputEditable] = useState<boolean>(false);
  const textInputRef = useRef() as React.MutableRefObject<TextInput>;

  const handleEditListItem = useCallback(() => {
    setIsInputEditable(true);
    setTimeout(() => textInputRef.current.focus(), 0);
  }, [textInputRef]);

  const handleCancelItemEditing = useCallback(() => {
    setItemTitle(title);
    setIsInputEditable(false);
  }, [title]);

  const handleApplyItemEditing = useCallback(() => {
    dispatch(
      editItem({
        title: itemTitle,
        id,
      }),
    );
    setIsInputEditable(false);
  }, [dispatch, id, itemTitle]);

  const handleDeleteItem = useCallback(() => {
    dispatch(
      deleteItem({
        title,
        id,
      }),
    );
  }, [dispatch, id, title]);

  return (
    <View style={styles.container}>
      <TextInput
        value={itemTitle}
        onChangeText={setItemTitle}
        style={styles.textInput}
        editable={isInputEditable}
        ref={textInputRef}
      />
      <View style={styles.buttonsContainer}>
        {isInputEditable ? (
          <>
            <View style={styles.buttonContainer}>
              <Button
                title="Apply"
                onPress={handleApplyItemEditing}
                color="green"
                disabled={!itemTitle}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title="Cancel"
                onPress={handleCancelItemEditing}
                color="red"
              />
            </View>
          </>
        ) : (
          <>
            <View style={styles.buttonContainer}>
              <Button title="Edit" onPress={handleEditListItem} color="black" />
            </View>
            <View style={styles.buttonContainer}>
              <Button title="Delete" onPress={handleDeleteItem} color="red" />
            </View>
          </>
        )}
      </View>
    </View>
  );
});
