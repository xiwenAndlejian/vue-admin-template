import {
  parseTime
} from '@/utils/index'

export const DateFilter = (time) => {
  return parseTime(new Date(time))
}
