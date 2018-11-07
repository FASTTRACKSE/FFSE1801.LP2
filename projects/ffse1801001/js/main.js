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
    img: "./img/cf-sua-da-3.jpg"
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
              <td><input type="number" min="1" value="1"></td>

                <td>` +
      numberWithCommas(product.price) +
      `đ</td>
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
