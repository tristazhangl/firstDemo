<template>
  <div class="container">
    <v-header title='我的预约信息'></v-header>
    <div class="container-body">
        <template v-for="item in items" class="list-item">
            <v-reservation-list-item :itemInfo="item" :key="item.id" v-on:press='pressInfoItem(item.id)'></v-reservation-list-item>
        </template>
    </div>
  </div>
</template>
<script>
  import VHeader from '@/components/test/Header.vue'
  import VReservationListItem from '@/components/test/ReservationListItem'
  import {mapState,mapGetters,mapMutations} from 'vuex'

  export default {
    data(){
      return{
      }
    },
    computed : {
      ...mapGetters('reservationList',{
        items : 'getItems'
      })
    },
    components:{
      VHeader,
      VReservationListItem
    },
    methods:{
      ...mapMutations('reservationList',['setItems']),
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
      let items =  [
        {
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
        }
      ];
      this.setItems(items);
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
