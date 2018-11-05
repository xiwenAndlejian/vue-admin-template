<template>
  <div class="app-container content">
    <el-row :gutter="20">
      <el-col :span="12">
        <password-form></password-form>
      </el-col>
      <el-col :span="12">
        <condition></condition>
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

    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import '@/styles/common.scss';
</style>
