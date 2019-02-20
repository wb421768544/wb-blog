import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';



export const fetchLogin = params =>
  axios
    .post('/', params)
    .then(json => Promise.resolve(json));

export const fetchIsLogin = () =>
  axios
    .post('/')
    .then(json => Promise.resolve(json));

export const fetchLogout = () =>
  axios
    .post('/', params)
    .then(json => Promise.resolve(json));

export const fetchData = () =>
  axios
    .get('/getarticlelist?action=type&start=0&order=推荐')
    .then(json => Promise.resolve(json));

export const fetchArticleListByTourist = params =>
  axios
    .get('/list/getAricleList', { params: { ...params } })
    .then(json => Promise.resolve(json));


export default {
  fetchLogin,
  fetchIsLogin,
  fetchLogout,
  fetchData,
  fetchArticleListByTourist,
};