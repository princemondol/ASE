import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { searchQuery ,searchResults, isLoading } from './reducers';

const reducers = {
	searchResults,
	isLoading,
	searchQuery
};
const rootReducers = combineReducers(reducers);
export const configureStore = () => createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));