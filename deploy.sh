#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'
# git remote add origin git@github.com:YuArtian/yuartian.github.io.git

# git pull --rebase origin master
# git push

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:yuartian/yuartian.github.io.git master
# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:yuartian/<REPO>.git master:gh-pages

cd -