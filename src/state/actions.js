export const LOADING = "LOADING";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAILURE = "SEARCH_FAILURE";
export const LOAD_MORE = "LOAD_MORE";
export const UPDATE_SEARCH_QUERY = "UPDATE_SEARCH_QUERY";
export const RESET_RESULTS = "RESET_RESULTS";

export const loading = () => ({
	type: LOADING,
})

export const searchResultsSuccess = searchResults => ({
	type: SEARCH_SUCCESS,
	payload: { searchResults }
});

export const loadMoreResults = moreResults => ({
	type: LOAD_MORE,
	payload: { moreResults }
});

export const searchResultsFailure = status => ({
	type: SEARCH_FAILURE,
	payload : { status }
})


export const updateSearchQuery = newSearchString => ({
	type: UPDATE_SEARCH_QUERY,
	payload: { newSearchString }
})

export const resetResults = () => ({
	type: RESET_RESULTS
})