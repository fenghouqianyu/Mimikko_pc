/**
 * Created by Sing <78276478@qq.com> on 2017/11/25 0025.
 */

import Lib from 'assets/js/Lib'
import env from '../assets/config/env'

const url = {
  find: 'weixinjsbridge/index/' + window.__sichem.Mid
}
if (env === 'development') {
  for (var i in url) {
    url[i] = 'http://api.junne-international.com/open/' + url[i]
  }
} else {
  for (var j in url) {
    url[j] = 'http://api.junne-international.com/open/' + url[j]
  }
}
var obj = {}
obj.get = function (URI) {
  URI = URI.split('#')[0]
  return Lib.M.ajax({
    'url': url.find,
    'data': {
      url: URI
    }
  })
}
obj.set = function (vm, data = {
  title: '',
  url: '',
  desc: '',
  img: ''
}) {
  vm.$wechat.ready(function () {
    vm.$wechat.onMenuShareTimeline({
      title: data.title, // 分享标题
      link: data.url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: data.imgUrl, // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    })
    vm.$wechat.onMenuShareAppMessage({
      title: data.title, // 分享标题
      link: data.url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      desc: data.desc,
      imgUrl: data.imgUrl, // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    })
  })
}

export default obj
