<template>
  <div>
    <page-header></page-header>
    <router-view></router-view>
    <p></p>
    <page-footer></page-footer>
    <!-- mappings to these components from router/index.js -->
  </div>
</template>

<script>
console.log('opening app.vue')
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'

export default {
  name: 'App',
  components: {
    PageHeader,
    PageFooter
  },
  mounted() {
    this.$stateService.getAllStates().then( states => console.log(states))
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
