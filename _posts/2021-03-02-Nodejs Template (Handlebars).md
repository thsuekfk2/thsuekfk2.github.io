# Nodejs Template (Handlebars)

app.js를 바꿀 때 마다 서버를 정지 시키고 다시 서버를 실행 시키고 했는데

이것을 줄이기 위해  nodemon을 사용한다. 

npm install nodemon --save -dev (오직 개발모드에만 실행이 되도록 ) 으로 모듈을 설치해준다.

개발 완료 후 실제 프로덕션에 보내면 nodemon은 다운로드가 되지 않는다.



```
npm init -y 
```

모든 프로젝트에 관한 라이브러리 기록이 남게 된다.



package.json 에서

```
  "scripts": {
    "dev": "nodemon app.js"
  },
```

이와 같이 수정해주면  npm run dev로 터미널을 실행하면

노드몬이 실행되는 것을 알 수 있다.

코드를 수정 후 저장하면 변형되는 파일을 바로 재실행 되면서 볼 수 있다. (편리하게 개발 가능)



```
npm install express-handlebars
```

express-handlebars 패키지를 설치해준다.



```
const hbs = require("express-handlebars");
```

라이버리를 불러오는 변수 





```

const express = require("express"); 
const server = express(); //서버 작성
const hbs = require("express-handlebars");


server.engine("hbs", hbs({ //hbs을 views에서 알 수 있게 

    extname: "hbs",
    defaultLayout : "layout.hbs",
    partialsDir: "partials",

}));

server.set("view engine","hbs"); //view engin 은 hbs를 사용

server.use(express.static(__dirname + "/public"));


server.get("/",(req,res)=>{
    res.render("home",{
    message : "Hello from node js"
    });
});


server.listen(3000,(err)=>{ 
    
    if(err) return console.log(err);
    console.log("Thes server is listening on port 3000");

});


```



server.engine으로  hbs설정 한다.이는 hbs 사용할것을 나타낸다.

hbs = Handlebars 는 html처럼 생겨서 html파일을 node.js에서 자유롭게 바꿀수 있게 도와준다.

```
<views폴더 구조>

views

	​	home.hbs

	​	layouts

		​	laoyout.hbs

	​	partials


```

모두 views라는 폴더에 들어가게된다.

defaultLayout은 기본 레이아웃으로 layout.hbs을 보여준다.

partials는 부분적인 html파일을 넣을때 사용한다. 



home.hbs

```
<h1>{{ message }}</h1>
```



layout.hbs

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    {{{ body }}}
</body>
</html>
```

각 hbs파일에 이렇게 작성해주면 

localhost:3000 화면에 layout.hbs 에 기본 레이아우싱 나오고 

{{{body}}}에는 home.hbs가 들어가게 된다.

home.hbs에 {{ message }}는 

```
server.get("/",(req,res)=>{
    res.render("home",{
    message : "Hello from node js"
    });
});
```

이 코드의 message가 들어가게 된다.