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
