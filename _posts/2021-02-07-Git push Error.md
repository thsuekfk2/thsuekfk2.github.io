---
title:  "[git hub] SourceTree push Error"
excerpt: "push Error"

categories:
  - GitHub
tags:
  - GitHub
  - SourceTree
last_modified_at: 2021-02-07
---




소스트리에서 commit하고 git hub에  push를 하려 하자 이런 오류가 떴다.



```
git -c diff.mnemonicprefix=false -c core.quotepath=false --no-optional-locks push -v --tags origin master:master Pushing to https://github.com/내아이디/.git

```







### 해결

 

아래와 같이 입력 하면 강제로 push를 진행하게 된다. 

```
git push -u origin +master
```



Visual code Terminer 에 다음과 같이 입력하니 push가 잘 되었다.
