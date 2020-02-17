<template>
  <div class="container">
    <header-c title='我的预约信息'></header-c>
    <div class="container-body">
        <template v-for="item in items" class="list-item">
            <reservation-list-item :itemInfo="item" :key="item.id" v-on:press='pressInfoItem(item.id)'></reservation-list-item>
        </template>
    </div>
  </div>
</template>
<script>
    import HeaderC from '@/components/test/Header.vue'
    import ReservationListItem from '@/components/test/ReservationListItem'

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
      HeaderC,
      ReservationListItem
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
      },
      pressInfoItem(id) {
          console.log('press the item which id is '+id);
          this.$router.push({ name: 'ReservationDetail', params: { itemId: id }})
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
</style>
