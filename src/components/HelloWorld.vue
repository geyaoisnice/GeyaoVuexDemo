<script setup>
import { useStore } from "vuex"
import { computed } from "vue";
const store=useStore()
const {state}=store
const countDouble=computed(()=>
  store.getters.double
)
</script>
<template>
  <div class="card">
    <p>{{ countDouble }}</p>
    <button type="button" @click="store.commit('increment')">count is {{ state.count }}</button>
    <button type="button" @click="store.dispatch('increment',{amount:20})">actions is {{ state.count }}</button>
    <button type="button" @click="store.commit('increment')">count is {{ countDouble }}</button>
    <p>
      Edit
      <code>componnets/helloworld</code>
    </p>
  </div>
</template>
<style scoped></style>
