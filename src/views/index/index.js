import Vue from 'vue'
import app from './index.vue'

window.popNotice = function (title, body) {
  var notification = new Notification(title + ':', {
    body: body
  })
  notification.onclick = function () {
    notification.close()
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

