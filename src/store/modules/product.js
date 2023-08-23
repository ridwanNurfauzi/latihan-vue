import axios from "axios";

export default {
    namespaced: true,
    state: {
        products: [],
        product: []
    },
    getters: {
        getProduct: state => state.products
    },
    actions: {
        async fetchProduct({ commit }) {
            try {
                const dataProduct = await axios.get("https://ecommerce.olipiskandar.com/api/v1/product/latest/20")
                commit('SET_PRODUCT', dataProduct.data.data)
                // console.log(dataProduct.data.data)
            } catch (error) {
                alert("Ada error");
                console.log(error);
            }
        },
        async fetchProductBySlug({ commit }, product_slug) {
            try {
                const dataProduct = await axios.get(`https://ecommerce.olipiskandar.com/api/v1/product/details/${product_slug}`)
                commit('SET_PRODUCT_BY_SLUG', dataProduct.data.data)
            } catch (error) {
                alert("Ada error");
                console.log(error);
            }
        }
    },
    mutations: {
        SET_PRODUCT(state, products) {
            state.products = products
        },
        SET_PRODUCT_BY_SLUG(state, products) {
            state.product = products
        }
    }
}