<template>
    <div id="cart-side" class="fixed top-0 left-0 w-full h-screen z-[2000]  dark:text-white"
        :class="{ hide: !showCartSide }">
        <div class="fixed top-0 left-0 w-full h-screen bg-gray-950 bg-opacity-75" :class="{
            hide: showCartSide == false,
            fadeIn: showCartSide,
            fadeOut: showCartSide == false
        }"></div>
        <div class="fixed flex flex-row w-full h-screen items-stretch">
            <div @click="toggle_cartside" class="flex-1">
                <!-- <div v-if="!!cart.cart_items" class="text-white">
                    {{ function(){
                        let arr = [];
                        cart.cart_items.data.forEach(e => {
                            arr.push(e.cart_id)
                        });
                        console.log(arr)
                        return arr
                    }() }}
                    {{ cart.cart_items.data }}</div> -->
            </div>
            <div class="h-screen min-w-full sm:min-w-[400px] max-w-sm bg-white dark:bg-slate-800" :class="{
                swipeIn: showCartSide,
                swipeOut: showCartSide == false
            }">
                <div class="w-full h-screen flex flex-col">
                    <div class="border-b shadow-md p-3 flex flex-nowrap">
                        <div>
                            <h2 class="text-lg font-semibold">Keranjang</h2>
                        </div>
                        <div class="ms-auto text-xl">
                            <button class="transition-all px-2 hover:bg-red-500 hover:text-white" @click="toggle_cartside">
                                &times;
                            </button>
                        </div>
                    </div>
                    <div class="flex-1 flex flex-col">
                        <div v-if="cart.cart_items" class="flex-1 flex flex-col">
                            <div class="p-2 border-b">
                                <h2 class="font-semibold">Jumlah Item : {{ cart.cart_items.data.length }}</h2>
                            </div>
                            <div class="p-2 flex-1 flex">
                                <div class="flex-1 overflow-y-scroll text-sm">
                                    <div class="h-0 overflow-y-visible">
                                        <div v-for="cartData in cart.cart_items.data"
                                            class="p-2 rounded-xl shadow-md border m-2 flex">
                                            <div>
                                                <img src="/img/placeholder.jpg" width="50" alt="product">
                                            </div>
                                            <div class="my-auto ms-1">
                                                <h2 class="font-semibold">
                                                    {{ cartData.name }}
                                                </h2>
                                                <div class="border border-gray-300 dark:border dark:border-gray-500">
                                                    <button
                                                        @click="change_qty({ cart_id: cartData.cart_id, type: 'minus' })"
                                                        class="px-2 border-r border-gray-300 dark:border-r dark:border-gray-500 hover:bg-gray-400 dark:hover:bg-slate-700">
                                                        &minus;
                                                    </button>
                                                    QTY :
                                                    {{ cartData.qty }}
                                                    <button @click="change_qty({ cart_id: cartData.cart_id, type: 'plus' })"
                                                        class="px-2 border-l border-gray-300 dark:border-l dark:border-gray-500 hover:bg-gray-400 dark:hover:bg-slate-700">
                                                        &plus;
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="my-auto ms-auto">
                                                <h4 class="font-semibold">
                                                    Rp. {{ cartData.regular_price * cartData.qty }}
                                                </h4>
                                            </div>
                                            <div class="ms-auto my-auto">
                                                <button @click="delete_cartData(cartData.cart_id)"
                                                    class="py-1 px-2 bg-red-500 text-white hover:bg-red-400 rounded-lg">
                                                    <i class="bi bi-trash"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 border-t">
                        <div v-if="cart.cart_items">
                            <div class="flex flex-col pb-2">
                                <div class="mb-4">
                                    <h2 class="font-semibold">
                                        {{ 'Harga Total: Rp.' + totalPrice(cart.cart_items.data) }}
                                    </h2>
                                </div>
                                <!-- {{ cart.cart_items.data }} -->
                                <button @click="checkout"
                                    class="md:block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    computed: {
        ...mapState('cart', ['cart', 'showCartSide'])
    },
    methods: {
        ...mapActions('cart', ['delete_cartData', 'toggle_cartside', 'change_qty']),
        totalPrice(param) {
            let _temp = 0;
            param.forEach(e => {
                _temp += e.regular_price * e.qty;
            });

            return _temp;
        },
        checkout(){
            this.$router.push('/checkout');
            this.toggle_cartside();
        }
    }
}
</script>