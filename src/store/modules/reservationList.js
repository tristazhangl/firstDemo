const state = {
    items : []
}

const getters = {
    getItems : state => {
        return state.items;
    }
}

const mutations = {
    setItems(state,items){
        state.items = items;
    }
}

const actions = {
    
}

export default {
    namespaced : true,
    state,
    getters,
    mutations
}