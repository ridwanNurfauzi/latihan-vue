import axios from "axios";

const checkout = {
    namespaced: true,
    state: {
        address: []
    },
    getters: {
    },
    actions: {
        async fetchAddress({ commit }) {
            const token = localStorage.token;
            try {
                const getAddress = await axios.get('https://ecommerce.olipiskandar.com/api/v1/user/addresses',
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                commit("SET_ADDRESS", getAddress.data.data);
                console.log(getAddress.data.data)
            }
            catch (err) {
                console.log(err);
            }
        },
    },
    mutations: {
        SET_ADDRESS(state, address){
            state.address = address
        }
    }
}

export default checkout;
