---
title:  "[Node.js] Express Middleware"
excerpt: "Node.js Express Middleware"

categories:
  - Node
  - Express
tags:
  - Node
  - Express
last_modified_at: 2021-03-02
---
## Node.js  Express Middleware

Middleware은 요청을 처리하기 전에  중간 역할을 하는 것이다.



서버와 요청 사이에 위치한다.



```javascript

const express = require("express"); 
const server = express(); //서버 작성

server.use((req,res,next)=>{

    // console.log("Hi from client"); 
    req.user = {
        id : "1234",
    };
    next();

}) 

server.get("/",(req,res)=>{ 
    console.log(req.user);
    res.sendFile(__dirname+"/index.html");
});


server.get("/about",(req,res)=>{ //get메소드에 about요청이 오면
    res.sendFile(__dirname+"/about.html") //현재 경로 이름과 파일을 나타내 준다.
});

server.use((req,res)=>{
    res.sendFile(__dirname+"/404.html");
});

//모든 값을 넣어지만 url을 찾을 수 없었다.
//현재 읽혀 지지 않는 파일이 오면 미들웨어를 사용해서 보내준다. 

server.listen(3000,(err)=>{ //우리의 포트 넘버 & 에러처리
    
    if(err) return console.log(err);
    console.log("Thes server is listening on port 3000");

});


```

server.use 함수는 서버의 모든 요청을 지나게 된다. 

만약 next()가 없으면 다음으로는 넘어 갈 수 없다. 
따라서 next를 써주면 처리를 해주고 다음으로 넘어가게 된다.

위의 코드는 요청이 들어오면 object가 완성되고 다음으로 넘어가 get을 처리한다.



미들웨어는 서버를 마지막으로 처리하기전에 추가적으로 해야하는 작업을 처리할 수 있다.

따라서 sever.use를 많이 사용한다. 



예를 들어 

모든 값을 넣어지만 url을 찾을 수 없게 되면  즉, 현재 읽혀 지지 않는 파일이 오면 미들웨어를 사용해서 404페이지를 보내준다. 



index.html

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/index.css"/>
    <title>Home</title>
</head>
<body>
    <h1 class="red">This is home</h1>
</body>
</html>
```



index.css

```
.red{
    color : red;
}
```

만약 index.html 파일에 css를 link해주면 색깔은 변하지 않는다.

이유는 css파일의 위치를 알지 못하기 때문이다.

따라서 css파일의 위치를 알려주기 위해 미들웨어를 사용한다.



```javascript
const express = require("express"); 
const server = express(); //서버 작성

server.use(express.static(__dirname + "/public"));

server.get("/",(req,res)=>{ 
    console.log(req.user);
    res.sendFile(__dirname+"/index.html");
});

server.get("/about",(req,res)=>{ 
    res.sendFile(__dirname+"/about.html") 
});

server.use((req,res)=>{
    res.sendFile(__dirname+"/404.html");
});


server.listen(3000,(err)=>{ 
    
    if(err) return console.log(err);
    console.log("Thes server is listening on port 3000");

});


```

 static은 어떤 파일의 있는 text파일을 읽을 때 사용한다.

원하는 값을 public 폴더에 넣어준다. 

그러면 이제 우리가 불러오는 모든 파일의 출처는 소스는 public 폴더를 처음에 거치게 되고

index.css파일을 public에 넣어주면 서버는 public이라는 폴더를 제일 먼저 확인하게 되어 index.css파일의 위치를 보내주게 된다.

localhost:3000을 확인하게 되면 색이 바뀌는 것을 알 수 있다.



