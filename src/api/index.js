import axios from 'axios'
import config from './config.js'
import 'es6-promise/auto'

const Cache = {
  get: (key) => {
    if (!window.sessionStorage) return false
    return JSON.parse(window.sessionStorage.getItem(key))
  },
  set: (key, data) => {
    if (!window.sessionStorage) return false
    window.sessionStorage.setItem(key, JSON.stringify(data))
    return true
  },
  has: (key) => {
    return Boolean(window.sessionStorage && window.sessionStorage.hasOwnProperty(key))
  }
}

function getListUrl() {
  let url = ""
  if(config.url) url = config.url
  return url
}

function getPostUrl(sha) {
  return config.url
}

export function HttpGet(uri) {
  let url = config.url + "/" + uri;

  return axios.get(url);
  // .then(response => {
  //   result = response;
  // })
  // .catch(e => {
  //   result = this.errors.push(e);
  // });
}

