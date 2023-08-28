import axios from "axios";
// import Swal from "sweetalert2";

const auth = {
    namespaced: true,
    state: {
        token: localStorage.getItem('token') || '',
        userData: []
    },
    getters: {
        isAuthenticated: state => (!!state.token && state.token != 'undefined'),
    },
    actions: {
        async login({ commit }, credentials) {
            try {
                const response = await axios.post(
                    "https://ecommerce.olipiskandar.com/api/v1/auth/login",
                    credentials
                );
                const token = response.data.access_token;

                localStorage.setItem("token", token);
                commit("SET_TOKEN", token);
                return response.data.success
            } catch (error) {
                console.log(error);
                return error;
            }
        },
        async getUserData({ commit }, token) {
            let response;
            try {
                response = await axios.get('https://ecommerce.olipiskandar.com/api/v1/user/info',
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                // console.log(response.data);
                commit("USER_INFO", response.data);
                return response.data;
            }
            catch (err) {
                console.log(err);
                console.log({success: false, err});
                commit("USER_INFO", {success: false, err});
                return {success: false, err};
            }
        },
        async signup({ commit }, credentials) {
            try {
                const response = await axios.post(
                    "https://ecommerce.olipiskandar.com/api/v1/auth/signup",
                    credentials
                );
                const token = response.data.access_token;

                localStorage.setItem("token", token);
                commit("SET_TOKEN", token);
                return response.data.success;
            } catch (error) {
                console.log(error);
                return error;
            }
        },
        logout({ commit }) {
            // localStorage.removeItem('token');
            // commit("SET_TOKEN", "");
            const token = localStorage.getItem('token');
            localStorage.removeItem('token');
            commit("SET_TOKEN", '')
            // console.log("Token removed : ", token)
        }
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
        },
        USER_INFO(state, data) {
            state.userData = data;
        }
    }
}

export default auth;