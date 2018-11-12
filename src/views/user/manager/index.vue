<template>
  <div class="app-container">
    <user-list></user-list>
  </div>
</template>

<script type="text/ecmascript-6">
import UserList from './UserList.vue'

export default {
  name: 'Index',
  components: {
    UserList
  },
  data() {
    return {}
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
