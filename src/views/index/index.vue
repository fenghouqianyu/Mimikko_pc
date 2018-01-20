<style lang="less">
  @import './../../assets/css/reset_move.css';
  @import './../../assets/css/font-awesome.min.css';
  @import './index.less';
</style>
<template>
  <div class="fixed_container">
    <div class="header">
      <span class="r fa fa-close" @click="quite"></span>
      <span class="l fa fa-minus"></span> Mimikko 桌宠
    </div>
    <div class="main">
      <div class="talk"><span class="ovh_2">很多很多文字，很多很多文字，很多很多文字，很多很多文字，很多很多文字，很多很多文字，很多很多文字，很多很多文字，很多很多文字，很多很多文字，很多很多文字，很多很多文字，很多很多文字，很多很多文字</span>
      </div>
      <img src="./../../assets/images/comic_chara.png" class="main_bg">
    </div>
    <div class="footer">
      <dl>
        <dt>
          <input type="text">
        </dt>
        <dd>
          <button :disabled="button" @click="btn">发送</button>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        button: false
      }
    },
    methods: {
      btn () {
        console.log(1)
      },
      quite () {
        window.appQuite()
      }
    },
    // 加载数据
    mounted () {
      var _this_ = this
      var dataObj = {
        '16-33': '已经16点33了哦',
        '16-31': '已经16点31了哦',
        '16-32': '已经16点32了哦'
      }
      console.log(_this_)

      function getBody () {
        var now = new Date()
        var nowTime = '' + now.getHours() + '-' + now.getMinutes()
        console.log(nowTime)
        if (dataObj[nowTime]) {
          window.popNotice('title', dataObj[nowTime])
        }
      }

      getBody()
      setInterval(function () {
        getBody()
      }, 1000 * 60)
    },
    created () {
    },
    watch: {}
  }
</script>
