import {combineReducers} from 'redux';
import {listReducer} from './list/listReducer';

export const rootReducer = combineReducers({
  listState: listReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
