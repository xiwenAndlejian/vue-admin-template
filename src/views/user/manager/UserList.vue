<template>
  <div>
    <el-table
      v-loading="isloading"
      :data="userList.rows"
      border
      stripe
      style="width: 100%">
      <el-table-column align="center" label="编号" width="95">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="账号" min-width="120">
        <template slot-scope="scope">
          {{ scope.row.username }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="用户昵称" min-width="120">
        <template slot-scope="scope">
          {{ scope.row.nickName }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="最后一次登陆IP" min-width="120">
        <template slot-scope="scope">
          {{ scope.row.lastLoginIp }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="最后一次登陆时间" min-width="120">
        <template slot-scope="scope">
          {{ scope.row.lastLoginTime | DateFilter }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="状态" min-width="120">
        <template slot-scope="scope">
          {{ scope.row.status | userStatusFilter }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" min-width="120">
        <template slot-scope="scope">
          <el-button
            size="mini">修改状态</el-button>
          <el-button
            size="mini"
            type="danger">删除用户</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script type="text/ecmascript-6">
import { queryUser } from '@/api/userManager'

export default {
  name: 'UserList',
  components: {},
  filters: {
    userStatusFilter: status => {
      var desc = ''
      switch (status) {
        case 'INIT':
          desc = '初始化'
          break
        case 'NORMAL':
          desc = '正常'
          break
        case 'BANED':
          desc = '已禁用'
          break
        case 'DELETED':
          desc = '已删除'
          break
        default:
          desc = ''
          break
      }
      return desc
    }
  },
  data() {
    return {
      userList: {
        rows: []
      },
      isloading: false
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData(params) {
      this.isloading = true
      queryUser(params).then(resp => {
        this.userList = resp.payload
        console.log(this.userList.rows[0])
      })
      this.isloading = false
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
