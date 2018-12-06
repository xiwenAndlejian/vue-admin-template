<template>
  <div class="page">
    <el-dialog :visible.sync="visible" title="新增用户">
      <el-form ref="userForm" :model="userForm" :rules="userAddRules" status-icon>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="userForm.username" placeholder="用于登陆系统的账号"></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="nickName">
          <el-input v-model="userForm.nickName" placeholder="用户在系统中的昵称"></el-input>
        </el-form-item>
        <el-form-item label="角色" prop="roles">
          <el-checkbox-group v-model="userForm.roles">
            <el-checkbox label="admin">管理员</el-checkbox>
            <el-checkbox label="worker">工作人员</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('userForm')">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
import { uniqueUsername, addUser } from '@/api/user'
export default {
  name: 'AddUserForm',
  components: {},
  data() {
    var cheackUsername = (rule, name, callback) => {
      if (name.length < 4 || name.length > 16) {
        return callback(new Error('用户名长度：4 ~ 16'))
      }
      setTimeout(() => {
        this.cheackUnique(name).then(resp => {
          if (!(resp.payload === null)) {
            return callback(new Error(`用户名：'${name}' 重复，请重新选择`))
          }
          return callback()
        })
      }, 1000)
    }
    return {
      visible: false,
      userForm: {
        username: '',
        nickName: '',
        roles: []
      },
      roleList: [],
      userAddRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { validator: cheackUsername, trigger: 'blur' }
        ],
        nickName: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
          { min: 2, max: 16, message: '昵称长度：2 ~ 16', trigger: 'blur' }
        ],
        roles: [
          { type: 'array', required: true, message: '请选择至少一个用户角色', trigger: 'change' }
        ]
      }
    }
  },
  created() {
    // 注册事件
    this.$bus.$on('add-user-form-toggle', this.switchVisible)
  },
  methods: {
    switchVisible() {
      this.visible = !this.visible
    },
    cheackUnique(username) {
      const params = {
        username: username
      }
      return uniqueUsername(params)
    },
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          addUser(this.userForm)
            .then(resp => {
              this.$message({
                type: 'success',
                message: '创建用户成功'
              })
                .catch(error => {
                  console.error(error)
                })
            })
        } else {
          this.$message({
            type: 'error',
            message: '提交失败，请检查表单内容'
          })
          return false
        }
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
