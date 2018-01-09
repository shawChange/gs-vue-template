<template>
  <HelloWorld></HelloWorld>
</template>

<script>
  import HelloWorld from '../components/HelloWorld.vue';

  export default {
    components: {HelloWorld},
    name: 'HelloPage',
    data () {
      return {
        msg: 'gs-vue-template.js App'
      }
    }
  }
</script>
