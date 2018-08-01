<template>
  <div id="app">
   
    <router-view/>
  </div>
</template>


<script>
import iTunes from './components/iTunes.vue'
import axios from 'axios';
export default {
  name: 'App',
  components: {
    iTunes
  }
}
</script>

<style>


  @import '../src/assets/styles.css';

</style>
