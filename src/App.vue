<template>
  <div id="app">
   
    <router-view/>
  </div>
</template>


<script>
import Music from './components/Music'

export default {
  name: 'App',
  components: {
    Music
  }
}
</script>

<style>


  @import '../src/assets/styles.css';

</style>
