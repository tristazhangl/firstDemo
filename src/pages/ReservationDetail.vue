<template>
  <div class="container">
    <v-header title='我的预约信息'></v-header>
    <div class="container-body">
      <div>
          <div class="logo">
            <img src="../assets/imgs/brand.png"/>
          </div>
          <!--预约信息-->
          <div class="info-items">
            <ul>
              <li>
                <div class="info-key">
                  <span>项目</span> 
                </div>
                <span class="info-value">{{reserveInfo.projectName}}</span>
                <div class="info-action">
                  <img src="../assets/imgs/mapSit.png">
                </div>
              </li>
              <li>
                <div class="info-key">
                  <span>公司</span> 
                </div>
                <span class="info-value">{{reserveInfo.companyName}}</span>
              </li>
              <li>
                <div class="info-key">
                  <span>职位</span> 
                </div>
                <span class="info-value">{{reserveInfo.title}}</span>
              </li>
              <li>
                <div class="info-key">
                  <span>姓名</span> 
                </div>
                <span class="info-value">{{reserveInfo.name}}</span>
              </li>
              <li>
                <div class="info-key">
                  <span>来访目的</span> 
                </div>
                <div>
                  <div class="single-select">
                    <label for="" :class="{ active: reserveInfo.visitedPurpose == '参观' }"></label>
                    <span>参观</span> 
                    <label for="" :class="{ active: reserveInfo.visitedPurpose == '租赁' }"></label>
                    <span>租赁</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="info-key">
                  <span>主要意向</span> 
                </div>
                <span class="info-value">{{reserveInfo.mainWant}}</span>
              </li>
              <li>
                <div class="info-key">
                  <span>需求面积</span> 
                </div>
                <div>
                  <div class="number-between">
                    <span class="number-wrap">{{reserveInfo.remindArea.width}}</span> - <span class="number-wrap">{{reserveInfo.remindArea.height}}</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="info-key">
                  <span>预约日期</span> 
                </div>
                <div class="date-text">
                  <span class="date">{{reserveDate}}</span>
                  <span class="time">{{reserveTime}}</span>
                </div>
                <div class="info-action goto">
                  <img src="../assets/imgs/rightArraw.png" alt=""/>
                </div>
              </li>
              <li>
                <div class="info-key">
                  <span>手机</span> 
                </div>
                <span class="info-value">{{reserveInfo.phone}}</span>
              </li>
            </ul>
          </div>
          <!--接待人信息-->
          <div class="receiver-info"></div>
      </div>
      <div class="deviding-line"></div>
      <div class="receiver-info">
        <div class="receive-header">
          <div class="receive-icon-wrap">
              <div class="receive-icon">
                <img src="../assets/imgs/receiver.png" alt=""/>
              </div>
          </div>
          <span class="receive-title">接待人信息</span>
        </div>
        <div class="info-items">
          <ul>
            <li>
              <div class="info-key">
                <span>姓名</span> 
              </div>
              <span class="info-value">{{reserveInfo.reseriverInfo.name}}</span>
            </li>
            <li>
              <div class="info-key">
                <span>手机</span> 
              </div>
              <span class="info-value">{{reserveInfo.reseriverInfo.phone}}</span>
              <div class="phone-logo">
                <img src="../assets/imgs/phone.png">
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import VHeader from '@/components/test/Header.vue'
  export default {
    data(){
      return{
        reserveInfo : {
          projectName : '广州国际金融中心',
          campanyName : '广州星巴克',
          title : '总经理',
          name : '李四',
          visitedPurpose : '参观',
          mainWant : '写字楼',
          remindArea : {
            width : '21',
            height : '33'
          },
          reserveDateTime : 1581842849,  // 时间戳
          phone : '13529892882',
          reseriverInfo : {
            name : '张三',
            phone : '18299837721'
          }
        }
      }
    },
    components:{
      VHeader
    },
    methods:{
    },
    computed : {
      reserveDate : function () {
        let date = new Date(this.reserveInfo.reserveDateTime * 1000);
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        let d = date.getDate();
        return y + '-' + m + '-' + d;
      },
      reserveTime : function () {
        let date = new Date(this.reserveInfo.reserveDateTime * 1000);
        let h = date.getHours()
        let m = date.getMinutes();
        let s = date.getSeconds();
        return  h+':'+m;
      }
    }
  }
</script>

<style scoped>
  .container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    font-family:PingFangSC-Regular,PingFang SC;
    color: rgba(51, 51, 51, 1);
    background: rgba(255, 255, 255, 1);
  }
  .container-body {
    flex: 1;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  .container-body > div {
    padding: 0.28rem;
    padding-bottom: 0;
  }
  .container-body .logo{
    margin: 0 auto;
    line-height: 0;
  }
  .container-body .logo img {
    width: 100%;
    /* height: 2.66rem; */
    object-fit: contain;
    margin-bottom: 0.17rem;
  }
  .info-items li{
    display: flex;
    align-items: center;
    height: 0.94rem;
    font-size: 0.32rem;
    border-bottom: 1px solid rgba(237, 237, 237, 1);
  }
  .info-key{
    display: inline-block;
    width: 1.76rem;
    font-size: 0.32rem;
    line-height: 0.45rem;
  }
  .info-value {
    color:rgba(153,153,153,1);
  }
  .info-items .info-action img{
    width: 0.37rem;
    height: 0.49rem;
  }
  .info-items .info-action {
    margin-left: auto;
    margin-right: 0.19rem;
  }
  .single-select{
    display: flex;
    align-items: center;
    font-size: 0.32rem; 
    line-height: 0.45rem;
  }
  .single-select label{
    display: inline-block;
    margin-left: 0.32rem;
    margin-right: 0.18rem; 
    width:0.3rem;
    height:0.3rem;
    border:3px solid rgba(204,204,204,1);
    border-radius: 50%;
    background:rgba(236,236,236,1);
    box-sizing: content-box;
  }
  .single-select label.active {
    width: 0.16rem;
    height: 0.16rem;
    padding: 0.07rem;
    background-color: rgba(242,146,65,1);
    background-clip: content-box;
    border:3px solid rgba(243,146,65,1);
  }
  .number-between {
    padding-left: .32rem;
  }
  .number-between .number-wrap {
    display: inline-block;
    width: 1.02rem;
    line-height: .46rem;
    text-align: center;
    border: 1px solid rgba(151, 151, 151, 1);
    border-radius: 2px;
  }
  .date-text {
    margin-left: .64rem;
    font-size: .32rem;
    color: rgba(153, 153, 153, 1);
  }
  .date-text .time {
    margin-left: .33rem;
  }
  .info-items .goto img {
    width: 0.29rem;
    height: 0.29rem;
    object-fit: contain;  /* 让图片保持比例图片*/
  }
  .info-items .phone-logo {
    margin-left: auto;
    margin-right: .12rem;
  }
  .info-items .phone-logo img {
    width: 0.7rem;
    height: 0.7rem;
    object-fit: contain;  /* 让图片保持比例图片*/
  }
  .deviding-line {
    height: .12rem;
    background: rgba(237, 237, 237, 1);
  }
  .receive-header {
    padding-bottom: .13rem;
  }
  .receive-icon-wrap {
    position: relative;
  }
  .receiver-info .receive-icon {
    position: absolute;
  }
  .receive-icon img {
    width: .43rem;
    height: .43rem;
  }
  .receiver-info .receive-title {
    margin-left: .63rem;
    line-height: .45rem;
  }
</style>
