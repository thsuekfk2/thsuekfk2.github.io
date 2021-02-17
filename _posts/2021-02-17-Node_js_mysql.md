---
title:  "[Node.js] MySQL Usage "
excerpt: "Node.js MySQL 모듈 설치"

categories:
  - SQL
  - Node.js
tags:
  - SQL
  - Database
  - Node.js
last_modified_at: 2021-02-15
---

## Node.js MySQL 모듈 설치

```javascript
npm install -s mysql
```



## MySQL 모듈 사용

```javascript
var mysql      = require('mysql');
// 비밀번호는 별도의 파일로 분리해서 버전관리에 포함시키지 않아야 합니다.

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '111111',
  database : 'opentutorials'
});
  
connection.connect();
```

 connection.connect()가 실행되면 데이터서버에 연결되어 서버 내 정보를 활용 할 수 있게 된다.





```javascript
connection.query('SELECT * FROM topic', function (error, results, fields) {
    if (error) {
        console.log(error);
    }
    console.log(results);
});
  
connection.end();
```

위의 코드에서는 results에 **'SELECT \* FROM topic'**의 값이 담긴다. 세 번째 인자인 fields에는 반환된 results의 field 정보가 담긴다.



------



## 터미널에서 node webserve.js실행

```javascript
node test.js
```




## 터미널에서 실행 예제


![이미지 4](https://user-images.githubusercontent.com/76821963/108094938-ab030400-70c2-11eb-86aa-3e2940acb7d2.png)


결과


![이미지 5](https://user-images.githubusercontent.com/76821963/108095042-c968ff80-70c2-11eb-9ebb-6bc046cbf6a0.png)

