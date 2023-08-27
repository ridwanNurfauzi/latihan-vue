<!-- <script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script> -->

<template>
  <div class="dark:bg-gray-800 dark:text-white">
    <h2 class="text-3xl font-semibold text-center">Halaman Home</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vel tempore, optio incidunt aperiam autem cum
      temporibus velit dicta mollitia iure. Quisquam voluptatum optio iure quas enim placeat, atque omnis!</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vel tempore, optio incidunt aperiam autem cum
      temporibus velit dicta mollitia iure. Quisquam voluptatum optio iure quas enim placeat, atque omnis!</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vel tempore, optio incidunt aperiam autem cum
      temporibus velit dicta mollitia iure. Quisquam voluptatum optio iure quas enim placeat, atque omnis!</p>
  </div>
</template>


<script>
import { onMounted } from "vue";

export default {
  data() {
    return {
      msg: ''
    }
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