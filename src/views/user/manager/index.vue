<template>
  <div class="app-container">
    <manager-bar class="manager-bar"></manager-bar>
    <user-list></user-list>
  </div>
</template>

<script type="text/ecmascript-6">
import UserList from './UserList.vue'
import ManagerBar from './ManagerBar.vue'

export default {
  name: 'Index',
  components: {
    UserList,
    ManagerBar
  },
  data() {
    return {}
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.manager-bar {
  padding-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>
