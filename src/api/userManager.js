import request from '@/utils/request'

export function queryUser(params) {
  return request({
    url: '/user',
    methods: 'get',
    params: params
  })
}
