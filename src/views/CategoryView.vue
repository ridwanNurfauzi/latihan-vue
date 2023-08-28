<template>
    <div class="dark:text-white">
        <div class="flex">
            <div class="mx-4 w-full xl:max-w-7xl xl:mx-auto">
                <h2 class="text-center text-2xl my-4 font-semibold">
                    Kategori
                </h2>
                <div class="text-center">
                    <p>
                        Jumlah Kategori : {{ categories.length }}
                    </p>
                </div>
                <div class="flex flex-wrap justify-center">
                    <div v-for="category in categories">
                        <!-- <RouterLink :to="'/category/' + category"> -->
                        <div class="m-3 w-[250px] group hover:shadow-md border bg-white hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-500 dark:hover:bg-opacity-[.5] transition-all cursor-pointer rounded-t-lg rounded-b-lg">

                            <div class="my-5">
                                <h2 class="text-center text-xl font-semibold">{{ category.name }}</h2>
                                <h2 class="text-center text-lg">{{ category.slug }}</h2>
                            </div>
                            <!-- <div class="my-5" v-if="products.length != 0">
                                <p class="text-center">
                                    Products total :
                                    {{
                                        this.products.filter((e) => {
                                            return e.category == category;
                                        }).length
                                    }}
                                </p>
                            </div> -->

                        </div>
                        <!-- </RouterLink> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- {{ categories }} -->
</template>

<script>
import { onMounted } from "vue";
import { mapState } from "vuex";

export default {
    mounted() {
        this.$store.dispatch("category/fetchCategories")
        // this.$store.dispatch("product/fetchProduct")
    },
    computed: {
        ...mapState("category", ['categories']),
        // ...mapState("product", ['products']),
        // countProduct(category){
        //     let data = this.products.filter((e)=>{
        //         return e.category == category;
        //     });
        //     return data;
        // }
    },
    created() {
        // console.log(this.countProduct(electronics))
        // console.log(this.products)
    },
    setup(props, context) {
        onMounted(() => {
            try {
                context.emit("id-menu", 3)
            } catch (error) {
                console.log(error)
            }
        })
    }
}
</script>