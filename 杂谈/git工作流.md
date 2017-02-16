# git工作流

> 前言： git作为日常开发的协作工具，对齐进行深入了解是必不可少的。

- git branch 查看分支/ git branch branch_name
- git stash 将文件放人暂存区
- git stash pop 将文件从暂存区弹出
- git show 显示代码变动对比
- git log 显示提交历史
- git reset --hard abe6af4aa48aaf4003ddf40593b44e9d69d03645 恢复某一时期代码
- git checkout -b branch-xx 创建并切换到branch-xx分支
- git push origin master或者git push origin branch-xx 推送分支
- git pull 全部更新
- git reset –hard h13ds26 回到本地仓库之前某一个状态，后面的hash值是HEAD
- git checkout -b branch-xx origin/remote-branch-xx 拉取远程分支到本地
- git clone https://github.com/Gotjoy/Gotjoy.github.io.git 从远程主机克隆一个版本库

当然我最常用的命令（万能提交代码）：

```javascript
git add .
git commit -m "Your commit message"
git push origin master
```

---

#### 参考学习资料

- [Git工作流指南：Pull Request工作流](http://blog.jobbole.com/76854/)
- [Git Documentation](https://git-scm.com/doc)