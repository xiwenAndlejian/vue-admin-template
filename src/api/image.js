import request from '@/utils/request'

export function upload(params, data) {
  return request({
    url: '/upload',
    method: 'post',
    data: data,
    params: params
  })
}
