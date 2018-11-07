<template>
  <div class="app-container">
    <user-info></user-info>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserInfo from './components/UserInfo'

export default {
  name: 'Dashboard',
  id: Number,
  components: {
    UserInfo
  },
  computed: {
    ...mapGetters([
      'id',
      'name',
      'roles'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
