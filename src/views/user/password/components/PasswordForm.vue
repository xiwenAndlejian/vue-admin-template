<template>
  <div class="content">
    <div class="form-header"><h1 >修改你的密码</h1></div>
    <div>
      <el-form ref="passwordForm" :rules="rule" :model="passwordForm" class="" label-width="80px" label-position="top">
        <el-form-item prop="currentPasswd" label="当前密码" label-width="120px">
          <el-input v-model="passwordForm.currentPasswd" type="password" ></el-input>
        </el-form-item>
        <el-form-item prop="newPasswd" label="新密码" label-width="120px">
          <el-input v-model="passwordForm.newPasswd" type="password"></el-input>
        </el-form-item>
        <el-form-item prop="checkPasswd" label="确认密码" label-width="120px">
          <el-input v-model="passwordForm.checkPasswd" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <div class="form-button-list">
            <el-button class="save-button" type="primary" @click="submitForm('passwordForm')">保存</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { changePassword } from '@/api/user'
import { mapGetters } from 'vuex'

export default {
  data() {
    // todo 实现新密码条件校验
    var validatePasswd = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入新密码'))
      }
      if (this.passwordForm.checkPasswd !== '') {
        // 选择校验 确认密码字段
        this.$refs.passwordForm.validateField('checkPasswd')
      }

      callback()
    }
    var validateCheckPasswd = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入确认密码'))
      }
      if (value !== this.passwordForm.newPasswd) {
        callback(new Error('请输入相同密码'))
      }
      callback()
    }
    return {
      rule: {
        currentPasswd: [
          {
            type: 'string',
            required: true,
            message: '请输入当前密码',
            trigger: 'blur'
          }
        ],
        newPasswd: [
          { validator: validatePasswd, required: true, trigger: 'blur' }
        ],
        checkPasswd: [{ validator: validateCheckPasswd, required: true }]
      }
    }
  },
  computed: {
    ...mapGetters({
      userId: 'id',
      passwordForm: 'passwordChangeForm'
    })
  },
  methods: {
    onSubmit() {
      var data = {
        oldPasswd: this.passwordForm.currentPasswd,
        newPasswd: this.passwordForm.newPasswd
      }
      changePassword(this.userId, data).catch()
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 测试版不提交表单
          this.$message('测试版暂不支持修改密码')
          // this.onSubmit()
        }
        return false
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.content {
  background-color: white;
  // background-color: #fff;
  padding: 20px;
}
</style>
