/**
 * Created by Sing <78276478@qq.com> on 2017/11/1 0001.
 */
import Lib from 'assets/js/Lib'
import env from '../assets/config/env'

let obj = {}
let urlfle = ''

var url = 'card.card/get'

if (env === 'development') {
  window.__sichem = {
    AppID: 'wxb743423e10b78207',
    Mid: 'KMGNRBOSVC'
  }
  urlfle = 'http://10.255.255.180/' + window.__sichem.Mid + '/' + url
} else {
  urlfle = url
}

obj.list = function ($param = {}) {
  return Lib.M.ajax({
    url: urlfle,
    data: $param
  })
}
export default obj
