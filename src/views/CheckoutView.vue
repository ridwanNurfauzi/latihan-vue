<template>
    <div class="dark:text-white">
        <div class="flex flex-col">
            <div class="px-4 w-full xl:max-w-7xl xl:mx-auto">
                <form action="">
                    <h2 class="text-center text-2xl my-4 font-semibold">
                        Checkout
                    </h2>
                    <div v-if="!!address" class="my-6">
                        <h2 class="font-semibold text-lg">Alamat Pengiriman</h2>
                        <div class="flex flex-wrap">
                            <div class="" v-for="addressData in address">
                                <input v-model="shipping_address_id" type="radio" name="shipping_address_id"
                                    :id="'shipping_address_' + addressData.id" :value="addressData.id" class="hidden">
                                <label :for="'shipping_address_' + addressData.id">
                                    <div class="m-3 border dark:border-gray-600 p-4 rounded-lg" :class="{
                                        'border-4': shipping_address_id == addressData.id,
                                        'border-blue-400': shipping_address_id == addressData.id,
                                        'dark:border-blue-600': shipping_address_id == addressData.id,
                                        'bg-blue-600': shipping_address_id == addressData.id,
                                        'bg-opacity-20': shipping_address_id == addressData.id,
                                    }">
                                        <div>
                                            {{ addressData.address }}, {{ addressData.postal_code }} <br>
                                            {{ addressData.city }}, {{ addressData.state }}, {{ addressData.country }} <br>
                                            {{ addressData.phone }}
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <div 
                        @click="showAddAddress = true"
                        class="p-3 rounded-lg bg-green-600 hover:bg-green-500 text-white cursor-pointer">
                            <h2 class="text-center font-bold">Tambah Alamat &plus;</h2>
                        </div>
                    </div>
                    <div v-if="!!address" class="my-6">
                        <h2 class="font-semibold text-lg">Alamat Penagihan</h2>
                        <div class="flex flex-wrap">
                            <div class="" v-for="addressData in address">
                                <input v-model="billing_address_id" type="radio" name="billing_address"
                                    :id="'billing_address_' + addressData.id" :value="addressData.id" class="hidden">
                                <label :for="'billing_address_' + addressData.id">
                                    <div class="m-3 border dark:border-gray-600 p-4 rounded-lg" :class="{
                                        'border-4': billing_address_id == addressData.id,
                                        'border-blue-400': billing_address_id == addressData.id,
                                        'dark:border-blue-600': billing_address_id == addressData.id,
                                        'bg-blue-600': billing_address_id == addressData.id,
                                        'bg-opacity-20': billing_address_id == addressData.id,
                                    }">
                                        <div>
                                            {{ addressData.address }}, {{ addressData.postal_code }} <br>
                                            {{ addressData.city }}, {{ addressData.state }}, {{ addressData.country }} <br>
                                            {{ addressData.phone }}
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col">
                    </div>
                    <div v-if="!!address" class="my-6">
                        <h2 class="font-semibold text-lg">Opsi Pengiriman</h2>
                        <div class="flex flex-wrap">
                            <div class="">
                                <input v-model="shipping_address_id" type="radio" name="delivery_type: "
                                    value="standard" class="hidden">
                                <label>
                                    <div class="m-3 border dark:border-gray-600 p-4 rounded-lg" :class="{}">
                                        <div>
                                            
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </form>
                <!-- {{ shipping_address_id }}
                {{ billing_address_id }} -->
            </div>
        </div>
        <div class="fixed top-0 left-0 w-full h-screen z-[2010] bg-gray-950 bg-opacity-40"
        :class="{
            hide: !showAddAddress,
            fadeIn: showAddAddress,
            fadeOut : showAddAddress == false
        }"
        >
            <div class="flex flex-col h-screen py-5 overflow-auto">
                <div class="p-5 rounded-xl bg-white sm:w-[620px] my-auto sm:mx-auto">
                    <h2 class="text-center font-semibold text-lg mb-6">Tambah Alamat</h2>
                    <div>
                        <div class="mb-6">
                            <label for="address"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alamat</label>
                            <textarea id="address" v-model="addAddress.address"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                cols="30" rows="2"></textarea>
                        </div>
                        <div class="mb-6">
                            <label for="postal_code"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kode Pos</label>
                            <input type="text" id="postal_code" v-model="addAddress.postal_code"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                        <div class="mb-6">
                            <label for="country"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Negara</label>
                            <!-- <input type="text" id="country" v-model="addAddress.country"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"> -->
                            <select id="country" v-model="addAddress.country" @change="fetchAllStates(addAddress.country)"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option v-for="country in countries" :key="country.id" :value="country.id">
                                    {{ country.name }}
                                </option>
                            </select>
                        </div>
                        <div class="mb-6">
                            <label for="state"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Provinsi</label>
                            <!-- <input type="text" id="state" v-model="addAddress.state"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"> -->
                            <select id="state" v-model="addAddress.state" @change="fetchAllCities(addAddress.state)"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option v-for="state in states" :key="state.id" :value="state.id">
                                    {{ state.name }}
                                </option>
                            </select>
                        </div>
                        <div class="mb-6">
                            <label for="city"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kota</label>
                            <!-- <input type="text" id="city" v-model="addAddress.city"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"> -->
                            <select id="city" v-model="addAddress.city"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option v-for="city in cities" :key="city.id" :value="city.id">
                                    {{ city.name }}
                                </option>
                            </select>
                        </div>
                        <div class="mb-6">
                            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nomor
                                Telepon</label>
                            <input type="text" id="phone" v-model="addAddress.phone"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>

                    </div>

                    <div class="flex justify-end">
                        <button @click="showAddAddress = false"
                            class="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-1 md:mr-1 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
                            Batal
                        </button>
                        <button
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-1 md:mr-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Tambah Alamat
                        </button>
                    </div>
                    <!-- {{ addAddress }} -->
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
            showAddAddress: null,

            // add address properties
            addAddress: {
                id: null,
                address: null, // string
                postal_code: null,// string
                country: null, // Number
                state: null, // Number
                city: null, // Number
                phone: null // string
            },

            // form data
            shipping_address_id: null,
            billing_address_id: null,
            payment_type: '',
            delivery_type: '',
            cart_item_ids: [],
            transactionId: null,
            receipt: null
        }
    },
    computed: {
        ...mapState('checkout', ['address', 'countries', 'states', 'cities'])
    },
    methods: {
        ...mapActions('checkout', ['fetchAddress', 'fetchAllCountries', 'fetchAllStates', 'fetchAllCities'])
    },
    beforeMount() {
        this.fetchAddress();
        this.fetchAllCountries();
    },
    created() {
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
}
</script>