import axios from "axios";

const auth = {
    namespaced: true,
    state: {
        cart: []
    },
    getters: {
        getCart: (state) => state.cart
    },
    actions: {
        async fetchCartData({ commit }, token) {

            try {
                const response = await axios.post('https://ecommerce.olipiskandar.com/api/v1/carts',
                    {
                        _temp: null
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                // console.log(response.data);
                commit("CART_INFO", response.data);
            }
            catch (err) {
                console.log(err);
                console.log({ success: false, err });
                commit("CART_INFO", { success: false, err });
            }
        },
    },
    mutations: {
        CART_INFO(state, cart) {
            state.cart = cart;
        }
    }
}

export default auth;