<template>
    <div>
        <nav
            class="bg-white dark:bg-gray-900 w-full top-0 left-0 border-b border-gray-200 dark:border-gray-600 bg-opacity-[.6] backdrop-blur-sm dark:bg-opacity-[.7]">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://ridwannurfauzi.github.io/" class="flex items-center">
                    <!-- <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo"> -->
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Ridwan NrF</span>
                </a>
                <div class="flex md:order-2">
                    <div v-if="isAuthenticated" class="mr-8 relative">
                        <button
                            class="h-full flex flex-wrap px-3 justify-center items-center align-middle hover:bg-slate-400 hover:bg-opacity-50 dark:text-white rounded-xl transition-all">
                            <i class="bi bi-cart text-xl font-semibold"></i>
                        </button>
                        <div v-if="cart.cart_items != undefined && cart.cart_items.data.length > 0"
                            class="absolute text-sm bottom-full left-full -translate-x-[50%] translate-y-[50%] bg-yellow-500 dark:bg-yellow-500 dark:bg-opacity-80 text-white px-2 rounded-md">
                            <!-- Number -->
                            {{ function () {
                                let num = cart.cart_items.data.length;
                                let txt;
                                if (num > 99) {
                                    txt = '99+'
                                } else {
                                    txt = num.toString();
                                }

                                return txt;
                            }() }}
                            <!-- {{ cart.cart_items.data.length }} -->
                        </div>
                    </div>
                    <router-link to="/login" v-if="isAuthenticated != true"
                        class="hidden md:block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-1 md:mr-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Login
                    </router-link>
                    <router-link to="/register" v-if="isAuthenticated != true"
                        class="hidden md:block text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-1 md:mr-1 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        SignUp
                    </router-link>
                    <button v-on:click="_logout()" v-if="isAuthenticated"
                        class="hidden md:block text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-1 md:mr-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                        Logout
                    </button>
                    <button type="button" id="nav-btn-toggle" @click="navToggle"
                        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <!-- <button data-collapse-toggle="navbar-sticky" type="button" id="nav-btn-toggle"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-sticky" aria-expanded="">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button> -->
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                        <li>
                            <RouterLink to="/" :class="setActivedNavClass(rl[1])">
                                Home
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/product" :class="setActivedNavClass(rl[2])">
                                Product
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/category" :class="setActivedNavClass(rl[3])">
                                Category
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/brand" :class="setActivedNavClass(rl[4])">
                                Brand
                            </RouterLink>
                        </li>
                        <li v-if="isAuthenticated">
                            <RouterLink to="/profile" :class="setActivedNavClass(rl[5])">
                                Profile
                            </RouterLink>
                        </li>
                        <li class="">
                            <router-link to="/login" v-if="isAuthenticated != true"
                                class="visible md:hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-1 md:mr-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Login
                            </router-link>
                            <router-link to="/register" v-if="isAuthenticated != true"
                                class="visible md:hidden text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-1 md:mr-1 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                SignUp
                            </router-link>
                            <button v-on:click="_logout()" v-if="isAuthenticated"
                                class="visible md:hidden text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-1 md:mr-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    <!-- {{ cart }} -->
</template>

<script>
import { ref } from "vue";
import { mapActions, mapGetters, mapState } from "vuex";
import $ from "jquery";

export default {
    props: {
        idMenu: Number
    },
    computed: {
        ...mapGetters('auth', ['isAuthenticated']),
        ...mapState('cart', ['cart'])
    },
    mounted() {
        this.$store.dispatch("cart/fetchCartData", localStorage.getItem('token'))
        // console.log(localStorage.getItem('token'))
    },
    methods: {
        ...mapActions('auth', ['logout']),
        _logout() {
            let cnfrm = confirm('Apakah Anda yakin ingin melakukan logout?');
            if (cnfrm) {
                this.logout();
                this.$router.push('/login');
            }
        },
        navToggle() {
            $("#navbar-sticky").slideToggle();
        },
        // toggle_cartSide(){
        //     $('#cart-side').toggle();
        // }
    },
    setup(props) {
        const rl = ref([
            false,
            false,
            false,
            false,
            false
        ]);

        if (props.idMenu == 0) {
            rl.value[0] = true;
        }
        if (props.idMenu == 1) {
            rl.value[1] = true;
        }
        if (props.idMenu == 2) {
            rl.value[2] = true;
        }
        if (props.idMenu == 3) {
            rl.value[3] = true;
        }
        if (props.idMenu == 4) {
            rl.value[4] = true;
        }
        if (props.idMenu == 5) {
            rl.value[5] = true;
        }

        return {
            rl
        }
    },
    data() {
        return {
            setActivedNavClass(e) {
                let txtClass = '';
                try {
                    if (e) {
                        txtClass = "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500";
                    } else {
                        txtClass = "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";
                    }
                }
                catch (err) {
                    console.log(err);
                    return 0;
                }
                finally {
                    return txtClass;
                }
            }
        }
    }
}
</script>