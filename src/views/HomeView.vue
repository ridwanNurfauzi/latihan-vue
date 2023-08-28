<template>
  <div class="dark:text-white">
    <div class="flex flex-col">
      <div class="px-4 w-full xl:max-w-7xl xl:mx-auto">
        <h2 class="text-center text-2xl my-4 font-semibold">
          Kaka Shop
        </h2>

        <!-- Brand -->
        <div class="p-4 border my-2 dark:border-gray-600 shadow-md rounded-2xl">
          <div class="flex flex-wrap">
            <div class="me-auto my-2">
              <h2 class="font-semibold text-xl">Brand</h2>
            </div>
            <div class=" my-2">
              <RouterLink class="text-blue-600 hover:underline dark:text-blue-400" to="/brand">
                Lihat semua
                <i class="bi bi-chevron-right"></i>
              </RouterLink>
            </div>
          </div>
          <div class="p-3 snap-mandatory snap-x flex overflow-auto no-scrollbar">
            <div v-for="brand in brands.slice(0, 12)" class="snap-center">
              <RouterLink to="#">
                <div
                  class="mx-4 py-7 px-2 border w-56 rounded-lg hover:bg-gray-200 hover:shadow-md hover:dark:bg-gray-700 dark:border-gray-700 transition-all">
                  <h2 class="text-center font-bold text-lg">
                    {{ brand.name }}
                  </h2>
                  <h2 class="text-center text-gray-600 dark:text-gray-400">
                    {{ brand.slug }}
                  </h2>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>

        <!-- Kategori -->
        <div class="p-4 border my-8 dark:border-gray-600 shadow-md rounded-2xl">
          <div class="flex flex-wrap">
            <div class="me-auto my-2">
              <h2 class="font-semibold text-xl">Kategori</h2>
            </div>
            <div class=" my-2">
              <RouterLink class="text-blue-600 hover:underline dark:text-blue-400" to="/category">
                Lihat semua
                <i class="bi bi-chevron-right"></i>
              </RouterLink>
            </div>
          </div>
          <div class="p-3 snap-mandatory snap-x flex overflow-auto no-scrollbar">
            <div v-for="category in categories.slice(0, 12)" class="snap-center">
              <RouterLink to="#">
                <div
                  class="mx-4 py-7 px-2 border w-56 rounded-lg hover:bg-gray-200 hover:shadow-md hover:dark:bg-gray-700 dark:border-gray-700 transition-all">
                  <h2 class="text-center font-bold text-lg">
                    {{ category.name }}
                  </h2>
                  <h2 class="text-center text-gray-600 dark:text-gray-400">
                    {{ category.slug }}
                  </h2>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>

        <!-- Produk -->
        <div class="p-4 border my-8 dark:border-gray-600 shadow-md rounded-2xl">
          <div class="flex flex-wrap">
            <div class="me-auto my-2">
              <h2 class="font-semibold text-xl">Produk</h2>
            </div>
            <div class=" my-2">
              <RouterLink class="text-blue-600 hover:underline dark:text-blue-400" to="/product">
                Lihat semua
                <i class="bi bi-chevron-right"></i>
              </RouterLink>
            </div>
          </div>
          <div class="p-3 snap-mandatory snap-x flex overflow-auto no-scrollbar">
            <div v-for="product in products.slice(0, 12)" class="snap-center">
              <RouterLink :to="'/product/' + product.slug">
                <div
                  class="mx-4 py-7 px-2 border w-56 rounded-lg hover:bg-gray-200 hover:shadow-md hover:dark:bg-gray-700 dark:border-gray-700 transition-all">
                  <h2 class="text-center font-bold text-lg">
                    {{ product.name }}
                  </h2>
                  <h2 class="text-center text-gray-600 dark:text-gray-400">
                    {{ product.slug }}
                  </h2>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>


<script>
import { onMounted } from "vue";
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      msg: ''
    }
  },
  computed:{
    ...mapState('brand', ['brands']),
    ...mapState('category', ['categories']),
    ...mapState('product', ['products'])
  },
  methods:{
    ...mapActions('brand', ['fetchBrands']),
    ...mapActions('category', ['fetchCategories']),
    ...mapActions('product', ['fetchProduct'])
  },
  beforeMount(){
    this.fetchBrands();
    this.fetchCategories();
    this.fetchProduct();
  },
  setup(props, context) {
    onMounted(() => {
      try {
        context.emit("id-menu", 1)
      } catch (error) {
        console.log(error)
      }
    })
  }
}
</script>