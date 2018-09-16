import request from '@/utils/request'

export function getLogList() {
  return request({
    url: '/log',
    method: 'get'
    // params
  })
}
