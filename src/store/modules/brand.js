import axios from "axios";

export default {
    namespaced: true,
    state: {
        brands: []
    },
    getters: {
        getBrands: state => state.brands
    },
    actions: {
        async fetchBrands({ commit }) {
            try {
                const dataBrands = await axios.get("https://ecommerce.olipiskandar.com/api/v1/all-brands")
                commit('SET_BRANDS', dataBrands.data.data.slice(0, 20))
            } catch (error) {
                alert("Ada error");
                console.log(error);
            }
        }
    },
    mutations: {
        SET_BRANDS(state, brands) {
            state.brands = brands
        }
    }
}