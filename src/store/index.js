import {createStore} from 'vuex'
const defaultValue={
    count:1,
    todos:[{
        id:1,
        text:"geyao",
        done:false
    }]
}

export default createStore({
    state(){
        return defaultValue
    },
    mutations:{
        increment(state,payload={amount:1}){
           return (state.count=state.count+payload.amount)
        }
    },
    actions:{
        increment({commit},payload){
            commit('increment',payload)
        }
    },
    getters:{
        double:(state)=>state.count*2,
        getTodoById:state=>id=>state.todos.find((todo)=>todo.id===id)
    }
})