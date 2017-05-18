import axios from 'axios';

const API_KEY = "AIzaSyAihlKnwXV_zqg7Sn2TBsZHKwPglURaqBA";
const COMMENTS_URL = "https://www.googleapis.com/youtube/v3/commentThreads";
const VIDEO_SEARCH_URL = "https://www.googleapis.com/youtube/v3/search";
const JOE_ROGAN_ID = "UCzQUP1qoWDoEbmsQxvdjxgQ";
const fetchComments = (videoId) => {
    searchPodCast("jordan peterson episode  ");
    const request = `${COMMENTS_URL}?key=${API_KEY}&part=snippet,replies&videoId=${videoId}&order=relevance&maxResults=100`;
    return axios.get(request)
        .then((responce) => {
            return responce.data.items.map((item) => {
                return item;
            })
        })
}

const searchPodCast = (query)=> {
    const request = `${VIDEO_SEARCH_URL}?key=${API_KEY}&channelId=${JOE_ROGAN_ID}&part=snippet&q=${query}`;
    return axios.get(request)
        .then((responce) => {
            return ( responce.data.items.filter((item)=>{
                return item.snippet.title.startsWith("Joe Rogan Experience #")
            }).
            map((item)=>{
                const result = {
                    title:item.snippet.title,
                    youtubeId:item.id.videoId
                }
                console.log('api result',result);
                return result;

            }));

        }).
        catch((error) => {
            console.error('error getting results for video', error);
        })
}

export { fetchComments, searchPodCast };