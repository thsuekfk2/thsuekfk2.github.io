## Node.js MySQL 모듈 설치

```
npm install -s mysql
```



## MySQL 모듈 사용

```
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





```
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

```
npm install -s mysql
```

