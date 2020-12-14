import React from 'react';
import { connect } from 'react-redux';
import { resetResults, updateSearchQuery } from '../state/actions';
import { searchAnime } from '../state/thunks';


const SearchBar = ({search, updateSearchString}) => {


    return (
		<div className="container">
			<div className="col-md-6 col-10 offset-1 offset-md-3 my-4 p-3 searchBar row fixed-top">
				<input 
					type="text"
					className="col-md-11 col-10" 
					placeholder="search for an anime, e.g Naruto" 
					onChange={e => updateSearchString(e.target.value)} 
					onKeyDown={e => {if(e.key === "Enter"){search()}}}
				/>
				<button className="col-md-1 col-2" onClick={() =>{search()}}>GO</button>
			</div>
		</div>
    );
}


const mapDispatchToProps = dispatch => ({
	search: () => {
		dispatch(resetResults())
		dispatch(searchAnime())
	},
	updateSearchString: (searchString) => {
		dispatch(updateSearchQuery(searchString))
	}
});

export default connect(null, mapDispatchToProps)(SearchBar);

