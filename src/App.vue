<template>
  <div id="app">
    <img src="./images/logo.png">
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style src="./styles/index.scss" lang="scss"></style>
