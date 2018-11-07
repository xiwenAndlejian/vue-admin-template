import request from '@/utils/request'

export function getUserDetail() {
  return request({
    url: `/user/detail`,
    method: 'get'
  })
}

export function saveUserDetail(userId, data) {
  return request({
    url: `/user/${userId}`,
    method: 'put',
    data: data
  })
}

export function changePassword(userId, data) {
  return request({
    url: `/user/${userId}/passwd`,
    method: 'put',
    data: data
  })
}

export function changeAvatar(userId, params) {
  return request({
    url: `/user/${userId}/avatar`,
    method: 'put',
    params: params
  })
}
