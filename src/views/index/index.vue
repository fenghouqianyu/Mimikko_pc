<style lang="less">
  @import './../../assets/css/reset_move.css';
  @import './../../assets/css/font-awesome.min.css';
  @import './index.less';
</style>
<template>
  <div class="fixed_container">
    <div class="header">
      <span class="r fa fa-close"></span>
      <span class="l fa fa-minus"></span> Mimikko 桌宠
    </div>
    <div class="main">
      <div class="talk"><span class="ovh_2">很多很多文字，很多很多文字，很多很多文字，很多很多文字，很多很多文字，很多很多文字，很多很多文字，很多很多文字，很多很多文字，很多很多文字，很多很多文字，很多很多文字，很多很多文字，很多很多文字</span></div>
      <img src="./../../assets/images/comic_chara.png" class="main_bg">
    </div>
    <div class="footer">
      <dl>
        <dt>
          <input type="text">
        </dt>
        <dd>
          <button>发送</button>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
    },
    // 加载数据
    mounted () {
      var _this_ = this
      console.log(_this_)
    },
    created () {
    },
    watch: {}
  }
</script>
