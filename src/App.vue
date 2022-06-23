<template>
  <div id="app">
    <h1>Sample UUID</h1>
    <br />
    <div>{{ secret }}</div>
  </div>
</template>

<script>
import { generateUuid } from './helpers/helper.uuid'

export default {
  name: 'App',
  data() {
    return {
      secret: null
    }
  },
  mounted() {
    setTimeout(async () => {
      this.secret = await generateUuid()
    }, 150)
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
  margin-top: 60px;
}
</style>
