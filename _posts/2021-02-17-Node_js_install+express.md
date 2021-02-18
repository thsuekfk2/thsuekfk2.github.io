## NPM install

```
npm init
```

설치하면 package.json이 생긴다.

npm으로 설치하면 다른쪽에서 node프로젝트를 받아서 사용할 수 있다.



## express node install 

```
npm install express --save
```

save는 설치된 정보를 나중에 패키지를 받아도 자동으로 설치할 수 있도록 한다.





## nodemon install

```
npm install nodemon --g
```

nodemon은 node 를 다시 실행하기 귀찮으니까 자동으로 파일의 변화를 감지해서 노드를 올려준다. 





------

## Express 기반 웹 서버 구동

```
var express = require('express') 
var app = express()
app.listen(3000,function(){

    console.log("start,  express serve on port 3000");
});

	console.log("end server");

```

require는 node_modules 에 있는 express에 있는 파일을 가져와서 파일에 있는 함수를 불러올 수 있다.

express 함수를  app이라는 객체에 함수 정보를 담아놓는다.

그리고 listen()함수로  3000포트 실행 시킨다. 



노드는 비동기로 동작된다. 

즉,  서버가 동작될때까지 기다리는것이 아니라 바로 아래가 실행되므로 위 코드 실행 결과는 콘솔창에 end server가 먼저 띄워진 후 그 다음 start,  express serve on port 3000가 띄워진다.



## URL routing 처리

```

app.get('/',function(req,res){
    // res.send("<h1>hi friend</h1>")
    res.sendFile(__dirname+"/public/main.html")
})

```

get함수를 이용해서 함수를 적어서 콜백함수를 만든다.

res.send함수를 이용 브라우저에 띄울 수 있다.





```
app.get('/main',function(req,res){
    res.sendFile(__dirname+"/public/main.html")
})
```

main.html파일을 만들어서 띄워주기 위해선 다음과 같이 쓴다.

res.sendFile()함수를 써서 클라이언트에 보내준다. 

이때 절대경로를 써주기는 매우 힘드므로 __dirname를 사용하면 현재 절대경로를 표현해줄 수 있다. 





## static directory 설정

```
app.use(express.static('public'))
```

js, css , image 같은파일은 정적인 변경되지 않는 static파일이라고 하는데 요청 받는 대로 자동으로 처리하기 위해서는 static 디렉토리를 express에 등록해야한다. 

따라서 app.use함수를 써서 express한테 public 디렉토리를 static으로 등록해주라고 요청한다.





