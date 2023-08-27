<template>
    <div>
        <div v-for="addressData in address">
            {{ addressData }}
        </div>
    </div>
</template>

<script>
import { onMounted } from "vue";
import { mapActions, mapState } from "vuex";

export default {
    data() {
        return {}
    },
    computed: {
        ...mapState('checkout', ['address'])
    },
    methods: {
        ...mapActions('checkout', ['fetchAddress'])
    },
    beforeMount() {
        this.fetchAddress();
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