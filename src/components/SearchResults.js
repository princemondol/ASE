import React from 'react';
import { connect } from 'react-redux';
import { loadMore } from '../state/thunks';
import Card from './Card';
import Loader from './Loader';


const SearchResults = ({searchResults, isLoading, loadMoreSearchResults}) => {
	

	return ( 
		<div className="container my-5 pt-5">

			{searchResults && searchResults.length && searchResults.length !== 0 ? 
				<>	
					<div className="row equal">
						{searchResults.map((anime) => (
							<Card 
								title={anime.title} 
								image={anime.image_url} 
								key={anime.mal_id} 
							/>
						))}
					</div>
				    
					{isLoading === false ? 
						<div className="text-center my-3 text-white">
							<button 
								onClick={() => loadMoreSearchResults()}>Load more...
							</button>
						</div> : null}	
			
				</>	: null }

			{isLoading ? <Loader /> : null}
		</div> 
				
	)

}

const mapStateToProps = state => ({
	searchResults: state.searchResults.results,
	isLoading: state.isLoading,
})

const mapDispatchToProps = dispatch => ({
	loadMoreSearchResults: () => dispatch(loadMore())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
