/**
 * Created by Sing <78276478@qq.com> on 2017/11/1 0001.
 */
import Lib from 'assets/js/Lib'

let obj = {}
var urlData = {
}
obj.post = function (url, $param = {}, callback, vm) {
  console.log(urlData[url])
  if (callback) {
    vm.$vux.loading.show({
      text: 'Loading'
    })
    if (urlData[url]) {
      Lib.M.ajax({url: urlData[url], data: $param}).then(function (data) {
        if (data.Error === 0) {
          callback(data)
        } else {
          vm.$vux.alert.show(data.Msg)
          if (vm.Error_callback) {
            vm.Error_callback(url, data)
          }
        }
        vm.$vux.loading.hide()
      })
    } else {
      Lib.M.ajax({url: url, data: $param}).then(function (data) {
        if (data.Error === 0) {
          callback(data)
        } else {
          vm.$vux.alert.show(data.Msg)
          if (vm.Error_callback) {
            vm.Error_callback(url, data)
          }
        }
        vm.$vux.loading.hide()
      })
    }
  } else {
    return Lib.M.ajax({url: url, data: $param})
  }
}
obj.get_url_argument = function (name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  var r = decodeURI(window.location.search).substr(1).match(reg)
  if (r != null) return unescape(r[2])
  return null
}
export default obj
