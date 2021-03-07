---
title:  "[Node.js] Node.js Express (get)"
excerpt: "Node.js Express로 서버 만들기(GET방식)"

categories:
  - Node
  - Express
tags:
  - Node
  - Express
last_modified_at: 2021-03-02
---
## Node.js Express로 서버 만들기(GET방식)

express 모듈 사용

```
npm i express
```



express 불러오고 서버 접속

```javascript
const express = require("express"); //express 불러오기
const server = express(); //서버 작성

server.listen(3000,(err)=>{ //우리의 포트 넘버 & 에러처리
    
    if(err) return console.log(err);
    console.log("Thes server is listening on port 3000");

} );

```

우리가 서버를 요청할때 그냥 가는것이 아니라 중요한 메소드를 사용한다.

GET,POST ,DELETE, PUT 4가지 메소드가 있는데 



Get 주로 경로의 서버를 요청할때 사용한다.

POST 는 아이디 비밀번호라는 값을 넣을때 그 값이 서버로 보내질때는 간단하게 값이 존재하는 지 클라이언트에 보내준다. 클라이언트는 값을 보고 처리한다. POST는 주로 데이터를 주는 경우 사용한다.



DELETE는 현재 존재하는 유저를 지울때 사용한다.ex, 탈퇴



PUT 업데이트의 개념이다.  ex)프로필 업데이트



```javascript
server.get("/",(req,res)=>{ //작업 하고 싶은 url에 맞추어서 요청 응답한다.

    res.send("<h1>Hello from node.js</h1>")
});
```
