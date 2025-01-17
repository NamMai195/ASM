var danhmuc = [
  { id: 1, name: "Các Loại Cún Cưng" },
  { id: 2, name: "Các Loại Mèo" },
  { id: 3, name: "Các Loại Chuột " },
  { id: 4, name: "Các Loại Thỏ" },
  { id: 5, name: "Đồ Chơi Cho Thú" },
  { id: 6, name: "Thức Ăn Cho Thú" },
  { id: 7, name: "Sản Phẩm và vệ sinh" },
];

const sanpham = [
  {
    id: 1,
    hinh: ["./img/cho/corgiy.png", "./img/cho/corgiy2.png"],
    name: "CORGIY",
    price: 7000000,
    iddm: 1,
  },
  {
    id: 2,
    hinh: ["./img/cho/gian.png", "./img/cho/gian2.png"],
    name: "Alaska giant",
    price: 1900000,
    iddm: 1,
  },
  {
    id: 3,
    hinh: ["./img/cho/goden.png", "./img/cho/goden2.png"],
    name: "GoDen",
    price: 7000000,
    iddm: 1,
  },
  {
    id: 4,
    hinh: ["./img/cho/husky.png", "./img/cho/husky2.png"],
    name: "HUSKY",
    price: 17000000,
    iddm: 1,
  },
  {
    id: 5,
    hinh: ["./img/cho/inu.png", "./img/cho/inu2.png"],
    name: "INU",
    price: 21000000,
    iddm: 1,
  },
  {
    id: 6,
    hinh: ["./img/cho/siba.png", "./img/cho/siba2.png"],
    name: "SIBA",
    price: 22700000,
    iddm: 1,
  },
  {
    id: 7,
    hinh: [
      "https://toplist.vn/images/800px/meo-munchkin-1028256.jpg",
      "https://toplist.vn/images/800px/meo-munchkin-577876.jpg",
    ],
    name: "Mèo Munchkin",
    price: 2700000,
    iddm: 2,
  },
  {
    id: 8,
    hinh: [
      "https://toplist.vn/images/800px/meo-exotic-1028263.jpg",
      "https://toplist.vn/images/800px/meo-exotic-577884.jpg",
    ],
    name: "Mèo Exotic",
    price: 2700000,
    iddm: 2,
  },
  {
    id: 9,
    hinh: [
      "https://toplist.vn/images/800px/meo-bengal-577877.jpg",
      "https://toplist.vn/images/800px/meo-bengal-577878.jpg",
    ],
    name: "Mèo Bengal",
    price: 2700000,
    iddm: 2,
  },
  {
    id: 10,
    hinh: [
      "https://toplist.vn/images/800px/meo-somali-1028247.jpg",
      "https://toplist.vn/images/800px/meo-somali-1028249.jpg",
    ],
    name: "Mèo Somali",
    price: 2700000,
    iddm: 2,
  },
  {
    id: 11,
    hinh: [
      "https://toplist.vn/images/800px/meo-ragdoll-12020.jpg",
      "https://toplist.vn/images/800px/meo-ragdoll-577879.jpg",
    ],
    name: "Mèo Ragdoll",
    price: 2700000,
    iddm: 2,
  },
  {
    id: 11,
    hinh: [
      "https://toplist.vn/images/800px/meo-siamese-1028235.jpg",
      "https://toplist.vn/images/800px/meo-siamese-577885.jpg",
    ],
    name: "Mèo Siamese",
    price: 2700000,
    iddm: 2,
  },
  {
    id: 12,
    hinh: [
      "https://lolipet.net/wp-content/uploads/teddy-2.jpg",
      "https://i.ytimg.com/vi/HbIfNDecKTQ/maxresdefault.jpg",
    ],
    name: "Chuột Lang Teddy",
    price: 2700000,
    iddm: 3,
  },
  {
    id: 13,
    hinh: [
      "https://toigingiuvedep.vn/wp-content/uploads/2021/10/hinh-anh-chuot-hamster-xinh-xan.jpg",
      "https://freenice.net/wp-content/uploads/2021/10/Hinh-anh-chuot-Hamster.jpg",
    ],
    name: "Hamster Gấu",
    price: 2700000,
    iddm: 3,
  },
  {
    id: 14,
    hinh: [
      "https://th.bing.com/th/id/R.aba1cfeb4d5f9dfe20a9e336df4c393e?rik=kHaII50d3JIqVA&pid=ImgRaw&r=0https://cdn.webshopapp.com/shops/36856/files/391798175/campbelli-dwerghamster.png",
      "https://freenice.net/wp-content/uploads/2021/10/Hinh-anh-chuot-Hamster.jpg",
    ],
    name: "Hamster Campbell’s",
    price: 2700000,
    iddm: 3,
  },
  {
    id: 15,
    hinh: [
      "https://th.bing.com/th/id/R.9b36e8509af102f02e83b7559f87d88a?rik=KNQy6wVO3YZiaQ&pid=ImgRaw&r=0https://th.bing.com/th/id/R.7de6e9b8edb372b79943b154521426a0?rik=E3b92F4cbjIQfQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-k_GBkmaRF48%2fUpmQtrsC4ZI%2fAAAAAAAADgg%2fOayrpxGm16g%2fs1600%2frobo%2bhamster-Roborovski-hamster-Breeding-Roborovski-hamster.jpg&ehk=XD%2fDjoIyIYaHLVx3Y%2b%2fFRa459KDYFkWObHQPz9g3DSs%3d&risl=&pid=ImgRaw&r=0https://th.bing.com/th/id/OIP.czo-BUdbmHg8mdu_bFZYRAHaEV?rs=1&pid=ImgDetMainhttps://th.bing.com/th/id/OIP.B74x9b-f0T9BeckW4a7kjwHaE8?rs=1&pid=ImgDetMainhttps://pikapet.net/wp-content/uploads/2019/11/zSlV5u9l.jpg",
      "https://mew.vn/wp-content/uploads/2021/03/chuot-hamster-robo-1-300x300.jpg",
    ],
    name: "Hamster Robo",
    price: 2700000,
    iddm: 3,
  },
  {
    id: 16,
    hinh: [
      "https://pettot.com/wp-content/uploads/2022/08/tho-su-tu-Pettot-1.jpg",
      "https://pettot.com/wp-content/uploads/2022/08/tho-su-tu-Pettot-1.jpg",
    ],
    name: "Thỏ sư tử màu đẹp giá tốt",
    price: 2700000,
    iddm: 4,
  },
  {
    id: 17,
    hinh: [
      "https://pettot.com/wp-content/uploads/2022/08/tho-Ha-Lan-lun-Pettot-6.jpg",
      "https://pettot.com/wp-content/uploads/2022/08/tho-Ha-Lan-lun-Pettot-4.jpg",
    ],
    name: "Thỏ Hà Lan lùn trắng đẹp",
    price: 2700000,
    iddm: 4,
  },
  {
    id: 18,
    hinh: [
      "https://pettot.com/wp-content/uploads/2022/07/anh-tho-canh-su-tu-ha-noi-gia-re-chat-luong-tai-ha-noi.jpg",
      "https://pettot.com/wp-content/uploads/2022/07/hinh-anh-tho-canh-su-tu-mau-vang-nhat-dep-gia-re.jpg",
    ],
    name: "Thỏ sư tử màu vàng nhạt đẹp",
    price: 2700000,
    iddm: 4,
  },
  {
    id: 19,
    hinh: [
      "https://pettot.com/wp-content/uploads/2022/07/anh-tho-canh-ha-lan-lun-mau-trang-tai-sieu-ngan-tai-ha-noi.jpg",
      "https://pettot.com/wp-content/uploads/2022/07/tho-ha-lan-lun-mau-trang-sieu-dep-gia-re-tai-ha-noi.jpg",
    ],
    name: "Thỏ Hà Lan lùn màu trắng ",
    price: 2700000,
    iddm: 4,
  },
  {
    id: 20,
    hinh: [
      "https://pettot.com/wp-content/uploads/2022/04/tho-ha-lan-lun-mau-vang-nhat-xam-dep.jpg",
      "https://pettot.com/wp-content/uploads/2022/04/anh-tho-ha-lan-lun-mau-vang-xam.jpg",
    ],
    name: "Thỏ Hà lan lùn màu vàng xám nhạt",
    price: 2700000,
    iddm: 4,
  },
  {
    id: 21,
    hinh: [
      "https://sieupet.com/sites/default/files/10893132296_745673911.jpg",
      "https://sieupet.com/sites/default/files/10893102595_745673911.jpg",
    ],
    name: "Chuông Dạy Chó Mèo",
    price: 2700000,
    iddm: 5,
  },
  {
    id: 22,
    hinh: [
      "https://sieupet.com/sites/default/files/9310563730_1501556473.jpg",
      "https://sieupet.com/sites/default/files/9354350792_1501556473.jpg",
    ],
    name: "Bóng Chuông 7 Màu",
    price: 2700000,
    iddm: 5,
  },
  {
    id: 23,
    hinh: [
      "https://sieupet.com/sites/default/files/3562549667_1119372358.jpg",
      "https://sieupet.com/sites/default/files/10648025692_1119372358.jpg",
    ],
    name: "Đồ Chơi Vải Cho Chó, Mèo",
    price: 2700000,
    iddm: 5,
  },
  {
    id: 24,
    hinh: [
      "https://sieupet.com/sites/default/files/119214269_786338652113443_5133653163347659608_n.jpg",
      "https://sieupet.com/sites/default/files/inkedsp1485_chuot_dieu_khien_tu_xa_09_7fe0ca3524eb4725b411bf9f257aa268_grande_li.jpg",
    ],
    name: "Chuột Điều Khiển",
    price: 2700000,
    iddm: 5,
  },
  {
    id: 25,
    hinh: [
      "https://sieupet.com/sites/default/files/2676804811_1847764777.jpg",
      "https://sieupet.com/sites/default/files/2672953119_1847764777.jpg",
    ],
    name: "Bóng Đồ Chơi",
    price: 2700000,
    iddm: 5,
  },
  {
    id: 26,
    hinh: [
      "https://www.petmart.vn/wp-content/uploads/2021/06/thuc-an-cho-cho-con-co-nho-royal-canin-mini-puppy1-400x400.jpg",
      "https://www.petmart.vn/wp-content/uploads/2021/06/thuc-an-cho-cho-con-co-nho-royal-canin-mini-puppy2-400x400.jpg",
    ],
    name: "ROYAL CANIN Mini Puppy",
    price: 2700000,
    iddm: 6,
  },
  {
    id: 27,
    hinh: [
      "https://www.petmart.vn/wp-content/uploads/2021/06/thuc-an-cho-cho-con-royal-canin-maxi-puppy1-400x400.jpg",
      "https://www.petmart.vn/wp-content/uploads/2021/06/thuc-an-cho-cho-con-royal-canin-maxi-puppy2-400x400.jpg",
    ],
    name: "ROYAL CANIN Maxi Puppy",
    price: 2700000,
    iddm: 6,
  },
  {
    id: 28,
    hinh: [
      "https://www.petmart.vn/wp-content/uploads/2021/06/thuc-an-cho-cho-me-va-cho-con-co-nho-royal-canin-mini-starter-mother-babydog1-400x400.jpg",
      "https://www.petmart.vn/wp-content/uploads/2021/06/thuc-an-cho-cho-me-va-cho-con-co-nho-royal-canin-mini-starter-mother-babydog2-400x400.jpg",
    ],
    name: "ROYAL CANIN Mini Starter <br> Mother & Babydog",
    price: 2700000,
    iddm: 6,
  },
  {
    id: 29,
    hinh: [
      "https://www.petmart.vn/wp-content/uploads/2019/04/pate-cho-meo-vi-ca-ngu-lat-iris-delicacy-tuna-bonito-slices-400x400.jpg",
      "https://www.petmart.vn/wp-content/uploads/2019/04/pate-meo-iris-delicacy-400x400.jpg",
    ],
    name: "Pate cho mèo vị cá ngừ lát",
    price: 2700000,
    iddm: 6,
  },
  {
    id: 30,
    hinh: [
      "https://www.petmart.vn/wp-content/uploads/2016/07/khay-ve-sinh-cho-cho-makar-dog-toilet-trays-small-400x400.jpg",
      "https://www.petmart.vn/wp-content/uploads/2016/07/khay-ve-sinh-cho-cho-bang-nhua-cao-cap-makar-1-400x400.jpg",
    ],
    name: "Khay vệ sinh cho chó",
    price: 2700000,
    iddm: 7,
  },
  {
    id: 31,
    hinh: [
      "https://www.petmart.vn/wp-content/uploads/2013/07/xeng-xuc-phan-cho-meo-soleil-bang-nhua-cao-cap-du-mau-400x400.jpg",
      "https://www.petmart.vn/wp-content/uploads/2013/07/xeng-xuc-phan-cho-meo-soleil-bang-nhua-cao-cap-du-mau3-400x400.jpg",
    ],
    name: "Xeng vệ sinh cho chó",
    price: 2700000,
    iddm: 7,
  },
  {
    id: 32,
    hinh: [
      "https://www.petmart.vn/wp-content/uploads/2020/10/ve-sinh-cho-cho-thanh-cao-sawyer-pet-toilet-400x400.jpg",
      "https://www.petmart.vn/wp-content/uploads/2020/10/ve-sinh-cho-cho-thanh-cao-sawyer-pet-toilet1-400x400.jpg",
    ],
    name: "Khay vệ sinh cho chó thành cao",
    price: 2700000,
    iddm: 7,
  },
  {
    id: 33,
    hinh: [
      "https://www.petmart.vn/wp-content/uploads/2021/07/khay-ve-sinh-cho-cho-makar-dog-toilet-trays-large-400x400.jpg",
      "https://www.petmart.vn/wp-content/uploads/2021/07/khay-ve-sinh-cho-cho-makar-dog-toilet-trays-large1-400x400.jpg",
    ],
    name: "MAKAR Dog Toilet Trays Large",
    price: 2700000,
    iddm: 7,
  },
];

