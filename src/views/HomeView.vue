<!-- <script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script> -->

<template>
  <div>
    <h2 class="text-3xl font-semibold text-center">Halaman Home</h2>
    <input type="text" v-model="msg" class="border"><br>
    {{
      function () {
        let txt;
        txt = msg.replace(/ +(?= )/g,'');
        if (msg.length > 25) {
          txt = txt.slice(0, 22) + '. . .';
        } else {
          txt = txt;
        }
        return txt
      }()
    }}
    <br>
    <pre>
    {{ msg }}</pre>
  </div>
</template>


<script>
import { onMounted } from "vue";

export default {
  data(){
    return {
      msg: ''
    }
  },
  setup(props, context) {
        onMounted(() => {
            try {
                context.emit("id-menu", 1 )
            } catch (error) {
                console.log(error)
            }
        })
    }
}
</script>