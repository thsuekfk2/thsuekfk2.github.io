---
title:  "[SQL] MySQL Usage "
excerpt: "dos mysql Usage"

categories:
  - SQL
tags:
  - SQL
  - Database
last_modified_at: 2021-02-15
---

## MySQL Usage



```sql
mysql> show databases; 

--생성된 이름을 보여준다
```





```sql
mysql> create schema company; 

 --company라는 DB 를 생성한다 
```





```sql
mysql> create database company;

 --company라는  DB 를 생성한다
```







```sql
mysql> show databases; 

 --company DB가 새로 생성되었는지 확인한다
```







```sql
mysql> use company; 

--생성된 여러 중에 사용할 DB를 선택한다
```







```sql
mysql> show tables; 

--DB 내에 table들을 보여준다
```







```sql
mysql> create table .... ; 

--table 을 생성한다
```







```sql
mysql> show tables; 

--table이 새로 생성되었는지 확인한다
```







```sql
mysql> describe employee; 

 #employee table 의 정보를 보여준다
```



