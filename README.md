# vue-webpack-SPA-StepByStep
# 手把手建立Vue-SPA開發環境

## 前言

在之前我們已經了解如何利用Webpack去打造一個Vue的開發環境。

如果你想複習： 

* github請點[https://github.com/yichunsung/webpack-vue-manual_configuration](https://github.com/yichunsung/webpack-vue-manual_configuration)

* 我的個人網站文章[]()

* Devs.tw : [https://devs.tw/post/60](https://devs.tw/post/60)

## 安裝 Express

1. 安裝 Express.js

```bat
npm install express
```

建立一個server入口 app.js

```javascript
// 載入Express 套件
const express = require("express");

// 建立 express application 物件
let app = express();


/*

載入靜態頁面

*/
app.use(express.static(__dirname +"/dist"));

// 首頁
app.get('/', function(req, res){
	res.sendFile(__dirname+'/dist/index.html');
	
});

// 啟動伺服器在 http://localhost:8080/

let port = process.env.PORT || 8080;

app.listen(port, function(){
	console.log("Start")
});


```

2. 啟動伺服器

```bat
node app.js
```

## 安裝 vue-router

```bat

npm install vue-router

```

1. 在src資料夾中新增一個資料夾***router*** ，並創立一個```router.js```

2. 並在src資料夾中創建一個資料夾components，這個資料夾專門放置vue子元件。

* router.js ：

```javascript

import Vue from 'vue'
import Router from 'vue-router'

// Coding
Vue.use(Router);

```

3. 新增一個子元件 ```testComponent.vue```

```vue

<template>
	<div id="testComponent">
		I'm a {{name}}.
	</div>


</template>
<script>
	export default {
		data(){
			return{
				name:"component"
			}
		}
	}

</script>
<style></style>

```

4. 回到 ```router.js``` ， 引入該元件

```javascript

import Vue from 'vue'
import Router from 'vue-router'

// Components
import testComponent from '../components/testComponent.vue';

// Coding
Vue.use(Router);

export default new Router({

	routes: [
	    {
			path: '/',
			name: 'testComponent',
			component: testComponent
	    }
	    
	    
	]	   
});

```

5. 回到 ```index.js``` ，引入router.js

```javascript
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

```

6.  在App.vuea的 ```<template></template>```中，插入```<router-view></router-view>```

```vue
<template>
  <div class="App">
  	<div class="hello">Hello {{ who }}</div> <br>
  	<router-view></router-view>

  </div>
</template>


```

7. 重新打包

```bat
npm run build
```

8. 啟動伺服器後，觀察vue-router是否有作用。

```bat
node app.js
```

9. 如果沒問題，就再建立一個新的子元件 page2.vue

```vue
<template>
	<div id="page2">
		I'm a {{name}}.
	</div>


</template>
<script>
	export default {
		data(){
			return{
				name:"page2"
			}
		}
	}

</script>
<style></style>


```

10. 插入新元件於**router.js**

```javascript

import Vue from 'vue'
import Router from 'vue-router'

// Components
import testComponent from '../components/testComponent.vue';
import page2 from '../components/page2.vue';
// Coding
Vue.use(Router);

export default new Router({

	routes: [
	    {
			path: '/',
			name: 'testComponent',
			component: testComponent
	    },
	    {
	    	path: '/page2',
			name: 'page2',
			component: page2
	    }
	    
	    
	]	   
});
```

11. 調整一下**App.vue**，加入超連結去切換頁面，依照官方文件，建議使用```<router-link></router-link>```取代```<a></a>```

```vue
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
```

重新打包後，可以看到完成結果。




## 再設定Webpack

在package.json中加入 watch, deploy

* watch : 監視隨時更改中的code，不用一直重複build

* deploy : 打包成正式上線版本（含壓縮程式碼）

```json

"scripts": {
	"watch": "webpack --mode development --watch",
	"build": "webpack --mode development",
	"deploy": "webpack --mode production",
}

```