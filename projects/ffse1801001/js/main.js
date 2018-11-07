const numberWithCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
const numberWithDots = x => {
  if (x == null) {
    return null;
  } else {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
};
var products = [
  {
    id: 1,
    category: "Coffee",
    name: "Cà phê đen nóng",
    price: "7000",
    img: "./img/cf-den.jpg"
  },
  {
    id: 2,
    category: "Coffee",
    name: "Cà phê đen đá",
    price: "7000",
    img: "./img/cf-den-da-1.jpg"
  },
  {
    id: 3,
    category: "Coffee",
    name: "Cà phê sữa nóng",
    price: "10000",
    img: "./img/cf-sua-1.jpg"
  },
  {
    id: 4,
    category: "Coffee",
    name: "Cà phê sữa đá",
    price: "10000",
    img: "./img/cf-sua-da.jpg"
  },
  {
    id: 5,
    category: "Coffee",
    name: "Cà phê đen Sài Gòn",
    price: "10000",
    img: "./img/cf-den-sg.jpg"
  },
  {
    id: 6,
    category: "Coffee",
    name: "Cà phê sữa Sài Gòn",
    price: "12000",
    img: "./img/cf-sua-sg-1.jpg"
  },
  {
    id: 7,
    category: "Coffee",
    name: "Cà phê đen rang xay",
    price: "12000",
    img: "./img/cf-den-rang-xay.jpg"
  },
  {
    id: 8,
    category: "Coffee",
    name: "Cà phê sữa rang xay",
    price: "12000",
    img: "./img/cf-sua-rang-xay.jpg"
  },
  {
    id: 9,
    category: "Coffee",
    name: "Cà phê đen pha phin",
    price: "7000",
    img: "./img/cf-den-pha-phin.jpg"
  },
  {
    id: 10,
    category: "Coffee",
    name: "Cà phê sữa pha phin",
    price: "8000",
    img: "./img/cf-sua-pha-phin.jpg"
  },
  {
    id: 11,
    category: "Coffee",
    name: "Cà phê Hotpot",
    price: "12000",
    img: "./img/coffee-hotpot.jpg"
  },
  {
    id: 12,
    category: "Tea",
    name: "Trà gừng nóng",
    price: "12000",
    img: "./img/tea-ginger.jpg"
  },
  {
    id: 13,
    category: "Tea",
    name: "Trà Lipton",
    price: "15000",
    img: "./img/tea-lipton.png"
  },
  {
    id: 14,
    category: "Tea",
    name: "Trà nguyên chất",
    price: "15000",
    img: "./img/tea-original.jpeg"
  },
  {
    id: 15,
    category: "Drink",
    name: "Sinh tố xoài",
    price: "15000 ",
    img: "./img/drink-mango.png"
  },
  {
    id: 16,
    category: "Drink",
    name: "Sinh tố bơ",
    price: "15000 ",
    img: "./img/drink-avocado.jpg"
  },
  {
    id: 17,
    category: "Drink",
    name: "Sinh tố cà rốt",
    price: "15000 ",
    img: "./img/drink-carot.jpg"
  },
  {
    id: 18,
    category: "Drink",
    name: "Sinh tố dưa hấu",
    price: "15000 ",
    img: "./img/drink-melon.png"
  },
  {
    id: 19,
    category: "Drink",
    name: "Sinh tố mít",
    price: "15000 ",
    img: "./img/drink-mit.jpg"
  },
  {
    id: 20,
    category: "Drink",
    name: "Sinh tố thập cẩm",
    price: "15000 ",
    img: "./img/drink-thap-cam.jpg"
  },
  {
    id: 21,
    category: "Drink",
    name: "Nước dừa",
    price: "25000 ",
    img: "./img/drink-coconut.jpg"
  },
  {
    id: 22,
    category: "Drink",
    name: "Nước chanh dây",
    price: "15000 ",
    img: "./img/drink-chanh-day-2.jpg"
  },
  {
    id: 23,
    category: "Drink",
    name: "Chanh nóng",
    price: "10000 ",
    img: "./img/drink-hot-lemon.jpg"
  },
  {
    id: 24,
    category: "Drink",
    name: "Chanh đá",
    price: "10000 ",
    img: "./img/drink-ice-lemon-1.jpg"
  },
  {
    id: 26,
    category: "Drink",
    name: "Nước cam",
    price: "15000 ",
    img: "./img/drink-orange.jpg"
  },
  {
    id: 27,
    category: "Drink",
    name: "Nước chanh muối",
    price: "10000 ",
    img: "./img/drink-chanh-muoi.jpg"
  },
  {
    id: 28,
    category: "Drink",
    name: "Sữa chua đá xay",
    price: "10000 ",
    img: "./img/drink-sua-chua-da.png"
  },
  {
    id: 29,
    category: "Drink",
    name: "Sữa tươi",
    price: "10000 ",
    img: "./img/drink-sua-tuoi.jpg"
  },
  {
    id: 30,
    category: "Drink",
    name: "Sữa cam",
    price: "15000 ",
    img: "./img/drink-sua-cam.jpg"
  },
  {
    id: 31,
    category: "Drink",
    name: "Coca",
    price: "10000 ",
    img: "./img/drink-coca.jpg"
  },
  {
    id: 32,
    category: "Drink",
    name: "Number One",
    price: "10000 ",
    img: "./img/drink-number-one.jpg"
  },
  {
    id: 33,
    category: "Drink",
    name: "Redbull",
    price: "13000 ",
    img: "./img/drink-redbull.jpg"
  },
  {
    id: 34,
    category: "Drink",
    name: "Tà xanh không độ",
    price: "12000 ",
    img: "./img/drink-0-do.jpg"
  },
  {
    id: 35,
    category: "Drink",
    name: "Trà Dotor Thanh",
    price: "10000 ",
    img: "./img/drink-dt-thanh.jpg"
  },
  {
    id: 35,
    category: "Drink",
    name: "Cacao nóng",
    price: "12000 ",
    img: "./img/drink-cacao-hot.jpg"
  },
  {
    id: 36,
    category: "Drink",
    name: "Cacao đá",
    price: "12000 ",
    img: "./img/drink-cacao.jpg"
  },
  {
    id: 37,
    category: "Drink",
    name: "Milo nóng",
    price: "12000 ",
    img: "./img/drink-milo-hot.jpg"
  },
  {
    id: 38,
    category: "Drink",
    name: "Milo đá",
    price: "12000 ",
    img: "./img/drink-milo.jpg"
  },
  {
    id: 39,
    category: "Drink",
    name: "Bia Huda lon",
    price: "11000 ",
    img: "./img/drink-huda.jpg"
  },
  {
    id: 40,
    category: "Drink",
    name: "Bia Sài Gòn",
    price: "12000 ",
    img: "./img/drink-sg.jpg"
  },
  {
    id: 50,
    category: "Fruit",
    name: "Xoài",
    price: "30000 ",
    img: "./img/fruit-mango.jpg"
  },
  {
    id: 51,
    category: "Fruit",
    name: "Ổi",
    price: "30000 ",
    img: "./img/fruit-oi.jpg"
  },
  {
    id: 52,
    category: "Fruit",
    name: "Cóc",
    price: "30000 ",
    img: "./img/fruit-coc.jpg"
  },
  {
    id: 53,
    category: "Fruit",
    name: "Mít",
    price: "30000 ",
    img: "./img/fruit-mit.jpg"
  },
  {
    id: 54,
    category: "Fruit",
    name: "Cam",
    price: "30000 ",
    img: "./img/fruit-orange.jpg"
  },
  {
    id: 55,
    category: "Fruit",
    name: "Dưa hấu",
    price: "30000 ",
    img: "./img/fruit-melon.jpg"
  },
  {
    id: 56,
    category: "Fruit",
    name: "Trái cây các loại",
    price: "30000 ",
    img: "./img/fruit-hon-hop.jpg"
  },
  {
    id: 60,
    category: "Food",
    name: "Gà xé",
    price: " ",
    img: "./img/fo-ga-xe.jpg"
  },
  {
    id: 61,
    category: "Food",
    name: "Gà nướng",
    price: " ",
    img: "./img/fo-.jpg"
  },
  {
    id: 62,
    category: "Food",
    name: "Gà hấp hành",
    price: " ",
    img: "./img/fo-.jpg"
  },
  {
    id: 63,
    category: "Food",
    name: "Gà om sả",
    price: " ",
    img: "./img/fo-.jpg"
  },
  {
    id: 64,
    category: "Food",
    name: "Lẩu gà lá giang",
    price: " ",
    img: "./img/fo-.jpg"
  },
  {
    id: 65,
    category: "Food",
    name: "Cháo gà",
    price: " ",
    img: "./img/fo-.jpg"
  },
  {
    id: 66,
    category: "Food",
    name: "Ba chỉ nướng muối ớt",
    price: " ",
    img: "./img/fo-.jpg"
  },
  {
    id: 67,
    category: "Food",
    name: "Trâu xào lá trơn",
    price: " ",
    img: "./img/fo-.jpg"
  },
  {
    id: 68,
    category: "Food",
    name: "Trâu nướng",
    price: " ",
    img: "./img/fo-.jpg"
  },
  {
    id: 69,
    category: "Food",
    name: "Bò xào chua ngọt",
    price: " ",
    img: "./img/fo-.jpg"
  },
  {
    id: 70,
    category: "Food",
    name: "Bò xào cay",
    price: " ",
    img: "./img/fo-.jpg"
  },
  {
    id: 71,
    category: "Food",
    name: "Lẩu bò",
    price: " ",
    img: "./img/fo-.jpg"
  },
  {
    id: 72,
    category: "Food",
    name: "Bò nướng",
    price: " ",
    img: "./img/fo-.jpg"
  },
  {
    id: 73,
    category: "Food",
    name: "Bò hấp hành",
    price: " ",
    img: "./img/fo-.jpg"
  },
  {
    id: 74,
    category: "Food",
    name: "Chả cá thát lát chiên",
    price: " ",
    img: "./img/fo-.jpg"
  },
  {
    id: 75,
    category: "Food",
    name: "Lẩu cá thát lát",
    price: " ",
    img: "./img/fo-.jpg"
  },
  {
    id: 76,
    category: "Food",
    name: "Mực hấp hành",
    price: " ",
    img: "./img/fo-.jpg"
  }
];

function show_products(params) {
  document.getElementById("show_" + params).innerHTML = ``;
  for (let i = 0; i < products.length; i++) {
    if (products[i].category == params) {
      console.log("show_" + params);

      let div = document.createElement("div");
      div.classList.add("column");
      div.innerHTML =
        `  
        <figure><img class="cf" src="` +
        products[i].img +
        `" alt=""></figure>
    <p class="name-product">` +
        products[i].name +
        `</p>
    <p class="price">Giá thành: ` +
        products[i].price +
        ` ₫</p>
    <div id="mySidenav" class="sidenav">
        <a href="./Details.html" id="about">Xem chi tiết</a>
        <a href="#" id="blog">Facebook</a>
        <a href="#" id="projects">Instagram</a>
        <a href="#" id="contact">Youtube</a>
        <img src="./img/deco-flower.png" alt="">
    </div>
    <button  onclick="add_cart(this,` +
        products[i].id +
        `)">Thêm vào giỏ hàng</button>`;
      document.getElementById("show_" + params).appendChild(div);
    }
  }
}

function add_cart(id, paramsid) {
  if (localStorage.mycart) {
    let arr = JSON.parse(localStorage.mycart);
    console.log(arr);

    for (let i = 0; i < arr.length; i++) {
      let arr_f = arr.find(function(params) {
        return params == paramsid;
      });
      if (arr_f !== undefined) {
        disableBtn(id);
        return;
      }
    }
    arr.push(paramsid);
    localStorage.mycart = JSON.stringify(arr);
    disableBtn(id);
  } else {
    let arr = [];
    arr.push(paramsid);
    localStorage.mycart = JSON.stringify(arr);
    disableBtn(id);
  }
  u_cart();
}
function disableBtn(id) {
  id.onclick = "";
  id.innerHTML = "Đã thêm sản phẩm";
  id.style = "background:#923b3b";
}
function show_products_in_mycart(params) {
  let arr = JSON.parse(localStorage.mycart);
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    let product = products.find(function(params) {
      return params.id == arr[i];
    });
    console.log(product);

    let tr = document.createElement("tr");
    tr.classList.add("tr");
    tr.innerHTML =
      ` 
                <td claa="name"><a href="#" style="text-decoration:none">` +
      product.name +
      `</a></td>
                <td><img src="` +
      product.img +
      `"></td>
      
      <td ><span id="price` +
      product.id +
      `">` +
      numberWithCommas(product.price) +
      `</span>đ</td>
      <td ><input type="number" min="1" value="1" id="quantity` +
      product.id +
      `"></td>
                <td><span id="total` +
      product.id +
      `">` +
      numberWithCommas(product.price) +
      `</span>đ</td>
                <td >
                <i style="font-size:25px;cursor: pointer;" onclick="delete_products(` +
      product.id +
      `)"  class="fas fa-times"></i>
                </td>
            `;
    document.getElementById("myTable").appendChild(tr);
  }
}
function delete_products(params) {
  let arr = JSON.parse(localStorage.mycart);
  console.log(arr);
  let product = arr.find(function(id) {
    return id == params;
  });
  if (product !== undefined) {
    let i = arr.indexOf(product);
    arr.splice(i, 1);
    localStorage.mycart = JSON.stringify(arr);
    location.reload();
  } else {
  }
}
function u_cart() {
  if (localStorage.mycart) {
    let arr = JSON.parse(localStorage.mycart);
    let p = document.createElement("p");
    p.innerHTML = arr.length;
    document.getElementsByClassName("cart")[0].appendChild(p);
  }
}
u_cart();
