<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row>
      <el-table-column align="center" label="ID" width="95">
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
      <el-table-column label="额外信息" width="450" align="center">
        <template slot-scope="scope">
          {{ scope.row.message }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getLogList } from '@/api/log'
import { parseTime } from '@/utils/index'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        success: 'success',
        false: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getLogList().then(data => {
        console.log(data)
        this.list = data.payload.rows
        this.listLoading = false
      })
    },
    showDate(unixTime) {
      return parseTime(new Date(unixTime))
    }
  }
}
</script>

<style>
</style>
