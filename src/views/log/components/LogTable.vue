<template>
  <div>
    <el-table
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row>
      <el-table-column align="center" label="编号" width="95">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column label="操作员" width="150" align="center">
        <template slot-scope="scope">
          {{ scope.row.username }}
        </template>
      </el-table-column>
      <el-table-column label="操作" width="150" align="center">
        <template slot-scope="scope">
          {{ scope.row.action }}
        </template>
      </el-table-column>
      <el-table-column label="操作时间" width="200" align="center">
        <template slot-scope="scope">
          <span>{{ showDate(scope.row.createTime) }}</span>
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="操作执行情况" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.success | statusFilter">{{ scope.row.success }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="额外信息" align="center">
        <template slot-scope="scope">
          {{ scope.row.message }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script type="text/ecmascript-6">

import { parseTime } from '@/utils/index'
export default {
  components: {

  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        success: 'success',
        false: 'danger'
      }
      return statusMap[status]
    }
  },
  props: {
    list: {
      type: Array,
      required: true
    },
    listLoading: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
    }
  },
  methods: {
    showDate(unixTime) {
      return parseTime(new Date(unixTime))
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
