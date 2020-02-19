import Vue from 'vue'
import Vuex from 'vuex'
import reservationList from './modules/reservationList'
import reservationDetail from './modules/reservationDetail'

Vue.use(Vuex);

export default new Vuex.Store({
    state : {
        common:{
            allowBack: true // 控制是否允许后退
        },
    },
    getters:{
        // 参数列表state指的是state数据
        // 获取是否可跳转的参数
        getAllowBack(state){
          return state.common.allowBack;
        }
    },
    mutations : {
        updateAppSetting(state, result){
            console.log("updateAppSetting",result);
            state.common.allowBack = result;
        },
    },
    actions : {
        updateAppSetting({commit,state}, array){
            commit("setData", array);
        }
    },
    modules : {
        reservationList,
        reservationDetail
    },
})