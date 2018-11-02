<template>
  <div class="app-container">
    <div>
      <el-row :gutter="20" type="flex">
        <el-col :span="6" class="avatar"><avatar></avatar></el-col>
        <el-col :span="20" class="user-detail">
          <detail-form></detail-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
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
.main-info {
  width: 70%;
  float: left;
  .nick-name {
    width: 250px;
  }
}
.avatar {
  padding: 16px 16px 0px;
  margin-bottom: 32px;
}
.bg-blue {
  background-color: #409eff;
}
.user-detail {
  background-color: #fff;
  padding: 16px 16px 0px;
  margin-bottom: 32px;
}
</style>
