import {
  parseTime
} from '@/utils/index'

export const DateFilter = (time) => {
  if (time == null || time === undefined) {
    return ''
  }
  return parseTime(new Date(time))
}
