const user = {
  hoTen: "neko",
  tuoi: 18,
  gioiThieu() {
    //có sử dụng this. this ở đây là object user
    console.log(` Tôi là ${this.hoTen}, ${this.tuoi} tuổi`);
  },
};
//khi gọi user.gioiThieu() -> kẻ đứng trước dấu chấm = user -> this = user

user.gioiThieu();

const sanPham = {
  ten: "iphone 15",
  gia: 2500000,
  soLuong: 10,
  inThongTin() {
    console.log(this);
    console.log(this.ten);
    console.log(this.gia);
  },

  giamGia(phanTram) {
    this.gia = this.gia * (1 - phanTram / 100);
    console.log(`${this.ten} sau giảm giá: ${this.gia.toLocaleString()}đ`);
  },
};
sanPham.inThongTin();
sanPham.giamGia(20);
///
function inRaThis() {
  console.log(this);
}

inRaThis();

const sanPham2 = {
  ten: "iphone 00",
  inten: () => {
    console.log(`Tên là ${this.ten}`);
  },
};

sanPham2.inten();
sanPham2.intenDung();

//Nhueng nếu bên trong có callback
const giohang = {
  items: ["chuột", "bàn phím", "màn hình"],
  inDanhSach() {
    console.log(`giỏ Hàng ${this.items.length} sản phẩm`);
    //function thường bên rogn forEach ->

    this.items.forEach(function (item) {
      console.log(`${item} (giỏ ${this.items.length})`);
    });
  },
  inDanhSachDung() {
    this.items.forEach((item) => {
      console.log(`${item} (giỏ ${this.item.length})`);
    });
  },
};

giohang.inDanhSach();
giohang.inDanhSachDung();
// -> gọi qua object -> this = giohang
//this.items.forEach(function())-> bên trong forEach JS alfm gì???
// nó gọi callBack(item) -> gọi KHƠI KHƠI -> không có ai.callback()

//bên trong forEach hoạt động đơn giản là
// for (let i = 0; i < arr.length; i++) {
//   callback[arr[i]]; -> gọi khơi khơi ko có obj phái trước _>
// }

const boDem2 = {
  ten: "Click Counter",
  soLan: 0,
  dem() {
    this.soLan++;
    console.log(`${this.soLan} lần`);
  },
};

boDem2.dem();
//gán methos vào một biến mới
const hamTach = boDem2.dem;
//lúc này hamTach chứa các hàm nhưng lại bị mất liên kết với boDem
//giống như việc photocopy nhưng bản copy khong biết thuộc về ai
hamTach();
//this sẽ bị mất khi truyền callback

//TỔNG KEETA ARROW FUNCTION SẼ GIÚP FIX VIỆC CALLBACK
