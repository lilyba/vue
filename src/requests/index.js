import axios from 'axios'
import { Indicator, Toast } from 'mint-ui'
const ajax = axios.create({
  baseURL: 'http://rap2api.taobao.org/app/mock/121304'
})
ajax.interceptors.request.use(config => {
  Indicator.open('加载……')
  return config
})
ajax.interceptors.response.use(resp => {
  Indicator.close()
  if (resp.data.code === 200) {
    return resp.data.data
  } else {
    Toast({
      message: 'something is wrong',
      duration: 4000
    })
  }
})

export const getSwiper = () => {
  return ajax.get('/api/v1/swiper')
}

export const getNotice = () => {
  return ajax.get('/api/v1/notice')
}
