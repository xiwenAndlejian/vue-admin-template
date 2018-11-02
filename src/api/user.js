import request from '@/utils/request'

export function getUserDetail(userId) {
  return request({
    url: `/user/${userId}`,
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

export function changeAvatar(userId, param) {
  return request({
    url: `/user/${userId}/avatar`,
    method: 'put',
    param: param
  })
}
