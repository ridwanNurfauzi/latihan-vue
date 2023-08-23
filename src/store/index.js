import { createStore } from "vuex";

import auth from "./modules/auth";
import product from "./modules/product";
import category from "./modules/category";
import brand from "./modules/brand";

export default createStore({
    modules: {
        auth,
        product,
        category,
        brand
    }
});