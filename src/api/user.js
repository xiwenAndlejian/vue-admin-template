import request from '@/utils/request'

export function getUserDetail(userId) {
  return request({
    url: `/user/${userId}`,
    method: 'get'
  })
}
