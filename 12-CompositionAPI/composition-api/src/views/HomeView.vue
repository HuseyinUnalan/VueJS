<template>
  <div class="home">
    <input type="text" v-model="search">
    <div v-for="day in finded" :key="day">
    {{ day }}
    </div>
    <button @click="stop">Stop</button>
  </div>
</template>

<script>
import { ref, computed, watch, watchEffect } from "vue";
import Content from "../components/Content.vue";
export default {
  name: 'HomeView',
  components: {
    
  },
  setup() {
    const days = ref(['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma']);
    const search = ref('');
    const finded = computed(() => {
      return days.value.filter((day)=>day.includes(search.value))
    })
    const watchS = watch(search,()=>{
      console.log("watch çalıştı")
    });
    const watchEffectS = watchEffect(()=> {
      console.log("watchEffect çalıştı", days.value)
      console.log("watchEffect çalıştı", search.value)
    });
    const stop = () => {
      watchS();
      watchEffectS();
    };
    return { days, search, finded, stop };
  },
}
</script>
