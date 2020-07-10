import request from '@/utils/index'

export function getUser(params) {
  return request({
    url: '/sli97/user/get',
    method: 'delete',
    data: params,
  })
}

export function createUser(params) {
  return request({
    url: '/sli97/user/insert',
    method: 'post',
    data: params,
  })
}

export function login(params) {
  return request({
    url: '/sli97/auth/login',
    method: 'post',
    headers: {
      'Authorization': 'Basic YnJvd3Nlcjpicm93c2Vy',
      // 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
    },
    params: params,
  })
}
