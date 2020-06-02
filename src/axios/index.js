import axios from 'axios'
import {Message} from 'element-ui'

const Api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  withCredentials: true
})

const Web = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  withCredentials: true
})

function errorHandle (error) {
  let msg = ''
  switch (error.response.status) {
    case 403:
      msg = error.response.data.msg
      break
    case 429:
      msg = error.response.statusText
      break
    case 500:
      msg = '服务器繁忙,请稍后再试'
      break
  }

  if (msg) {
    Message.error(msg)
  }
}

Api.interceptors.response.use(function (response) {
  // nothing todo
  return response
}, function (error) {
  // common error handle
  errorHandle(error)

  // extra error return to custome handle
  return Promise.reject(error)
})

Web.interceptors.response.use(function (response) {
  // nothing todo
  return response
}, function (error) {
  // common error handle
  errorHandle(error)

  // extra error return to custome handle
  return Promise.reject(error)
})

Api.defaults.headers.post['Content-type'] = 'application/json'
Api.defaults.headers.put['Content-type'] = 'application/json'
Api.defaults.headers.patch['Content-type'] = 'application/json'

const install = function (Vue) {
  Vue.prototype.$api = Api
  Vue.prototype.$web = Web
}

export default {
  install
}
