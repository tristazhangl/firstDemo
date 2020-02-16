<template>
    <div>
        <div class="header">
          <div class="header-left">
            <!-- <i class="arrow-left"></i>
            <span class="back">返回</span> -->
            <div class="back" @click="go">
              <!-- <span class="iconfont">&#xe601;</span> -->
              <img src="../../assets/imgs/leftArraw.png"/><span>返回</span> 
            </div>
          </div>
          <span class="title">{{title}}</span> 
          <div class="header-right">
            <span class="iconfont more">&#xe600;</span>
          </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
    data(){
      return{
      }
    },
    props :{
      title:String
    },
    components:{
    },
    methods:{
      go(){
        this.$router.go(-1);//返回上一页
      }
    },
    created(){
    },
    mounted(){
    }
  }
</script>

<style scoped>
  /* @import '/static/fonts/iconfont.css'; */
  .header {
    /* position: fixed; */
    height: 0.95rem;
    width: 100%;
    line-height: 0.95rem;
    color: rgba(51, 51, 51, 1);
    padding-left: 0.28rem;
    padding-right: 0.28rem;
    text-align: center;
    color: #333333;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.04)
  }
  .header-left {
    position: absolute;
  }
  /*左箭头：利用css伪类:after与矩阵*/
  /*.arrow-left {
    position: relative;
  }
  .back {
    margin-left: 30px;
  }
  .arrow-left:after {
      content: "";
      position: absolute;
      margin: 20px;
      border-right: 1px solid #757575;
      border-bottom: 1px solid #757575;
      width: 10px;
      height: 10px;
      transform: matrix(-0.71,-0.71, -0.71, 0.71, 0, 0)
  }*/
  .header-right {
    position: absolute;
    right: 0;
    top: 0;
    margin-right: 0.28rem;
  }
  .back {
    font-size: 0.28rem;
  }
  .back img {
    width: 0.22rem;
    height: 0.38rem;
    margin-right: 0.12rem;
    vertical-align: middle;
  }
  .back span {
    vertical-align: middle;
  }
  .title {
    font-size: 0.32rem;
  }
  .iconfont.more {
    font-size: 0.52rem;
    color: #666666;
  }
</style>
