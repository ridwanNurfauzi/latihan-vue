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
        async addCartData({ commit }, data) {
            try {
                const response = await axios.post('https://ecommerce.olipiskandar.com/api/v1/carts/add',
                {
                    "variation_id": data.variation_id,
                    "qty": data.qty
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.token}`
                    }
                });
                alert("Berhasil menambah ke keranjang");
                
                // console.log(response.data);
                // commit("CART_INFO", response.data);
            }
            catch (err) {
                console.log(err);
                console.log({ success: false, err });
            }finally{
                const response = await axios.post('https://ecommerce.olipiskandar.com/api/v1/carts',
                    {
                        _temp: null
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.token}`
                        }
                    });
                // console.log(response.data);
                commit("CART_INFO", response.data);
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