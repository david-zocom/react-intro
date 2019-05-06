import React from 'react';

// när klass och när funktion?
// Klass när man behöver STATE och LIVSCYKELFUNKTIONER
// Funktion när komponenten bara behöver PROPS

// function SearchResult(props) { return ... }
const SearchResult = props => (
	<div className="searchResult">
		<a href="https://whatever.com" className="heading">Heading</a>
		<a href="https://whatever.com" className="link">https://whatever.com</a>
		Something really informative about this search result
		repeating repeating repeating repeating repeating repeating repeating repeating repeating repeating repeating repeating
	</div>
)

export default SearchResult;
