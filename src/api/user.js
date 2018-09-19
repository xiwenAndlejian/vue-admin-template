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
