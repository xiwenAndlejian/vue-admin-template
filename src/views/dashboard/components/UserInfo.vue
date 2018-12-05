<template>
  <el-row :gutter="40">
    <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="4">
      <img v-if="avatar" :src="`//www.dekuofa.com/myfile/${avatar}`" class="avatar">
      <img>
    </el-col>
    <el-col :xs="24" :sm="24" :md="24" :lg="18" :xl="20">
      <el-row>
        <h1 class="nick-name">{{ name }}</h1>
      </el-row>
      <el-row :gutter="40">
        <el-col :span="6">
          <div>{{ roles }}</div>
        </el-col>
        <el-col :span="18">
          <div>{{ id }}</div>
        </el-col>
      </el-row>
    </el-col>
    <!-- <div class="dashboard-text">id:{{ id }}</div> -->
    <!-- <div class="dashboard-text">roles:<span v-for="role in roles" :key="role">{{ role }} </span></div> -->
  </el-row>
</template>

<script type="text/ecmascript-6">
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'UserInfo',
  components: {},
  data() {
    return {}
  },
  computed: {
    ...mapState({
      avatar: state => state.user.avatar
    }),
    ...mapGetters(['id', 'name', 'roles'])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.avatar {
  width: 216px;
  height: 216px;
  border-radius: 108px;
  overflow: hidden;
}
.nick-name {
  font-size: 40px;
}
</style>
