
## 参考文档
  1. [git 修改已提交日志](https://gitee.com/help/articles/4198#article-header1)
2. 
## 修改最后一次日志
### 1、执行命令，在下一界面修改 message
```shell
  git commit --amend
```


#### 2、修改后可直接推送
```shell
  git push
```

## 修改多条日志
### 1、执行命令，最后数字代表最后几次提交
```shell
  git rebase -i HEAD~3
```
### 2、在下一界面将 pick 改成 e 或 eidt 后保存退出

### 3、根据提示执行
```shell
    git commit --amend
    git rebase --continue
 ```


git log --pretty=format:"%h %s" HEAD~3..HEAD