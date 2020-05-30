import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new  Vuex.Store({
    state: {
        cart: [],
        parts: null,
    },
   
    mutations: {
        addRobotToCart(state, robot) {
            state.cart.push(robot);
        },
        upadteParts(state, parts) {
            state.parts = parts;
        },
    },
     getters: {
         cartSaleItems(state) {
            return state.cart.filter(item => item.head.onSale)
        }
    },
    actions: {
        getParts({commit }) {
            axios({
                url: '/api/parts',
                method: 'get'
            }).then(result => commit('upadteParts', result.data)) 
            .catch(err => console.error(err))
        }
    },
});