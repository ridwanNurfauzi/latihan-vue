<template>
    <div
        class="min-w-full flex flex-col sm:align-middle sm:justify-center sm:items-center bg-[url('/img/auth_bg.jpg')] bg-cover bg-center">
        <div
            class="sm:my-4 sm:w-[525px] flex-grow sm:grow-0 bg-gray-100 dark:bg-gray-700 bg-opacity-60 dark:bg-opacity-60 backdrop-blur-[2px] sm:backdrop-blur-sm transition-all sm:rounded-2xl shadow-2xl px-7 flex">
            <div class="flex-grow my-auto">
                <h2 class="text-center font-semibold text-2xl my-6 dark:text-white">Login</h2>
                <form @submit.prevent="performLogin">
                    <div class="mb-7">
                        <div>
                            <div class="mb-3">
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Email
                                </label>
                                <input type="text" id="email" v-model="email"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:bg-opacity-75 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Masukkan Email ..." required>
                            </div>
                            <div class="mb-3">
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Password
                                </label>
                                <input type="password" id="password" v-model="password"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:bg-opacity-75 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Masukkan Password ..." required>
                            </div>
                        </div>
                        <div class="mt-6">
                            <button type="submit"
                                class="text-white transition-all bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </div>
                        <div class="my-2">
                            <RouterLink
                                class="text-blue-600 hover:underline hover:dark:text-blue-400 dark:text-blue-200 rounded-lg transition-all"
                                to="/register">
                                Belum punya Akun?
                            </RouterLink>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted } from "vue";
import { mapActions } from "vuex";
import Swal from 'sweetalert2';

export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        ...mapActions('auth', ['login']),
        async performLogin() {
            const credentials = {
                email: this.email,
                password: this.password
            };

            const success = await this.login(credentials);
            if (success == true) {
                this.$router.push('/')
            }
            else {
                // alert("Login failed")
                Swal.fire({
                    icon: 'error',
                    titleText: 'Login gagal.'
                });
            }
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
    }
}
</script>