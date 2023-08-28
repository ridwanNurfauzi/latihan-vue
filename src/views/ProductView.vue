<template>
    <div class="dark:text-white">
        <div class="flex">
            <div class="mx-4 w-full xl:max-w-7xl xl:mx-auto">
                <h2 class="text-center text-2xl my-4 font-semibold">
                    Produk
                </h2>
                <div class="text-center">
                    <p>Jumlah Produk : {{ products.length }}</p>
                </div>
                <div v-if="products.length != undefined" class="flex flex-wrap justify-center">
                    <div class="m-3 w-[200px] group hover:shadow-md bg-white hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-500 dark:hover:bg-opacity-[.5] transition-all border cursor-pointer rounded-t-lg rounded-b-lg"
                        v-for="data in products">
                        <RouterLink :to="'/product/' + data.slug">
                            <div class="flex flex-col h-full">
                                <div class="mb-3">
                                    <div class="overflow-hidden w-[200px] h-[200px] rounded-t-lg">
                                        <img class="transition-all group-hover:scale-125 group-hover:opacity-75"
                                            src="/img/placeholder.jpg" :alt="data.name">
                                    </div>
                                    
                                    <div class="px-2" v-if="data.name">
                                        <h3 class="font-semibold text-md" v-if="data.name.length >= 25">{{
                                            data.name.slice(0,
                                                25)
                                            + ' ...' }}</h3>
                                        <h3 class="font-semibold text-md" v-else>{{ data.name }}</h3>
                                    </div>
                                </div>
                                <div class="mt-auto p-2">
                                    <!-- <div>
                                        <p class="font-semibold text-md">
                                            <span class="text-yellow-400 opacity-80 group-hover:opacity-60 transition-all"
                                                v-html="rateToStar((data.rating).rate)">
                                            </span>
                                            <b
                                                class="mx-[12px] bg-blue-400 transition-all group-hover:text-blue-600 group-hover:bg-opacity-[35%] bg-opacity-[50%] px-1 rounded-md text-blue-800">
                                                {{ data.rating.rate }}
                                            </b>
                                        </p>
                                    </div> -->
                                    <div>
                                        <h2 class="font-bold font-mono">Rp.{{ data.base_price }}</h2>
                                    </div>
                                    <div class="text-sm text-gray-500">
                                        {{ data.category }}
                                    </div>
                                </div>
                            </div>
                        </RouterLink>
                    </div>
                </div>
                <!-- {{ products }} -->

                <h2 class="text-center text-xl font-bold my-12" v-if="products == undefined || products.length == 0">
                    Loading ...
                </h2>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted } from "vue";
import { mapState } from "vuex";

export default {
    mounted() {
        this.$store.dispatch("product/fetchProduct")
    },
    computed: {
        // getProducts(){
        //     return this.$store.getters.product.getProduct
        // },
        // products() {
        //     return this.$store.state.product.products
        // },
        ...mapState('product', ['products'])
    },
    setup(props, context) {
        onMounted(() => {
            try {
                context.emit("id-menu", 2)
            } catch (error) {
                console.log(error)
            }
        })
    }
}
</script>