const loadProducts = (idPosition, lsp, soluong) => {
  const productList = document.getElementById(idPosition);
  let count = 0;
  productList.innerHTML += `
  <div class="tieude">
  <h2>${danhmuc[lsp - 1].name}</h2>
  <a href="loaisp.html?id=${lsp}">Xem Thêm</a>
   </div`;
  for (let i = 0; i < sanpham.length; i++) {
    if (sanpham[i].iddm === lsp) {
      if (count >= soluong) break;

      productList.innerHTML += `
                <div class="sanpham_item">
                <a href="product-detail.html?id=${sanpham[i].id}">
                  <img src="${sanpham[i].hinh[0]}" alt="${
        sanpham[i].name
      }" onmouseover="doianh(this, ${i}, 1)" onmouseout="doianh(this, ${i}, 0)">
                  <h2>${sanpham[i].name}</h2>
                  <p class="price">${sanpham[i].price.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}</p>
                   </a>
                </div>
              `;
      count++;
    }
  }
};
const doianh = (imgElement, index, state) => {
  imgElement.src = sanpham[index].hinh[state];
};
loadProducts("1", 1, 5);
loadProducts("2", 2, 5);
loadProducts("3", 3, 5);
loadProducts("4", 4, 4);
loadProducts("5", 5, 5);
loadProducts("6", 6, 5);
loadProducts("7", 7, 5);
function sanphammoi(idPosition, sl) {
  const productList = document.getElementById(idPosition);
  let count = 0;
  productList.innerHTML += `
  <div class="tieude">
  <h2>SẢN PHẨM MỚI</h2>
  <a href="./tatcasp.html">Xem Thêm</a>
   </div`;
  for (let i = sanpham.length - 1; i >= 0; i--) {
    if (count >= sl) break;
    productList.innerHTML += `
                  <div class="sanpham_item">
                  <a href="product-detail.html?id=${sanpham[i].id}">
                    <img src="${sanpham[i].hinh[0]}" alt="${
      sanpham[i].name
    }" onmouseover="doianh(this, ${i}, 1)" onmouseout="doianh(this, ${i}, 0)">
                    <h2>${sanpham[i].name}</h2>
                    <p class="price">${sanpham[i].price.toLocaleString(
                      "vi-VN",
                      {
                        style: "currency",
                        currency: "VND",
                      }
                    )}</p>
                     </a>
                  </div>
                `;
    count++;
  }
}
sanphammoi("moinhat", 5);
