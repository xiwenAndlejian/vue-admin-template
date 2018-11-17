<template>
  <div class="content">
    <h2>您的密码必须包含：</h2>
    <p><svg-icon :class-name="{ success: lengthCheck }" icon-class="check" ></svg-icon>{{ lengthCheck }}至少8个字符</p>
    <p><svg-icon :class-name="{ success: upperAndLowerCheck }" icon-class="check"></svg-icon>大小写字母</p>
    <p><svg-icon :class-name="{ success: numberCheck }" icon-class="check"></svg-icon>至少一个数字</p>
    {{ passwordForm.currentPasswd }}
    {{ passwordForm.newPasswd }}
    {{ passwordForm.checkPasswd }}
  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      passwordForm: 'passwordChangeForm'
    }),
    lengthCheck: function() {
      return this.passwordForm.newPasswd.length >= 8
    },
    upperAndLowerCheck: function() {
      const regExp = new RegExp(/[A-Z]+[a-z]+/)
      return regExp.test(this.passwordForm.newPasswd)
    },
    numberCheck: function() {
      const regExp = new RegExp(/\d+/)
      return regExp.test(this.passwordForm.newPasswd)
    }
  },
  methods: {}
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
svg {
  margin-right: 10px;
}
</style>
