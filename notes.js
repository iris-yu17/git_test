/NOTES/
參考:
https://gitbook.tw/chapters/github/push-to-github.html

-------- 全新開始 ------- 
// 建一個README.md，內容寫# test
echo "# test" >> README.md (建一個README.md，內容寫# test)

// 初始化這個目錄，主要目的是要讓Git 開始對這個目錄進行版本控制
git init

// git add 建立索引，加到暫存區
git add README.md(檔案名)  或  git add . (add所有檔案)

// 建立索引的檔案提交至本地資料庫 (Local Repository)
git commit -m "first commit"  (""內寫註解)

// 選擇分支
git branch -M master

// git remote 指令，顧名思義，主要是跟遠端有關的操作。
// add 指令是指要加入一個遠端的節點(origin)
// 在這裡的 origin 是一個「代名詞」，指的是後面那串 GitHub 伺服器的位置。
// 遠端的節點預設會使用 origin 這個名字，要叫別的名字也可以
git remote add origin https://github.com/iris-yu17/test.git

// push指令把master這個分支的內容，推向origin這個位置。
git push -u origin master (若沒有別的分支，直接git push就好)


-------- 上傳現存專案只要做下面2行 -------- 
git remote add origin https://github.com/iris-yu17/test.git
git push -u origin master (若沒有別的分支，直接git push就好)

steps: add -> commit -> push


git status可查狀態
git log 可查版本號碼
git checkout 版本號碼 -> 切換到某版本