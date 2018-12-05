<template>
  <div>
    <el-button type="primary" @click="toggleDiaLog()"><svg-icon icon-class="add-user"></svg-icon> 增加用户</el-button>
    <add-user-form :visible="userFormVisible"></add-user-form>
  </div>
</template>

<script type="text/ecmascript-6">
import AddUserForm from './AddUserForm.vue'

export default {
  name: 'ManagerBar',
  components: {
    AddUserForm
  },
  data() {
    return {
      userFormVisible: false
    }
  },

  methods: {
    toggleDiaLog() {
      this.$bus.$emit('add-user-form-toggle')
      // console.log(this.$bus)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
