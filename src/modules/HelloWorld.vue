<template>
  <div>
    <h1>{{message}}</h1>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
import '../service/testHttpService'
export default {
  components: {HelloWorld},
  name: 'HelloPage',
  data () {
    return {}
  },
  computed: {
    message () {
      return this.$store.state.message
    }
  }
}
</script>
