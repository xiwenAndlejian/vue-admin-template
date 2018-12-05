<template>
  <div style="background-color: white; padding: 10px">
    <el-form ref="form" :model="userDetail" class="user-detail-form" label-width="80px" label-position="top">
      <div class="form-header"><h1 >编辑你的用户信息</h1></div>
      <div class="main">
        <el-form-item label="性别" label-width="120px">
          <el-select v-model="userDetail.gender" placeholder="请选择">
            <el-option
              v-for="gender in genders"
              :key="gender.value"
              :label="gender.label"
              :value="gender.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="真实姓名">
          <el-input v-model="userDetail.realName" class="nick-name" placeholder="真实姓名"></el-input>
        </el-form-item>
        <!-- todo 日期选择 -->
        <el-form-item label="生日">
          <el-input v-model="userDetail.birthday" class="nick-name" placeholder="生日"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="userDetail.mobile" class="nick-name" placeholder="手机号"></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱">
          <el-input v-model="userDetail.email" class="nick-name" placeholder="电子邮箱"></el-input>
        </el-form-item>
        <el-form-item>
          <div class="form-button-list">
            <el-button class="save-button" type="primary" @click="saveDetail">保存</el-button>
          </div>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
import { getUserDetail, saveUserDetail } from '@/api/user'
import { mapGetters } from 'vuex'

export default {
  components: {},
  data() {
    return {
      userDetail: {
        gender: '',
        realName: '',
        birthday: '',
        mobile: '',
        email: ''
      },
      genders: [
        {
          label: '未设置',
          value: 'NULL'
        },
        {
          label: '男',
          value: 'MALE'
        },
        {
          label: '女',
          value: 'FEMALE'
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      userId: 'id'
    })
  },
  created() {
    this.getDetail()
  },
  methods: {
    getDetail() {
      getUserDetail().then(data => {
        this.userDetail = data.payload
      })
    },
    saveDetail() {
      const data = {
        realName: this.userDetail.realName,
        birthday: this.userDetail.birthday,
        mobile: this.userDetail.mobile,
        email: this.userDetail.email
      }
      saveUserDetail(data)
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
.app {
  color: azure;
}
.user-detail-form {
  padding: 0px 20px 0px;
}
</style>
