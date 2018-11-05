<template>
  <div class="content">
    <h2>您的密码必须包含：</h2>
    <p><i class="el-icon-success"></i>至少8个字符</p>
    <p><i class="el-icon-success"></i>大小写数字</p>
    <p><i class="el-icon-success"></i>至少一个数字</p>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  components: {

  },
  data() {
    return {

    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.content {
  border-left: 1px solid #efefef;
  padding: 20px;
  background-color: #fff;
}
.normal {
  color: black;
}
.success {
  color: #67c23a;
}
</style>
