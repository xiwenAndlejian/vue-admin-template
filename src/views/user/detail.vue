<template>
  <div class="app-container">
    {{ userInfo }}
    <div>
      <el-form ref="form" :model="userInfo" label-width="80px">
        <div class="avatar">
          <el-form-item label="头像" >
            <el-upload
              :show-file-list="false"
              :before-upload="beforeAvatarUpload"
              :on-success="avatarUploadSuccess"
              :http-request="avatarUpload"
              action="string"
              class="avatar-uploader">
              <img v-if="userInfo.avatar" :src="`//www.dekuofa.com/myfile/${userInfo.avatar}`" class="img"><img>
            </el-upload>
          </el-form-item>
        </div>
        <div class="main-info">
          <el-form-item label="昵称" label-width="120px">
            <el-input v-model="userInfo.nickName" class="nick-name" placeholder="用户昵称"></el-input>
          </el-form-item>
          <el-form-item label="创建时间" label-width="120px">
            {{ showDate(userInfo.createTime) }}
          </el-form-item>
          <el-form-item label="修改时间" label-width="120px">
            {{ showDate(userInfo.modifyTime) }}
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="saveDetail">保存</el-button>
          </el-form-item>
        </div>
        <!-- <el-form-item label="创建时间">
        </el-form-item> -->
        <!-- <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item> -->
      </el-form>
    </div>
  </div>
</template>

<script>
import { getUserDetail, saveUserDetail } from '@/api/user'
import { upload } from '@/api/image'
import { mapGetters } from 'vuex'
import { parseTime } from '@/utils/index'
import { beforeAvatarUpload } from '@/utils/imageUpload'

export default {
  data() {
    return {
      userInfo: {
        nickName: '',
        avatar: '',
        lastLoginIp: '',
        lastLoginTime: null
      }
    }
  },
  computed: {
    ...mapGetters({
      userId: 'id'
    })
  },
  created() {
    this.getUserInfo()
  },
  methods: {
    getUserInfo() {
      getUserDetail(this.userId).then(data => {
        console.log(data.payload)
        this.userInfo = data.payload
      })
    },
    showDate(timestamp) {
      return parseTime(new Date(timestamp))
    },
    beforeAvatarUpload,
    avatarUploadSuccess(response, file) {
      console.log(response)
      console.log(file)
      console.log(this.userInfo)
      debugger
      this.userInfo.avatar = URL.createObjectURL(file.raw)
      console.log(this.userInfo)
    },
    avatarUpload(item) {
      if (!beforeAvatarUpload(item.file)) {
        return
      }
      const data = new FormData()
      const param = {}
      data.append('file', item.file)
      param.file_name = 'avatar'
      upload(param, data).then(res => {
        this.userInfo.avatar = `${res.payload.url}`
      })
        .catch(error => {
          console.error(error)
        })
    },
    saveDetail() {
      saveUserDetail(this.userId, this.userInfo)
        .then(data => {
          this.$message({
            type: 'success',
            message: '修改用户信息成功'
          })
          // 同步用户头像
          this.$store.commit('SET_AVATAR', this.userInfo.avatar)
        })
        .catch(error => {
          this.$message({
            type: 'error',
            message: `修改用户信息失败:${error.msg}`
          })
          console.error('更新失败')
        })
    }
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
  .avatar-uploader {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 216px;
    height: 216px;
    &:hover {
      border-color: #409EFF;
    }
    .img {
      width: 216px;
      height:216px;
    }
  }
}

</style>
