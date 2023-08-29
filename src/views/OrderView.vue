<template>
    <div class="dark:text-white flex flex-col">
        <div class="w-full md:max-w-5xl md:mx-auto">
            <div>
                <div class="py-8">
                    <h2 class="text-center text-xl font-bold">Terima Kasih atas Pesanan Anda</h2>
                </div>
                <div class="flex flex-col">
                    <div class="mx-auto">Kode Pesanan : {{ order_code }}</div>
                </div>
            </div>
            <div class="my-7" v-if="!!user_order.user">
                <div class="bg-gray-200 dark:bg-gray-900 p-5">
                    <h2 class="font-bold text-lg">Ringkasan Pesanan</h2>
                </div>
                <div class="grid md:grid-cols-2">
                    <div class="p-4">
                        <div class="grid grid-cols-2 py-3">
                            <div>
                                <b>
                                    Kode Pesanan :
                                </b>
                            </div>
                            <div>
                                <p>{{ order_code }}</p>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 py-3">
                            <div>
                                <b>
                                    Nama :
                                </b>
                            </div>
                            <div>
                                <p>{{ user_order.user.name }}</p>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 py-3">
                            <div>
                                <b>
                                    Email :
                                </b>
                            </div>
                            <div>
                                <p>{{ user_order.user.email }}</p>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 py-3">
                            <div>
                                <b>
                                    Alamat Pengiriman :
                                </b>
                            </div>
                            <div>
                                <p>
                                    {{ user_order.shipping_address.address }},
                                    {{ user_order.shipping_address.postal_code }} <br>
                                    {{ user_order.shipping_address.city }},
                                    {{ user_order.shipping_address.state }},
                                    {{ user_order.shipping_address.country }} <br>
                                    {{ user_order.shipping_address.phone }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4" v-if="!!user_order.orders">
                        <div class="grid grid-cols-2 py-3">
                            <div><b> Total Jumlah pesanan : </b></div>
                            <div><p>Rp. {{ user_order.orders[0].grand_total }}</p></div>
                        </div>
                        <div class="grid grid-cols-2 py-3">
                            <div><b> Metode Pembayaran : </b></div>
                            <div><p>{{ user_order.orders[0].payment_type }}</p></div>
                        </div>
                        <div class="grid grid-cols-2 py-3">
                            <div><b> Jenis Pengiriman : </b></div>
                            <div><p>{{ user_order.orders[0].delivery_type }}</p></div>
                        </div>
                        <div class="grid grid-cols-2 py-3">
                            <div><b> Alamat Penagihan : </b></div>
                            <div>
                                <p>
                                    {{ user_order.billing_address.address }},
                                    {{ user_order.billing_address.postal_code }} <br>
                                    {{ user_order.billing_address.city }},
                                    {{ user_order.billing_address.state }},
                                    {{ user_order.billing_address.country }} <br>
                                    {{ user_order.billing_address.phone }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full p-6 flex flex-col">
                <button @click="$router.push('/')"
                class="text-white transition-all bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Kembali ke halaman utama
                </button>
            </div>
        </div>
        <!-- {{ user_order }} -->
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    data() {
        return {}
    },
    props: ['order_code'],
    computed:{
        ...mapState('order', ['user_info', 'user_order']),
    },
    methods: {
        ...mapActions('order', ['fetch_userInfo', 'fetch_userOrder']),
        ...mapActions('cart', ['fetchCartData'])
    },
    mounted(){
        this.fetch_userInfo();
        this.fetch_userOrder(this.order_code);
        this.fetchCartData();
    }
}
</script>