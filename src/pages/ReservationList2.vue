<template>
  <div class="container">
    <v-header title='我的预约信息'></v-header>
    <div class="container-body">
      <ul>
        <li v-for="item in items" :key="item.id" class="list-item">
          <div class="content">
            <div class="content-left">
                <div class="title">{{item.campany}}</div>
                <div class="sub-title">预约时间：{{item.reservationDate}}</div>
            </div>
            <div class="content-right">
              <div class="type">
                <span>{{item.sitType}}</span>
              </div>
              <div class="status" :style="setColer(item.status)">{{item.status}}</div>
            </div>
          </div>
          <div class="action">
             <router-link to="/ReservationDetail">
              <div class="goto">
                <!-- <span class="iconfont">&#xe601;</span> -->
                <img src="../assets/imgs/rightArraw.png"/> 
              </div>
             </router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
    import VHeader from '@/components/test/Header.vue'
    export default {
    data(){
      return{
        items : [{
          id : '1',
          campany : '广州国际金融中心',
          reservationDate : '2020.02.21',
          sitType : '写字楼',
          status : '预约中'
        },
        {
          id : '2',
          campany : '广州国际金融中心',
          reservationDate : '2020.02.21',
          sitType : '写字楼',
          status : '预约中'
        },
        {
          id : '3',
          campany : '广州国际金融中心',
          reservationDate : '2020.02.21',
          sitType : '写字楼',
          status : '预约完成'
        },
        {
          id : '4',
          campany : '广州国际金融中心',
          reservationDate : '2020.02.21',
          sitType : '写字楼',
          status : '预约中'
        },
        {
          id : '5',
          campany : '广州国际金融中心',
          reservationDate : '2020.02.21',
          sitType : '写字楼',
          status : '预约完成'
        },
        {
          id : '6',
          campany : '广州国际金融中心',
          reservationDate : '2020.02.21',
          sitType : '写字楼',
          status : '已到访'
        }],
      }
    },
    components:{
      VHeader
    },
    methods:{
      setColer(status){
        let colorValue = '';
        switch (status) {
          case '预约中': 
           colorValue = '#F39241';
           break;
          case '预约完成':
           colorValue = '#A782F4';
           break;
          case '已到访':
           colorValue = '#999999';
           break;
        }
        return {color : colorValue}
      }
    },
    created(){
     // this.getInfo()
    }
  }
</script>

<style scoped>
  .container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
  }
  .container-body {
    flex: 1;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  .container-body .ul {
    overflow: auto;
  }
  .container-body > ul li {
    display: flex;
    align-items: center;
    height: 1.62rem;
    padding-left: 0.36rem;
    padding-right: 0.36rem;
    border-bottom: 1px solid #EEEEEE;
  }
  .content-left,.content-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .content-left .title {
    font-size: 0.32rem;
    font-weight: 600;
    line-height: 0.45rem;
  }
  .content-left .sub-title {
    margin-top: 0.2rem;
    color: #999999;
    font-size: 0.28rem;
    line-height: 0.4rem;
  }
  .list-item .action {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 0.58rem;
  }
  .list-item .content {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
  } 
  .list-item .content-left {
    flex-flow: 1;
  }
  .list-item .content-right {
    align-items: flex-end;
    width: 1.2rem;
  }
  .content-right .type {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 0.86rem;
    height: 0.4rem;
    font-size: 0.24rem;
    border-radius: 0.04rem;
    border: 1px solid rgba(151, 151, 151, 1);
  }
  .content-right .status {
    font-size: 0.28rem;
    line-height: 0.4rem;
    color: rgba(243, 146, 65, 1);
  }
  .goto img {
    width: 0.29rem;
    height: 0.29rem;
    object-fit: contain;  /* 让图片保持比例图片*/
  }
  /* .content-right .type {} */
</style>
