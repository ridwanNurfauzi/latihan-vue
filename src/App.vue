<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
</script> -->

<template>
  <div class="flex flex-col min-h-[100vh]">
    <div class="sticky top-0 z-[1000]">
      <Navbar :id-menu="idMenu" :key="idMenu"></Navbar>
    </div>
    <div class="flex-1 flex flex-col">
      <RouterView class="flex-1" @id-menu="setMenu($event)"></RouterView>
    </div>
    <div>
      <FooterComponent></FooterComponent>
    </div>
  </div>
  <div>
    <CartSide></CartSide>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from "vue";
import Navbar from './components/Navbar.vue';
import FooterComponent from './components/FooterComponent.vue'
import CartSide from './components/CartSide.vue'

export default {
  components: {
    Navbar,
    FooterComponent,
    CartSide
  },
  setup() {
    const idMenu = ref(0);

    function setMenu(id) {
      idMenu.value = id;
    }
    return {
      idMenu,
      setMenu
    }
  }
}
</script>
<style scoped>
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
