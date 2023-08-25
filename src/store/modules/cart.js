import axios from "axios";

const auth = {
    namespaced: true,
    state: {
        cart: [],
        showCartSide: false
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
        async addCartData({ commit, dispatch }, param) {
            try {
                const response = await axios.post('https://ecommerce.olipiskandar.com/api/v1/carts/add',
                    param,
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
            } finally {
                // const response = await axios.post('https://ecommerce.olipiskandar.com/api/v1/carts',
                //     {
                //         _temp: null
                //     },
                //     {
                //         headers: {
                //             Authorization: `Bearer ${localStorage.token}`
                //         }
                //     });
                // // console.log(response.data);
                // commit("CART_INFO", response.data);
                dispatch('cart/fetchCartData', localStorage.token, {root: true});
            }
        },
        async delete_cartData({ commit, dispatch }, cart_id) {
            try {
                const response = await axios.post('https://ecommerce.olipiskandar.com/api/v1/carts/destroy',
                    {
                        cart_id
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.token}`
                        }
                    });
                console.log(response);
            } catch (error) {
                console.log(error)
            }
            finally {
                // const response = await axios.post('https://ecommerce.olipiskandar.com/api/v1/carts',
                //     {
                //         _temp: null
                //     },
                //     {
                //         headers: {
                //             Authorization: `Bearer ${localStorage.token}`
                //         }
                //     });
                // // console.log(response.data);
                // commit("CART_INFO", response.data);
                dispatch('cart/fetchCartData', localStorage.token, {root: true});
            }
        },

        async change_qty({ commit, dispatch }, param){
            try {
                const response = await axios.post('https://ecommerce.olipiskandar.com/api/v1/carts/change-quantity',
                    param,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.token}`
                        }
                    });
                console.log(response);
            } catch (error) {
                console.log(error);
            } finally {
                dispatch('cart/fetchCartData', localStorage.token, {root: true});
            }
        },

        toggle_cartside({ commit }) {
            commit("TOGGLE_CARTSIDE")
        }
    },
    mutations: {
        CART_INFO(state, cart) {
            state.cart = cart;
        },
        TOGGLE_CARTSIDE(state) {
            state.showCartSide = !state.showCartSide;
        }
    }
}

export default auth;