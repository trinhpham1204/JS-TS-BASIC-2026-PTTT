GIT -> giúp mình lưu nhiều phiên bản của project theo thời gian
login.js 2 dòng
login-final.js 5 dòng
login-final-new.js
Git sẽ lưu lịch sử project của chúng ta theo 1 cách sạch hơn
Commit 1: tạo form login
Commit 2: validate email
Ưu điểm:
KO sợ hỏng code, vì có lịch sử để uqay lại
có thể học đc cách chia nhỏ công việc thành từng bước
đưa code lên github để lưu trữ và chia sẻ
quen flow của team: branch, pull request, review, merge

Mỗi lần commit (lưu lịch sử ) -> git nó lưu lại cái gì:
file nào thay đổi
nội dung thay đổi là gì
ai commit
thời điểm commit
commit message (lí do commit)
commit trước đó là commit nào

luồng lịch sử
A -> B -> C -> D
A: tạo project
B: thêm login
C: sửa validation

Các khu vực quan trọng mà mn cần lưu ý
working directory : folder project trên máy

staging area: vùng chuẩn bị commit -> nơi bạn chọn file nào sẽ commit tiếp theo

local repository: folder .git trên máy (nơi lưu lịch commit local)

remote repository: github/gitlab/bitbucket -> nơi lưu bản online
