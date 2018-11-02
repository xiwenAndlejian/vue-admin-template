<template>
  <el-upload
    :show-file-list="false"
    :before-upload="beforeAvatarUpload"
    :on-success="avatarUploadSuccess"
    :http-request="avatarUpload"
    action="string"
    class="avatar-uploader">
    <img v-if="avatar" :src="`//www.dekuofa.com/myfile/${avatar}`" class="img"><img>
  </el-upload>
</template>

<script type="text/ecmascript-6">
import { mapState, mapGetters } from 'vuex'
import { beforeAvatarUpload } from '@/utils/imageUpload'
import { upload } from '@/api/image'
import { changeAvatar } from '@/api/user'

export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      avatar: state => state.user.avatar
    }),
    ...mapGetters({
      userId: 'id'
    })
  },
  methods: {
    beforeAvatarUpload,
    avatarUploadSuccess(response) {
      const avatar = response.payload.url
      changeAvatar(this.userId, { avatarPath: avatar })
        .then(response => {
          this.$store.commit('SET_AVATAR', avatar)
          this.$message({
            type: 'success',
            message: '修改用户头像成功'
          })
        })
        .catch(error => {
          console.error(error)
        })
    },
    avatarUpload(item) {
      if (!beforeAvatarUpload(item.file)) {
        return
      }
      const data = new FormData()
      const param = {}
      data.append('file', item.file)
      param.file_name = 'avatar'
      upload(param, data).then(response => {
        this.avatarUploadSuccess(response)
        // this.userInfo.avatar = `${res.payload.url}`
      })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.avatar-uploader {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 216px;
  height: 216px;
  &:hover {
    border-color: #409eff;
  }
  .img {
    width: 216px;
    height: 216px;
  }
}
</style>
