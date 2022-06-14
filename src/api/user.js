// 用户相关请求模块

import request from '@/utils/request'
// import store from '@/store'
// 登录请求
export const login = data => {
  return request({
    method: 'POST',
    url: '/v1_0/authorizations',
    data
  })
}
// 获取验证码请求
export const getSms = mobile => {
  return request({
    method: 'GET',
    url: `/v1_0/sms/codes/${mobile}`
  })
}

// 获取用户信息请求
export const getUserInfo = () => {
  return request({
    method: 'GET',
    url: '/v1_0/user'
    // 发送请求头数据
    // headers: {
    //   Authorization:`Bearer ${store.state.user.token}`
    // }
  })
}

// 获取频道列表
export const getUserChannel = () => {
  return request({
    method: 'GET',
    url: '/v1_0/channels'
  })
}
