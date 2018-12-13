import axios from 'axios'

const KEY = 'AIzaSyAXFTuTSAPzTiIsPvz25USmZMuWMsWzHak'

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
})