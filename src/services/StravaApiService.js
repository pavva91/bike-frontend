import axios from 'axios'

const stravaAccessToken = import.meta.env.VITE_STRAVA_ACCESS_TOKEN
const token = 'Bearer ' + stravaAccessToken
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_STRAVA_API,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: token,
  },
})

// apiClient.interceptors.request.use(
//   (request) => {
//     // const token = localStorage.getItem("jwt-token");
//     const stravaAccessToken = import.meta.env.VITE_STRAVA_ACCESS_TOKEN
//     const token = "Bearer " + stravaAccessToken
//     if (token) {
//       request.headers["Authorization"] = token;
//     }
//     return request;
//   },
//   (error) => {
//     // handle errors
//     throw error;
//   },
// );

apiClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (
      error.request &&
      error.request.status == 401 &&
      error.response.data.error != 'Invalid Username and Password combination'
    ) {
      // NOTE: For now just redirects to "/" (that redirects to /login)
      window.location.href = '/'
      return Promise.resolve(error.response)
    }
    return Promise.reject(error)

    // TODO: Use JWT Refresh Token
    // https://medium.com/monstar-lab-bangladesh-engineering/jwt-auth-in-go-part-2-refresh-tokens-d334777ca8a0
    // Set Failed Request
    // let failedRequest = error.config;
    //
    // //Method to get new token
    // return renewUserToken().then((response) => {
    //   // Set axios instance header
    //   axiosInstance.defaults.headers["Authorization"] =
    //     "Bearer " + response.token;
    //
    //   // Set failed request header
    //   failedRequest.headers["Authorization"] = "Bearer " + response.token;
    //
    //   //Retry failed request
    //   return axios.request(failedRequest);
    //   });

    // TODO: Use JWT Refresh Token
    // https://github.com/axios/axios/issues/690#issuecomment-278372400
    // let originalRequest = error.config
    // if (error.response.status === 401 && !originalRequest._retry) { // if the error is 401 and hasent already been retried
    //   originalRequest._retry = true // now it can be retried
    //   return Vue.axios.post('/users/token', null).then((data) => {
    //     store.dispatch('authfalse')
    //     store.dispatch('authtruth', data.data)
    //     originalRequest.headers['Authorization'] = 'Bearer ' + store.state.token // new header new token
    //     return Vue.axios(originalRequest) // retry the request that errored out
    //   }).catch((error) => {
    //     for (let i = 0; i < error.response.data.errors.length; i++) {
    //       if (error.response.data.errors[i] === 'TOKEN-EXPIRED') {
    //         auth.logout()
    //         return
    //       }
    //     }
    //   })
    // }
    // if (error.response.status === 404 && !originalRequest._retry) {
    //   originalRequest._retry = true
    //   window.location.href = '/'
    //   return
    // }
    // // Do something with response error
    // return Promise.reject(error)
  },
)

export default {
  getActivity(activityID) {
    const url = `routes/${activityID}`
    const res = apiClient.get(`${url}`)
    return res
  },
  register(payload) {
    return apiClient.post('users', payload)
  },
  login(payload) {
    return apiClient.post('login', payload)
  },
  listWallets() {
    return apiClient.get('wallets')
  },
  createWallet(payload) {
    return apiClient.post('wallets', payload)
  },
  getWallet(walletId) {
    const url = `wallets/${walletId}`
    return apiClient.get(`${url}`)
  },
  listTokens() {
    return apiClient.get('blockchains')
  },
  getToken(tokenId) {
    const url = `blockchains/${tokenId}`
    return apiClient.get(`${url}`)
  },
  listTokenNetworks(tokenId) {
    const url = `blockchains/${tokenId}/networks`
    return apiClient.get(`${url}`)
  },
  setJwtToken(jwtToken) {
    apiClient.defaults.headers.common['Authorization'] = jwtToken
  },
  createEthTx(payload) {
    return apiClient.post('transactions/eth', payload)
  },
  sendEthTx(walletId, networkId, ethTx) {
    const url = `transactions/eth/wallets/${walletId}/networks/${networkId}`
    return apiClient.post(url, ethTx)
  },
  getIpfs(ipfsHash) {
    const url = `ipfs/${ipfsHash}`
    return apiClient.get(`${url}`)
  },
  addNft(walletId, payload) {
    const url = `wallets/${walletId}/nfts`
    return apiClient.post(url, payload)
  },
  listNfts(walletId) {
    const url = `wallets/${walletId}/nfts`
    return apiClient.get(url)
  },
  deleteNft(walletId, nftId) {
    const url = `wallets/${walletId}/nfts/${nftId}`
    return apiClient.delete(url)
  },
}
