<script setup>
import { reactive,ref } from "vue";
// import { Play } from "@iconsans/vue";
defineProps({
    name: String,

})
const seen = ref(false)


</script>

<template>
    <div class="text-black relative">
      <label class="text-left">{{ name }}</label>
      <input :placeholder="name" v-bind:type="seen ? 'text':'password'" class="w-full p-[0.4rem] my-2 text-xs peer bg-white border-2 border-base rounded-md outline-none text-black focus:border-primary transition disabled:opacity-70 disabled:cursor-not-allowed">
      <!-- <div>{{ type }}</div> -->
      <div @click="seen = !seen">
          <unicon  v-if="seen" class="absolute right-3 top-9" name="eye" fill="black"></unicon>
          <unicon  v-else class="absolute right-3 top-9" name="eye-slash" fill="black"></unicon>
      </div>
    </div>
</template>