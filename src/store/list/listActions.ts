import {IListItem} from '../../interfaces';
import {
  ADD_LIST_ITEM,
  DELETE_LIST_ITEM,
  EDIT_LIST_ITEM,
  REORDER_LIST_ITEMS,
} from './listTypes';

export const addListItem = (listItem: IListItem) => ({
  type: ADD_LIST_ITEM,
  listItem,
});

export const editItem = (listItem: IListItem) => ({
  type: EDIT_LIST_ITEM,
  listItem,
});

export const deleteItem = (listItem: IListItem) => ({
  type: DELETE_LIST_ITEM,
  listItem,
});

export const reorderItems = (listItems: IListItem[]) => ({
  type: REORDER_LIST_ITEMS,
  listItems,
});
