import Vue from 'vue'
import app from './index.vue'

console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'production') {
  const ipcRenderer = require('electron').ipcRenderer
  window.appQuite = function () {
    ipcRenderer.send('quite')
  }
  window.appHide = function () {
    ipcRenderer.send('hide')
  }
} else {
  window.appQuite = function () {
    console.log('播放器即将关闭')
    window.close()
  }
  window.appHide = function () {
    console.log('播放器最小化')
  }
}

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  mounted: () => {
  },
  template: '<app/>',
  components: {
    app
  }
})

