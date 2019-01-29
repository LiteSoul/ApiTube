import React, { useState } from "react";
import SearchBar from "./SearchBar";
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import youtube from '../apis/youtube'

export default function App() {
	const [videos, setVideos] = useState([])
	const [selectedVideo, setSelectedVideo] = useState(null)

	const onTermSubmit = async (term) => {
		console.log(term)
		const response = await youtube.get('/search', {
			params: {
				q: term
			}
		})
		setVideos(response.data.items)
	}

	const onVideoSelect = video => {
		setSelectedVideo(video)
	}

	return (
		<div className="ui container">
			<SearchBar onTermSubmit={onTermSubmit} />
			<VideoDetail video={selectedVideo} />
			<VideoList videos={videos} onVideoSelect={onVideoSelect} />
		</div>
	);
}
