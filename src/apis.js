import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';


export const fetchData = () =>
  axios
    .get('/getarticlelist?action=type&start=0&order=推荐')
    .then(json => Promise.resolve(json));


export default {
  fetchData
};