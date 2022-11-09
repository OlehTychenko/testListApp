import React, {memo, useCallback} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import DraggableFlatList, {
  RenderItemParams,
} from 'react-native-draggable-flatlist';

import {AddListItem, ListItem} from '../../components';
import {RootReducer} from '../../store/rootReducer';
import {reorderItems} from '../../store/list/listActions';
import {IListItem} from '../../interfaces';
import {styles} from './styles';

export const Home = memo(() => {
  const list = useSelector((state: RootReducer) => state.listState.list);
  const dispatch = useDispatch();

  const renderItem = useCallback(
    ({item, drag, isActive}: RenderItemParams<IListItem>) => (
      <TouchableOpacity onLongPress={drag} disabled={isActive}>
        <ListItem title={item.title} id={item.id} />
      </TouchableOpacity>
    ),
    [],
  );

  const handleOnDragEnd = useCallback(
    ({data}: {data: IListItem[]}) => dispatch(reorderItems(data)),
    [dispatch],
  );

  const keyExtractor = useCallback(({id}: {id: number}) => String(id), []);

  return (
    <View style={styles.container}>
      <AddListItem />
      {list.length ? (
        <DraggableFlatList
          data={list}
          onDragEnd={handleOnDragEnd}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          containerStyle={styles.flatListContainerStyle}
        />
      ) : (
        <View style={styles.emptyListMessageContainer}>
          <Text style={styles.emptyListMessage}>No Items</Text>
        </View>
      )}
    </View>
  );
});
