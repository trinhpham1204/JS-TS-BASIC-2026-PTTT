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

Các bước để đẩy code lên remote repository
B1: Khởi tạo git trong folder hiện
git init
Ý nghĩa: làm lần đầu tiên và duy nhất -> sau lệnh này git sẽ tạo rra 1 folder ẩn tên là .git
-> là nơi lưu lịch sử thay đổi của project. bình thường mình ko cần mở hoặc sửa trực tiếp folder này
Initianilzed -> khởi tạo xong
empty Git repository -> lịch sử đang rỗng vì chúng ta chưa commirt lân fnaof
-B2: kiểm tra trạng thái file
git status
nói đơn giản: git đã đc bật tổng folder -> nhưng chưa tạo mốc lưu đầu tiên
B3: git add tên filder hoặc tên folder
git add . -> chọn tất cả các file đang thay đổi trong project
B4: tạo commit đầu tiên
git commit -m "nội dung mô tả commit"
B5: đặt tên nhánh chính là main (vì github đặt tên nhánh chính là main)
git branch -M main
B6: gắn folder này với remote repossiory trên git
nối git ở local với remote repo để chia sẻ code
git remote add origin ....đường link remote repositry
git remote add origin https://github.com/meomew-auto/JS-TS-BASIC-202603.git
-> sau này push (đẩy code) thì đẩy code lên đâu

B7: push đẩy code
lần đầu tiên chưa đẩy code -> ta thiết lập upstream cho branch local hiện tại với remote
git push -u origin main
-u: upstream
origin là tên ngắn của repo github mà mình đã gắn vào

có nhiều môi trường
dev: main -> nhánh này là nhánh chính chạy ổn định -> khi làm việc người ta sẽ tạo ra 1 nhánh khác để làm việc để ko ảnh hưởng tới nhánh chính đang sử dụng -> sau khi code ổn định ở nhánh phụ -> chúng ta mới merge code -> vào nhánh chính -> để bổ sung thêm tính năng
uat: main1

Cách đặt tên commit

- khi project có nhiều cmmit -> mình cần nhìn lịch sử để biết

* hôm đó sửa gì
* ai sửa
* sả thêm tính năng gì

- Công thức đơn giản nhất đặt tên

* động từ + nội dung thay đổi

ví dụ
add login test
fix login validation
update git lesson
remove unused locator
cách chuyên nghiệp L khi quen hơn ta có thể dùng
type: nội dung thay đổi
feature(chức năng mới)

docs: update git lesson
feat: add product search flow
test: add login test
fix: correct login selector
