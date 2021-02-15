---
title:  "[SQL] AUTO_INCRMENT"
excerpt: "auto_increment"

categories:
  - SQL
tags:
  - SQL
  - Database
last_modified_at: 2021-02-15
---

데이터베이스에서 데이터를 식별할 수 있는 **key**가 필요하다.

Primary Key를 지정하더라고 필수로 입력해야 하고 중복이 되면 안되기 때문에

이것을 해결 해 줄 수 있는 제약조건이 필요하다. 이것이 바로 AUTO_INCRMENT 이다.



**AUTO_INCRMENT**

```
CREATE TABLE 'test'(
'num' int(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
'name' varchar(10) NOR NULL
);
```

또는

```
CREATE TABLE 'test'
('num' int(10) auto_increment ,
   PRIMARY KEY (c_idx)  
);
```

데이터가 삽입될 때 1부터 시작하여 1씩 증가한 값을 알아서 넣어준다.


데이터를 추가해보면 


![이미지 1](https://user-images.githubusercontent.com/76821963/107962385-3c527780-6fea-11eb-8118-51252e883426.png)



값을 넣어준다.


![이미지 2](https://user-images.githubusercontent.com/76821963/107962466-555b2880-6fea-11eb-91d0-37b5f709cc6c.png)





결과는 다음과 같이 나온다.


![이미지 3](https://user-images.githubusercontent.com/76821963/107962490-5e4bfa00-6fea-11eb-9551-f1962cf8cad8.png)

