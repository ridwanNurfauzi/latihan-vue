import axios from "axios";

const checkout = {
    namespaced: true,
    state: {
        address: [],

        countries: [],
        states: [],
        cities: []
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
                // console.log(getAddress.data.data)
            }
            catch (err) {
                console.log(err);
            }
        },


        async fetchAllCountries({ commit }) {
            try {
                const getAddress = await axios.get('https://ecommerce.olipiskandar.com/api/v1/all-countries');
                commit("SET_COUNTRIES", getAddress.data.data);
                // console.log(getAddress.data.data)
            }
            catch (err) {
                console.log(err);
            }
        },
        async fetchAllStates({ commit }, id) {
            try {
                const getAddress = await axios.get('https://ecommerce.olipiskandar.com/api/v1/states/'+id);
                commit("SET_STATES", getAddress.data.data);
                // console.log(getAddress.data.data)
            }
            catch (err) {
                console.log(err);
            }
        },
        async fetchAllCities({ commit }, id) {
            try {
                const getAddress = await axios.get('https://ecommerce.olipiskandar.com/api/v1/cities/'+id);
                commit("SET_CITIES", getAddress.data.data);
                // console.log(getAddress.data.data)
            }
            catch (err) {
                console.log(err);
            }
        },
        // shipping_address_id
    },
    mutations: {
        SET_ADDRESS(state, address){
            state.address = address
        },
        SET_DATA(state, data){
            state.data = data
        },
        SET_COUNTRIES(state, data){
            state.countries = data;
        },
        SET_STATES(state, data){
            state.states = data;
        },
        SET_CITIES(state, data){
            state.cities = data;
        },
    }
}

export default checkout;
