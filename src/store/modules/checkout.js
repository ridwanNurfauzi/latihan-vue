import axios from "axios";

const checkout = {
    namespaced: true,
    state: {
        address: [],

        countries: [],
        states: [],
        cities: [],

        cart_item_ids: [],
        orderData: []
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
                const getAddress = await axios.get('https://ecommerce.olipiskandar.com/api/v1/states/' + id);
                commit("SET_STATES", getAddress.data.data);
                // console.log(getAddress.data.data)
            }
            catch (err) {
                console.log(err);
            }
        },
        async fetchAllCities({ commit }, id) {
            try {
                const getAddress = await axios.get('https://ecommerce.olipiskandar.com/api/v1/cities/' + id);
                commit("SET_CITIES", getAddress.data.data);
                // console.log(getAddress.data.data)
            }
            catch (err) {
                console.log(err);
            }
        },
        async fetch_cart_item_ids({ commit }) {
            const token = localStorage.token;
            try {
                const response = await axios.post('https://ecommerce.olipiskandar.com/api/v1/carts',
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                commit("SET_CART_ITEM_IDS", response.data.cart_items.data.map(e=> e.cart_id));
                // console.log(response.data.data)
            }
            catch (err) {
                console.log(err);
            }
        },
        async order({ commit }, data) {
            const token = localStorage.token;
            try {
                const response = await axios.post('https://ecommerce.olipiskandar.com/api/v1/checkout/order/store',
                    data,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                commit("SET_ORDERDATA", response.data);
                // console.log(response.data.data)
            }
            catch (err) {
                console.log(err);
            }
        },
        // shipping_address_id
    },
    mutations: {
        SET_ADDRESS(state, address) {
            state.address = address
        },
        SET_DATA(state, data) {
            state.data = data
        },
        SET_COUNTRIES(state, data) {
            state.countries = data;
        },
        SET_STATES(state, data) {
            state.states = data;
        },
        SET_CITIES(state, data) {
            state.cities = data;
        },
        SET_CART_ITEM_IDS(state, data) {
            state.cart_item_ids = data;
        },
        SET_ORDERDATA(state, data) {
            state.orderData = data;
        },
    }
}

export default checkout;
