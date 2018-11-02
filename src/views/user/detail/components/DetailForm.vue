<template>
  <el-form ref="form" :model="userInfo" label-width="80px">
    <div class="main">
      <el-form-item label="昵称" label-width="120px">
        <el-input v-model="userInfo.nickName" class="nick-name" placeholder="用户昵称"></el-input>
      </el-form-item>
      <el-form-item label="创建时间" label-width="120px">
        {{ showDate(userInfo.createTime) }}
      </el-form-item>
      <el-form-item label="修改时间" label-width="120px">
        {{ showDate(userInfo.modifyTime) }}
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="saveDetail">保存</el-button>
      </el-form-item>
    </div>
  </el-form>
</template>

<script type="text/ecmascript-6">
import { parseTime } from '@/utils/index'
import { getUserDetail, saveUserDetail } from '@/api/user'
import { mapGetters } from 'vuex'

export default {
  components: {

  },
  data() {
    return {
      userInfo: {
        nickName: '',
        lastLoginIp: '',
        lastLoginTime: null
      }
    }
  },
  computed: {
    ...mapGetters({
      userId: 'id'
    })
  },
  created() {
    this.getUserInfo()
  },
  methods: {
    showDate(timestamp) {
      return parseTime(new Date(timestamp))
    },
    getUserInfo() {
      getUserDetail(this.userId).then(data => {
        console.log(data.payload)
        this.userInfo = data.payload
      })
    },
    saveDetail() {
      saveUserDetail(this.userId, this.userInfo)
        .then(data => {
          this.$message({
            type: 'success',
            message: '修改用户信息成功'
          })
        })
        .catch(error => {
          this.$message({
            type: 'error',
            message: `修改用户信息失败:${error.msg}`
          })
          console.error('更新失败')
        })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
