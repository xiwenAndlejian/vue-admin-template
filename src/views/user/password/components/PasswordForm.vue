<template>
  <div class="content">
    <div class="form-header"><h1 >修改你的密码</h1></div>
    <div>
      <el-form ref="form" class="" label-width="80px" label-position="top">
        <el-form-item label="当前密码" label-width="120px">
          <el-input v-model="password.currentPasswd"></el-input>
        </el-form-item>
        <el-form-item label="新密码" label-width="120px">
          <el-input v-model="password.newPasswd"></el-input>
        </el-form-item>
        <el-form-item label="重复新密码" label-width="120px">
          <el-input v-model="password.repeatPasswd"></el-input>
        </el-form-item>
        <el-form-item>
          <div ></div>
        </el-form-item>
        <el-form-item>
          <div class="form-button-list">
            <el-button class="save-button" type="primary" >保存</el-button>
          </div>
        </el-form-item>
      </el-form>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  components: {
  },
  data() {
    return {
      password: {
        currentPasswd: '当前密码',
        newPasswd: '新密码',
        repeatPasswd: '重复密码'
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import '@/styles/common.scss';
.content {
  background-color: white;
  // background-color: #fff;
  padding: 20px;
}
</style>
