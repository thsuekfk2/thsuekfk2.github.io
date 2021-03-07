## Node.js  Express HTML 보내는 방법

express 를 이용해서 메소드를 이용해 파일을 보내는 방법을 알아본다. 



index.html 과 about.html 파일을 만들어 준다.



```
const express = require("express"); 
const server = express(); //서버 작성

server.get("/",(req,res)=>{ 
   
    res.sendFile(__dirname+"/index.html");
});


server.get("/about",(req,res)=>{ //get메소드에 about요청이 오면
    res.sendFile(__dirname+"/about.html") //현재 경로 이름과 파일을 나타내 준다.
});

server.listen(3000,(err)=>{ //우리의 포트 넘버 & 에러처리
    
    if(err) return console.log(err);
    console.log("Thes server is listening on port 3000");

});
```

__dirname 은 자신의 파일 경로를 알 수 있다.__

filename 현재 실행되는 파일 이름을 얻을 수 있다.



index에 css파일을 link로 연결하면 연동이 되지 않는데,

 이유는 index에 있는 css파일을 찾을 수 없기때문이다.

이를 해결하기위해 Middleware를 통해 css파일을 보낸다.

 





