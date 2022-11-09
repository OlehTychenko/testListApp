import {
  ADD_LIST_ITEM,
  DELETE_LIST_ITEM,
  EDIT_LIST_ITEM,
  REORDER_LIST_ITEMS,
} from './listTypes';
import {IListItem} from '../../interfaces';

interface IState {
  list: IListItem[];
}
interface IAction {
  type: string;
  listItem: IListItem;
  listItems?: IListItem[];
}

const initialState: IState = {
  list: [
    {
      title: 'first',
      id: Math.random(),
    },
    {
      title: 'second',
      id: Math.random(),
    },
    {
      title: 'third',
      id: Math.random(),
    },
  ],
};

export const listReducer = (state = initialState, action: IAction): IState => {
  switch (action.type) {
    case EDIT_LIST_ITEM: {
      const updatedList = state.list.map(item =>
        item.id === action.listItem.id ? action.listItem : item,
      );
      return {
        list: updatedList,
      };
    }
    case ADD_LIST_ITEM: {
      const updatedList = [...state.list, action.listItem];
      return {
        list: updatedList,
      };
    }
    case REORDER_LIST_ITEMS: {
      return {
        list: action.listItems || state.list,
      };
    }
    case DELETE_LIST_ITEM: {
      const updatedList = state.list.filter(
        item => item.id !== action.listItem.id,
      );
      return {
        list: updatedList,
      };
    }
    default:
      return state;
  }
};

export type ListReducer = ReturnType<typeof listReducer>;
