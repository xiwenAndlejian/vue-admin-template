const image = ['image/jpeg', 'image/png']
export function beforeAvatarUpload(file) {
  const isJPG = image.find(value => {
    return value === file.type
  }) !== undefined
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isJPG) {
    this.$message.error('上传头像图片只能是 JPG/PNG 格式!')
  }
  if (!isLt2M) {
    this.$message.error('上传头像图片大小不能超过 2MB!')
  }
  return isJPG && isLt2M
}

export function avatarUploadSuccess(response, file, fileList) {
  console.log(response)
  console.log(file)
  debugger
  this.userInfo.avatar = URL.createObjectURL(file.raw)
}

export function avatarUpload() {
  console.log(1)
}
