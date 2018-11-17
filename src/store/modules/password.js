// 定义状态（实际使用的数据）
const state = {
  currentPasswd: '',
  newPasswd: '',
  checkPasswd: ''
}

// 状态的衍生属性（计算属性）
const getters = {
  // todo 密码强度计算
  passwdStrength() {
    return 1
  }
}

// 改变状态的唯一方法
const mutations = {
  SET_CURRENT_PASSWD: (state, currentPasswd) => {
    state.currentPasswd = currentPasswd
  },

  SET_NEW_PASSWD: (state, newPasswd) => {
    state.newPasswd = newPasswd
  },

  SET_CHECK_PASSWD: (state, checkPasswd) => {
    state.checkPasswd = checkPasswd
  }
}

// 提交 mutations ，可间接修改状态
const actions = {
  setCurrentPasswd: ({
    commit
  }, currentPasswd) => {
    commit('SET_CURRENT_PASSWD', currentPasswd)
  },
  setNewPasswd: ({
    commit
  }, newPasswd) => {
    commit('SET_NEW_PASSWD', newPasswd)
  },
  setCheckPasswd: ({
    commit
  },
  checkPasswd
  ) => {
    commit('SET_CHECK_PASSWD', checkPasswd)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
