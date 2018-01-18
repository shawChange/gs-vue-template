<template>
  <div>
    <h1>{{message}}</h1>
    <hello-world></hello-world>
  </div>
</template>

<script>
import helloWorld from '../../components/helloWorld.vue'
import '../../service/testHttpService'
export default {
  components: {helloWorld},
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
