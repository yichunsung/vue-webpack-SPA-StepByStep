import Vue from 'vue';
import App from './App.vue';
import router from './router/router.js';

new Vue({
  el: '#app',
  mounted : function(){
  	console.log('Hello Webpack and Vue !');	 
  },
  router,
  components:{
  	App
  },
  template: '<App />'
});