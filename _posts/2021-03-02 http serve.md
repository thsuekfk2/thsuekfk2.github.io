---
title:  "[Node.js] Http Server "
excerpt: "Node.js HTTP서버 만들기"

categories:
  - Node
tags:
  - Node
last_modified_at: 2021-03-02
---
## Node.js HTTP서버 만들기



```javascript
const http = require("http"); //http모듈을 불러오기

const serve = http.createServer((req,res)=>{ 
	//서버가 들어오는 변수를 만들고, 들어오는 req 응답을 하는 res
    // console.log(req.url); requir로 url 받아오기
    res.write("<h1>Hello from node.js</h1>"); //request를 보내기
    res.end(); //응답이 잘 보내지면 res끝내기
});

serve.listen(3000,()=>{
    console.log("The server is listening on port 3000");
});
```





```javascript
const http = require("http");

const serve = http.createServer((req,res)=>{
  
    if(req.url == "/") {
        res.write("<h1>Hello from node.js</h1>");
    }else{
        res.write(`<h1>You have entered this url : ${req.url}</h1>`) 
        //서버의 url이 바뀌면 text가 바뀜
   
    }
    res.end();


});

serve.listen(3000,()=>{
    console.log("The server is listening on port 3000");
});
```

