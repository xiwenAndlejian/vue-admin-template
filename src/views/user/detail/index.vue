<template>
  <div class="app-container content">
    <el-row :gutter="40">
      <el-col :span="4" class="avatar">
        <avatar></avatar>
      </el-col>
      <el-col :span="20" class="user-detail">
        <detail-form></detail-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
// 1529 - 80 -245 - 1224
import Avatar from './components/Avatar'
import DetailForm from './components/DetailForm'

export default {
  components: {
    Avatar,
    DetailForm
  },
  data() {
    return {
    }
  },
  computed: {

  },
  methods: {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.avatar {
  padding: 20px 20px 0px;
  margin-bottom: 40px;
}
.bg-blue {
  background-color: #409eff;
}
.user-detail {
  padding: 20px 20px 0px;
  margin-bottom: 40px;
}
.content {
  padding: 40px;
}
</style>
