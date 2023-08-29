<template>
    <div class="dark:text-white">
        <div class="flex">
            <div class="mx-4 xl:max-w-7xl xl:mx-auto">
                <div class="lg:container sm:grid sm:grid-cols-2 sm:gap-2">
                    <div class="p-[40px] flex" v-if="product.brand != undefined">
                        <img class="shadow my-auto" :src="product.brand.logo" :alt="product.name">
                    </div>
                    <div class="p-4 flex">
                        <div class="my-auto">
                            <h2 class="text-2xl font-semibold">{{ product.name }}</h2>
                            <p class="text-sm text-gray-500">{{ product.slug }}</p>
                            <div class="my-10" v-if="product.base_price != undefined">
                                <b class="text-4xl font-bold font-mono">{{ 'Rp.' + product.base_price }}</b>
                            </div>
                            <!-- <div v-if="product.rating != undefined" class="text-xl group my-4">
                            <span
                                class="font-bold text-blue-700 bg-blue-300 rounded-lg text-base mx-3 px-2 group-hover:bg-opacity-75">{{
                                    product.rating.rate }}</span>
                            <span class="text-yellow-400 hover:scale-105 transition-all group-hover:text-yellow-300"
                                v-html="rateToStar(product.rating.rate)"></span>
                            <span
                                class="font-bold text-blue-700 bg-blue-300 rounded-lg text-base mx-3 px-2 group-hover:bg-opacity-75"><i
                                    class="bi bi-people"></i> {{ product.rating.count }}</span>
                            </div> -->
                            <div class="my-4">
                                <button @click="decrementQty"
                                    class="text-xl dark:text-white bg-gray-100 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg px-4 py-2 text-center mr-1 md:mr-1 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-500 transition-all">
                                    &minus;
                                </button>
                                <input
                                    class="text-xl dark:text-white bg-gray-50 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg px-4 py-2 text-center mr-1 md:mr-1 dark:bg-gray-700 dark:hover:bg-gray-600 w-24 dark:focus:ring-gray-500 transition-all"
                                    type="number" min="1" v-model="qty" name="qty" id="qty">
                                <button @click="incrementQty"
                                    class="text-xl dark:text-white bg-gray-100 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg px-4 py-2 text-center mr-1 md:mr-1 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-500 transition-all">
                                    &plus;
                                </button>
                                <!-- {{ qty }} -->
                            </div>
                            <div>
                                <!-- <p>{{ product.description }}</p> -->
                                <button v-if="isAuthenticated"
                                    @click="addCartData({ variation_id: product.variations[0].id, qty })"
                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-1 md:mr-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Tambah ke keranjang
                                </button>
                                <button v-else @click="toLogin"
                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-1 md:mr-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Tambah ke keranjang
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="py-2 px-4 md:px-8">
                    <h2 class="text-center font-semibold text-xl my-3">Deskripsi</h2>
                    <p>
                        {{ product.description }}
                    </p>
                </div>
            </div>
            <!-- {{ product.description }} -->
        </div>
    </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import { onMounted } from "vue";
// import product from "@/store/modules/product";
import Swal from "sweetalert2";

export default {
    props: [
        'product_slug'
    ],
    data() {
        return {
            qty: 1
        }
    },
    methods: {
        decrementQty() {
            if (this.qty > 1) {
                this.qty--;
            }
        },
        incrementQty() {
            this.qty++;
        },
        ...mapActions('cart', ['addCartData']),
        toLogin() {
            Swal.fire({
                title: 'Akses ditolak!',
                text: 'Mohon login terlebih dahulu.',
                icon: 'warning'
            }).then(() => {
                this.$router.push('/login')
            })
        }
    },
    setup(props, context) {
        onMounted(() => {
            try {
                context.emit("id-menu", 0)
            } catch (error) {
                console.log(error)
            }
        })
    },
    mounted() {
        this.$store.dispatch("product/fetchProductBySlug", this.product_slug)
    },
    computed: {
        ...mapState('product', ['product']),
        ...mapGetters('auth', ['isAuthenticated'])
    }
}
</script>