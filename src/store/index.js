import { createStore } from "vuex";

import auth from "./modules/auth";
import product from "./modules/product";
import category from "./modules/category";
import brand from "./modules/brand";
import cart from "./modules/cart";
import checkout from "./modules/checkout";
import order from "./modules/order";

export default createStore({
    modules: {
        auth,
        product,
        category,
        brand,
        cart,
        checkout,
        order
    }
});