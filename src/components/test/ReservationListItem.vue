<template>
    <div class="infoItem" @click="clickItem">
        <div class="content">
            <div class="content-left">
                <div class="title">{{itemInfo.campany}}</div>
                <div class="sub-title">预约时间：{{itemInfo.reservationDate}}</div>
            </div>
            <div class="content-right">
              <div class="type">
                <span>{{itemInfo.sitType}}</span>
              </div>
              <div class="status" :style="setColer(itemInfo.status)">{{itemInfo.status}}</div>
            </div>
        </div>
        <div class="action">
            <div class="goto">
                <img src="../../assets/imgs/rightArraw.png"/> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data : function () {
        return { 
        }
    },
    props : ['itemInfo'],  // 注：props为数组是，数组元素必须是字符串
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
        clickItem() {
            this.$emit('press');
        }
    },
}
</script>

<style scoped>
    .infoItem {
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
    .infoItem .action {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 0.58rem;
    }
    .infoItem .content {
        display: flex;
        justify-content: space-between;
        flex-grow: 1;
    } 
    .infoItem .content-left {
        flex-flow: 1;
    }
    .infoItem .content-right {
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
</style>