import axios from 'axios';

const API_KEY = "AIzaSyAihlKnwXV_zqg7Sn2TBsZHKwPglURaqBA";
const COMMENTS_URL = "https://www.googleapis.com/youtube/v3/commentThreads";
const fetchComments = (videoId) => {
    const request = `${COMMENTS_URL}?key=${API_KEY}&part=snippet,replies&videoId=${videoId}&order=relevance&maxResults=100`;
    return axios.get(request)
        .then((responce) => {
            return responce.data.items.map((item)=>{
                return item;
            })
        })
}

export { fetchComments };