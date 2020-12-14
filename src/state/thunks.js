import { loading, searchResultsFailure, searchResultsSuccess, loadMoreResults } from "./actions";

export const searchAnime = () => async(dispatch, getState) => {
	const state = getState();
	
	try {		
		dispatch(loading());		
		const response = await fetch(`/v3/search/anime?q=${state.searchQuery}&limit=16`);
		const searchResults = await response.json();
		response.status === 200 ? dispatch(searchResultsSuccess(searchResults)) : dispatch(searchResultsFailure(response.status+`1`));
	} catch (e) {
		dispatch(searchResultsFailure(e));
		console.log("ERROR" + e);
	}
}

export const loadMore = () => async(dispatch, getState) => {
	const state = getState();
	try {
		dispatch(loading());		
		const response = await fetch(`/v3/search/anime?q=${state.searchQuery}&limit=16&page=${state.searchResults.page + 1}`);
		const moreResults = await response.json();
		response.status === 200 ? dispatch(loadMoreResults(moreResults)) : dispatch(searchResultsFailure(response.status));
	} catch (e) {
		dispatch(searchResultsFailure(e));
		console.log("ERROR" + e);
	}
}
