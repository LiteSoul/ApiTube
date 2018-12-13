import React from "react";
import SearchBar from "./SearchBar";
import youtube from '../apis/youtube'

export default function App() {
	const onTermSubmit = (term) => {
		console.log(term)
		youtube.get('/search', {
			params: {
				q: term
			}
		})
	}

	return (
		<div className="ui container">
			<SearchBar onTermSubmit={onTermSubmit} />
		</div>
	);
}
