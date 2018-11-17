import axios from 'axios'

const debug = process.env.NODE_ENV !== 'production'
/**
 * TODO: devとproduction環境用のConfigを作成し、読み込んでパスを開発環境と商用環境で切り替えれるようにする
 */
const serverIP = 'http://localhost:8090/'

const onSuccess = (resp) => {
  if (debug) {
    console.log(` << ${JSON.stringify(resp.data)}`)
  }
  return Promise.resolve(resp.data)
}

const onError = () => {
  throw new Error('API error.')
}

const createURL = (path) => serverIP + path

/**
 * @return Promise
 */
export default {
  get: (path, params) => {
    if (debug) {
      console.log(`GET ${createURL(path)} >> ${JSON.stringify(params)}`)
    }
    return axios.get(createURL(path), { params }).then(onSuccess).catch(onError)
  },
  post: (path, params) => {
    if (debug) {
      console.log(`POST ${createURL(path)} >> ${JSON.stringify(params)}`)
    }
    return axios.post(createURL(path), params).then(onSuccess).catch(onError)
  },
  put: (path, params) => {
    if (debug) {
      console.log(`PUT ${createURL(path)} >> ${JSON.stringify(params)}`)
    }
    return axios.put(createURL(path), params).then(onSuccess).catch(onError)
  },
  delete: (path, params) => {
    if (debug) {
      console.log(`DELETE ${createURL(path)} >> ${JSON.stringify(params)}`)
    }
    return axios.delete(createURL(path), { params }).then(onSuccess).catch(onError)
  }
}
