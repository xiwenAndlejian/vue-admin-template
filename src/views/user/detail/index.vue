<template>
  <div class="app-container">
    <div>
      <el-row :gutter="20" type="flex">
        <el-col :span="6"><avatar></avatar></el-col>
        <el-col><detail-form></detail-form></el-col>
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
  width: 25%;
  float: left;
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-color: #3c8dbc;
    border-top: 3px solid;
    border-radius: 3px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
  }
}
.bg-blue {
  background-color: #409eff;
}
.user-detail {
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 2em;
    border-top-right-radius: 2em;
    // background-color: #409EFF
  }
  .main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
