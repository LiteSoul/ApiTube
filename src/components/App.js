import React, { useState } from "react";
import SearchBar from "./SearchBar";
import VideoList from './VideoList'
import youtube from '../apis/youtube'

export default function App() {
	const [videos, setVideos] = useState([])

	const onTermSubmit = async (term) => {
		console.log(term)
		const response = await youtube.get('/search', {
			params: {
				q: term
			}
		})

		setVideos(response.data.items)
	}

	return (
		<div className="ui container">
			<SearchBar onTermSubmit={onTermSubmit} />
			<VideoList videos={videos} />
		</div>
	);
}
