<template>
  <div class="app-container content">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <password-form :password-form="passwordForm"></password-form>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <condition :password-form="passwordForm"></condition>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
import PasswordForm from './components/PasswordForm'
import Condition from './components/Condition'

export default {
  components: {
    PasswordForm,
    Condition
  },
  data() {
    return {
      passwordForm: {
        currentPasswd: '',
        newPasswd: '',
        checkPasswd: ''
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import '@/styles/common.scss';
</style>
