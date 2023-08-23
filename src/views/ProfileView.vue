<template>
    <div>
        <h2 class="text-xl font-semibold text-center">
            Profile
        </h2>
        <div v-if="isAuthenticated && userData.user != undefined">
            <p>Nama : {{ userData.user.name }}</p>
            <p>Email : {{ userData.user.email }}</p>
            <!-- {{  userData }} -->
        </div>
        <div v-else>
            Mohon maaf anda belum login
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import { onMounted } from "vue";

export default {
    data() {
        return {
        }
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