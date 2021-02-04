---
title:  "vue Router"
excerpt: "vue Router"

categories:
  - Vue
tags:
  - Vue
last_modified_at: 2021-02-04
---

# Router?

Router 를 알기전에 Routing을 알아야한다.

Routing이란 웹 페이지 간의 이동 방법을 말하고 SPA(Single Page Application) 에서 주로 사용한다.



[^SPA]: SPA란? 싱클 페이지 애플리케이션 : 페이지를 이동할 때마다 서버에 웹 페이지를 요청하여 새로 갱신하는 것이 아니라 미리 해당 페이지들을 받아놓고 페이지 이동 시에 클라이언트의 라우팅을 이용하여 화면을 갱신하는 패턴을 적용한 애플리케이션 이다.



라우팅을 하면 화면간의 전환이 매끄럽고 애플리케이션의  사용자의 경험을 향상 시킬 수 있다. 



**뷰라우터**

```
<router-link to"URL값">
```

페이지 이동 태그. 화면에서 < a > 로 표시되며 클릭하면 to에 지정한 URL로 이동합니다.



```
<router-link to="/main">MAIN 컴포넌트로 이동</router-link>
```

페이지 표시 태그. 변경되는 URL에 따라서 해당 컴포넌트를 뿌려주는 영역입니다.



------



**Path를 통한 값 전달 **

```
this.$router.push('/orderexec?status='+value)
```



**전달 받은 컴포넌트에서 파라미터로 읽는 법 **

```
this.$router.query.{status}
```



------



**Params를 이용한 전달 방법 **

```
this.$router.push({name:"NAME",params : {status:value}})
```



**전달 받은 컴포넌트에서 파라미터로 읽는 법 **

```
this.$router.params.{status}
```

주의 : reload시 사라짐



