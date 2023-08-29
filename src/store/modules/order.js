import axios from "axios";
// import Swal from "sweetalert2";

const order = {
    namespaced: true,
    state: {
        token: localStorage.getItem('token') || '',
        user_info: [],
        user_order: [],
    },
    getters: {
    },
    actions: {
        async fetch_userInfo({ commit }) {
            const token = localStorage.token;
            try {
                const response = await axios.get(
                    "https://ecommerce.olipiskandar.com/api/v1/user/info",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
                commit("SET_USERINFO", response.data);
            } catch (error) {
                console.log(error);
                return error;
            }
        },
        async fetch_userOrder({ commit }, data) {
            const token = localStorage.token;
            try {
                const response = await axios.get(
                    "https://ecommerce.olipiskandar.com/api/v1/user/order/"+data,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
                commit("SET_USERORDER", response.data.data);
            } catch (error) {
                console.log(error);
                return error;
            }
        },
    },
    mutations: {
        SET_USERINFO(state, data) {
            state.user_info = data;
        },
        SET_USERORDER(state, data) {
            state.user_order = data;
        },
    }
}

export default order;