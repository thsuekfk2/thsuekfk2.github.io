---
title:  "[SQL] COUNT/AS "
excerpt: "COUNT()함수와 필드명 변경 AS절 "

categories:
  - SQL
tags:
  - SQL
last_modified_at: 2021-02-23
---

## MySQL COUNT 함수 

```sql
SELECT * FROM studentTBL WHERE user_id = "lee";
```

*studentTBL 테이블에서 id가 "lee"인 전체 컬럼을 찾아라.*



```sql
SELECT COUNT(*) FROM studentTBL WHERE user_id = "lee";
```

*studentTBL 테이블에서 id가 "lee"인 컬럼의 갯수를 찾아라.*





## MySQL AS (필드명 바꾸기 함수 )

```sql
SELECT COUNT(*) AS cmk FROM studentTBL WHERE user_id = "hani";
```

MySQL AS 함수는 결과값을 반환할 때 필드명을 변경하여 표시한다.

*studentTBL 테이블에서 id가 "lee"인 컬럼의 갯수를 찾고, cmk로 필드명을 변경해라.*



![이미지 7](https://user-images.githubusercontent.com/76821963/108738125-a0d77e80-7576-11eb-89d7-0d610498f038.png)





## Node.js MYSQL 출력하기

```javascript
connection.query('select count(*) as cmk from studentTBL where user_id = "hani" and user_pass="hani"', function (error, results, fields) {
  if (error) {
      console.log(error);
  }
    for(s of results)
      console.log(s.cmk);
  
});
```

![이미지 8](https://user-images.githubusercontent.com/76821963/108739335-e47eb800-7577-11eb-9b62-7350dff1adcf.png)




```javascript
var user_id = "hong";
var user_pass = "hong";
connection.query('SELECT count(*) as cmk FROM studentTBL WHERE user_id=? and user_pass=?',[user_id,user_pass], function (error, results, fields) {

  if (error) {
    console.log(error);
  }
  if(results[0].cmk==1)
    console.log("회원 정보 일치");
  else 
    console.log("회원 정보 불일치");
```


![이미지 9](https://user-images.githubusercontent.com/76821963/108831975-3a9e3a80-760e-11eb-895d-5969d3d5f6e7.png)

