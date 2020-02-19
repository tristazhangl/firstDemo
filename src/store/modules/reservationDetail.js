
const state = {
    reserveInfo :{}
}

const getters = {
    getReserveInfo(state){
        return state.reserveInfo;
    }
}

const mutations = {
    setReserveInfo(state,reserveInfo) {
        // console.log('before->',state.reserveInfo);
        state.reserveInfo = reserveInfo;
        // console.log('after->',state.reserveInfo);
    }
}

const actions = {

}

export default  {
    namespaced : true,
    state,
    getters,
    mutations,
}