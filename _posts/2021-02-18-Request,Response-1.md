---
title:  "[Node.js] Request,Response - 1 "
excerpt: "POST 요청처리"

categories:
  - Node.js
tags:
  - Node.js
last_modified_at: 2021-02-18
---
## POST 요청처리

```html
<html lang="en">
<head>
    <title>email form</title>
</head>
<body>
    <form action="/email_post" method="post">
    email : <input type="text" name="email"><br/>
    <input type="submit">
    </form>
</body>
</html>
```

form.html 을 하나 만들고 

/email_post로 보내라고 명령.  근데 아직은 /email_post가 없다 - > /email_post 라우팅 처리를 해줘야한다.

get은 url에 담겨져서 보내지만 post는 서버로 보낸다.





```javascript
app.post('/email_post',function(req,res){
    res.send("post response")
}) 
```

이렇게 하면 form.html에서 전송을 누를 시 

서버에서 라우팅을 타서 text로 된 문자열이 온 것을 확인 할 수 있다. 

문제는 데이터를 받는 것인데

get 으로 데이터를 받으면 req.param('email') 이런식으로 사용할 수 있다.

하지만 post는 이런식으로 받을 수 없는데 **body-parser** 라는 모듈이 또 필요하다.

```
npm install body-parser --save
```





그리고 body-parser 을 사용하려면 모듈을 등록해줘야한다. 

```javascript
var bodyParser = require('body-parser')
```



또 express서버에 bodyParser 를 쓴다고 알려줘야한다.

```javascript
app.use(bodyParser.json()) //클라이언트에서 json형태로 올수있고
app.use(bodyParser.urlencoded({extended:true})) //post형태로 올 수 있다.
```





```javascript
app.post('/email_post',function(req,res){
    console.log(req.body.email)
    res.send("post response")
})
```

console.log(req.body)형태로 사용할 수 있다.

콘솔창에 object로 찍히는 것을 확인할 수 있다. 

따라서 (req.body.email)로 적어줘야한다. 





즉 지금까지는 클라이언트에서 전송된 form이 서버로 온 것이다. 

만약 클라이언트에서 보낸 응답을 가지고 어떤 html형태로 클라이언트에 응답을 주려면

```
app.post('/email_post',function(req,res){

    res.send("<h1> welcome! " + req.body.email + "</h1>" )
})
```

로 가능하다.

