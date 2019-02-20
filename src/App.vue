<template>
  <div class="App">
  	<div class="hello">Hello {{ who }}</div>
  	<router-link to="/">首頁</router-link> <br>
  	<router-link to="/page2">page2</router-link>
	<router-view></router-view>
  </div>

  
</template>

<script>
export default {
  data() {
    return {
      who: 'Vue and Webpack !!'
    }
  }
};
</script>

<style scoped>
.hello {
  padding: .5em;
  font-size: 2em;
  background-color: #fcf;
}
</style>