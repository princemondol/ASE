import { LOADING, SEARCH_SUCCESS, SEARCH_FAILURE, LOAD_MORE, UPDATE_SEARCH_QUERY, RESET_RESULTS } from "./actions";

export const searchQuery = (state = "", action) => {
	const { type, payload } = action;

	switch (type) {
		case UPDATE_SEARCH_QUERY:
			const { newSearchString } = payload;
			return newSearchString;
		default:
			return state;
	}

}

export const isLoading = (state = false, action) => {
	const { type } = action;
	
	switch (type) {
		case LOADING:
			return true;
		case SEARCH_SUCCESS:
		case SEARCH_FAILURE:
		case LOAD_MORE:
			return false;
		default:
			return state;
	}
}

export const searchResults = (state = { results: [], page: 1}, action) => {
	const { type, payload } = action;

	switch (type) {
		case SEARCH_SUCCESS : {
			const { searchResults } = payload;
			state.results = searchResults.results;
			state.page = 1;
			return state;
		}
		case LOAD_MORE : {
			const { moreResults } = payload;
			state.results =	state.results.concat(moreResults.results);
			state.page++;
			return state;
		}
		case SEARCH_FAILURE:
			const { status } = payload;
			if(status === 404) {
				alert("Sorry, No more results to show...");
			} else if(status === "4041"){
				alert("Sorry, No results found...");
				state.results = [];
			}else {
				alert(`Some Error occured ${status}`);
			}
			return state;

		case RESET_RESULTS : {
			state.results = [];
			state.page = 1;
			return state;
		}
		
		default : 
			return state;
	}
}