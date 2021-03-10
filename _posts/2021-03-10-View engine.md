## Node.js  View engine

응답값을 줄때 데이터랑 html과 결합된 상태를 클라이언트에 보내줄때 ejs를 활용


서버에서 html을 줄때 적절한 데이터를 섞어 보낼 수 있다.

그러기 위해서 ejs 라이브러리를 설치해야한다. 

```
npm install ejs --save
```



ejs 를 사용하려면 모듈을 등록해줘야한다. 

```
app.set('view engine','ejs') 
```

 이 말은 "view engine은 ejs쓸래! ejs야! " 이런 뜻



email.ejs를 하나 만들어준다.

```
<html lang="en">
<head>
    <title>email ejs template</title>
</head>
<body>
    <h1>Welcome !! <%= email %> </h1> 
    // <%= ... %> 템플릿 마다 치환 데이터 영역이다. 이것이 치환이 되어 바뀌는 형태 가된다.
   <p>정말로 반가워요 ^^</p>

</body>
</html>

```





```
app.post('/email_post',function(req,res){
    console.log(req.body.email)
    res.render('email.ejs',{'email':req.body.email})
})
```

res.render를 써서 email.ejs에다가 {'emial':req.body.email} 객체, 오브젝트를 넣어준다. 

email.ejs에 데이터가 섞여서 emial을 찾아 req.body.email로 치환해줘서 클라이언트에 응답을 해준다. 



간단한 express 템플릿 엔진 ejs를 이용해서 데이터를 html과 섞을 수 있다.



------

<전체코드>



```
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var cors = require('cors')


app.listen(3000,function(){

    console.log("start,  express serve on port 3000");
});

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','ejs')
app.use(cors())

//url routing
app.get('/',function(req,res){
    // res.send("<h1>hi friend</h1>")
    res.sendFile(__dirname+"/public/main.html")
})

app.get('/main',function(req,res){
    res.sendFile(__dirname+"/public/main.html")
})

app.post('/email_post',function(req,res){
    console.log(req.body.email)
    // res.send("post response!")
    //res.send("<h1> welcome! " + req.body.email + "</h1>" )
    res.render('email.ejs',{'email':req.body.email})
})

app.post('/ajax_send_email',function(req,res){
    console.log(req.body.email)
    var responseData = {'result' : 'ok' , 'email' : req.body.email}
    res.json(responseData)
    })
```

```
<!doctype html>
<head>
    <meta charset="utf-8">
    <title>email ejs template</title>
</head>
<body>
    <h1> Welcome !!  <%= email %> </h1>
    <p>정말로 반가워요 ^^</p>
    
</body>
</html>
```

