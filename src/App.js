import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

function App() {
	return (
		<>
			<SearchBar />
			<SearchResults/>
		</>
	);
}

export default App;
