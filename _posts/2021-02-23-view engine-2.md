---
title:  "[Node.js] view engine "
excerpt: "express 템플릿 엔진 ejs"

categories:
  - Node.js
tags:
  - Node.js
last_modified_at: 2021-02-23
---
## express 템플릿 엔진 ejs

ejs는 응답값을 주거나 데이터랑 html이 결합된 상태를 클라이언트에 보내줄 때 활용된다.

즉, 서버에 html을 보내줄 때 적절한 데이터를 섞어 보낼 수 있다.

그러기 위해서 ejs 라이브러리를 설치해야한다. 

```
npm install ejs --save
```





```javascript
app.set('view engine','ejs')
```

view engine은 ejs쓸래! 

view engine가 ejs야! 이말이다.





email.ejs를 만들어 준다.

```html
<html lang="en">
<head>
    <title>email ejs template</title>
</head>
<body>
    <h1>Welcome !! <%= email %> </h1> 
    
   <p>정말로 반가워요 ^^</p>

</body>
</html>
```

<%= ... %> 는 템플릿 마다 치환 데이터 영역이다. 

이것이 치환이 되어 바뀌는 형태가 된다.





```javascript
app.post('/email_post',function(req,res){
    console.log(req.body.email)
    res.render('email.ejs',{'email':req.body.email})
})
```

res.render() 함수를 써서 email.ejs에다가 {'emial':req.body.email} 객체, 오브젝트를 넣어준다. 

email.ejs에 데이터가 섞이고

emial을 찾아 req.body.email로 치환해줘서 클라이언트에 응답을 해준다. 


