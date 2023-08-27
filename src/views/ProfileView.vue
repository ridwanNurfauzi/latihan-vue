<template>
    <div class="dark:text-white flex flex-col items-center">
        <div class="w-full xl:max-w-7xl">
            <div class="px-4">
                <div class="my-6">
                    <h2 class="text-3xl font-semibold text-center">
                        Profil
                    </h2>
                </div>
                <div v-if="isAuthenticated && !userData.user">
                    Loading..
                </div>
                <div v-else-if="isAuthenticated && !!userData.user">
                    <div class="sm:grid sm:grid-cols-2">
                        <div class="flex sm:justify-end sm:mx-4 justify-center">
                            <img src="/img/placeholder.jpg" class="rounded-full w-32" alt="">
                        </div>
                        <div class="flex sm:justify-start sm:mx-4 justify-center sm:items-center">
                            <div>
                                <p class="text-center sm:text-left font-bold text-xl">{{ userData.user.name }}</p>
                                <p class="text-center sm:text-left text-sm text-gray-700 dark:text-gray-400">{{
                                    userData.user.email }}</p>
                                <p class="text-center sm:text-left" v-if="!!userData.user.phone">{{ userData.user.phone }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    Mohon maaf anda belum login
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import { onMounted } from "vue";

export default {
    data() {
        return {}
    },
    computed: {
        ...mapState('auth', ['userData']),
        ...mapGetters('auth', ['isAuthenticated'])
    },
    methods: {
        ...mapActions('auth', ['getUserData'])
    },
    mounted() {
        this.getUserData(localStorage.token)
    },
    setup(props, context) {
        onMounted(() => {
            try {
                context.emit("id-menu", 5)
            } catch (error) {
                console.log(error)
            }
        })
    }
}   
</script>