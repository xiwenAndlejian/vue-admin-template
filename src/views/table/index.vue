<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row>
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column label="头像" width="60" align="center">
        <template slot-scope="scope">
          <img :src="scope.row.avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
        </template>
      </el-table-column>
      <el-table-column label="昵称" width="150" align="center">
        <template slot-scope="scope">
          {{ scope.row.nickName }}
        </template>
      </el-table-column>
      <el-table-column label="最后一次登陆时间" width="200" align="center">
        <template slot-scope="scope">
          <span>{{ showDate(scope.row.lastLoginTime) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="最后一次登陆ip" width="150" align="center">
        <template slot-scope="scope">
          {{ scope.row.lastLoginIp }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="描述" width="200">
        <template slot-scope="scope">
          {{ scope.row.desc }}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="操作" width="200">
        <template slot-scope="scope">
          <!-- TODO 增加操作选项 -->
          <i class="el-icon-time"></i>
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/table'
import { parseTime } from '@/utils/index'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        NORMAL: 'success',
        draft: 'gray',
        INIT: 'gray',
        deleted: 'danger',
        DELETED: 'danger'
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
      getList(this.listQuery).then(response => {
        console.log(response)
        this.list = response.payload.rows
        this.listLoading = false
      })
        .catch(err => {
          console.error(err)
        })
    },
    showDate(unixTime) {
      return parseTime(new Date(unixTime))
    }
  }
}
</script>

<style>
.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 10px;
}
</style>

