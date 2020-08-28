/NOTES/

echo "# test" >> README.md
git init
git add README.md(檔案名)  或  git add . (add所有檔案)
git commit -m "first commit"  (""內寫註解)
git branch -M master    (選擇分支)
git remote add origin https://github.com/iris-yu17/test.git
git push -u origin master (若沒有別的分支，直接git push就好)


steps: add -> commit -> push


git status可查狀態
git log 可查版本號碼
git checkout 版本號碼 -> 切換到某版本