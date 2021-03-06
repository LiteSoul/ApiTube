import React, { useState,useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import youtube from '../apis/youtube'

export default function App() {
	const [videos, setVideos] = useState([])
	const [selectedVideo, setSelectedVideo] = useState(null)

	useEffect(() => {
		onTermSubmit('new trailer 2019')
	}, [])

	const onTermSubmit = async (term) => {
		console.log(term)
		const response = await youtube.get('/search', {
			params: {
				q: term
			}
		})
		setVideos(response.data.items)
		setSelectedVideo(response.data.items[0])
	}

	const onVideoSelect = video => {
		setSelectedVideo(video)
	}

	return (
		<div className="ui container">
			<SearchBar onTermSubmit={onTermSubmit} />
			<div className="ui grid">
				<div className="ui row">
					<div className="eleven wide column">
						<VideoDetail video={selectedVideo} />
					</div>
					<div className="five wide column">
						<VideoList videos={videos} onVideoSelect={onVideoSelect} />
					</div>
				</div>
			</div>
		</div>
	);
}
