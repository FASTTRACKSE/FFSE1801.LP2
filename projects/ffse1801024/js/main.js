var hidden_pass = true,
  old_page = null,
  old_page_child = null,
  data_products = [],
  random_products_home = [],
  page_suggestion = 1,
  product_data_j = null,
  accounts = [],
  delete_cart_pp = null;
var router = [
  {
    level: 1,
    hash: "",
    name: "Thỏa thích mua sắm",
    content: contentHome
  },
  {
    level: 1,
    hash: "#/dang-nhap",
    name: "Thành viên nhiều ích lợi ",
    content: contentLogin
  },
  {
    level: 1,
    hash: "#/gio-hang",
    name: "Giá tiết kiệm nhất",
    content: show_cart_detail
  },
  {
    level: 1,
    hash: "#/hoan-thanh",
    name: "Đơn hàng hoàn thành",
    content: contentThank
  },
  {
    level: 2,
    hash: "#/products",
    name: "Sản phẩm độc đáo",
    content: [
      "do-an-sang",
      "thuc-pham-kho-dong-hop",
      "do-uong",
      "do-uong-co-con",
      "thuc-pham-tuoi-dong-lanh",
      "keo-socola",
      "nau-an-lam-banh",
      "thuoc-la",
      "snack-do-an-vat",
      "cham-soc-thu-cung"
    ]
  }
];

/******************************
 *
 * Lấy dữ liệu từ server
 *
 * ********************************** */
function getData() {
  //   var docRef = db.collection("products").doc("do-an-sang");
  db.collection("products")
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        let temp = {
          name: doc.id,
          name_2: doc.data().name,
          data: doc.data().data
        };
        data_products.push(temp);
      });
      listenerHash();
    });
}

/******************************
 *
 * Điều hướng
 *
 * ********************************** */
function navigationH() {
  let hash = get.hash();
  let page = router.find(function(obj) {
    return obj.hash == hash;
  });
  if (page !== undefined) {
    old_page_child = null;
    activeNav(old_page, false);
    get.tag("title")[0].innerHTML = page.name;
    page.content();
  } else {
    let hash_1 = hash.split("#");
    let hash_2 = hash.split("/");
    if (hash_2.length == 3 && hash_2[1] == "products") {
      for (let i = 0; i < router.length; i++) {
        if ("#/" + hash_2[1] == router[i].hash) {
          for (let j = 0; j < router[i].content.length; j++) {
            if (hash_2[2] == router[i].content[j]) {
              old_page_child = true;
              activeNav(hash_2[2]);
              products();
              get.tag("title")[0].innerHTML = router[i].name;
              sort_products(hash_2[2]);
              return show_products(hash_2[2]);
            }
          }
        }
      }
    }

    if (hash_2.length == 4 && hash_2[1] == "products") {
      for (let i = 0; i < router.length; i++) {
        if ("#/" + hash_2[1] == router[i].hash) {
          for (let j = 0; j < router[i].content.length; j++) {
            if (hash_2[2] == router[i].content[j]) {
              old_page_child = true;
              activeNav(hash_2[2]);
              data_f = paramsSearch(hash_2);
              p.log(data_f);
              if (data_f[0] === true) {
                p.log(data_f);
                contentProductDetail(data_f[1]);
                get.id("title_category_detail").href =
                  `/#/products/` + hash_2[2];
                get.id("title_category_detail").innerHTML = data_f[2];
                get.tag("title")[0].innerHTML = data_f[1].name;
                return;
              } else {
                p.log("sai");
                products();
                show_products(hash_2[2]);
                return;
              }
            }
          }
        }
      }
    }
    history.pushState(null, "", "#/404");
    content404();
  }
}
function paramsSearch(params) {
  let data_f_c = data_products.find(function(obj) {
    return obj.name == params[2];
  });
  p.log(params);
  if (data_f_c !== undefined) {
    let data = JSON.parse(data_f_c.data);
    let data_f = data.find(function(obj) {
      return obj.params == params[3];
    });
    return [true, data_f, data_f_c.name_2];
  } else {
    return [false, null];
  }
}
function listenerHash() {
  navigationH();
  window.addEventListener("hashchange", function(params) {
    navigationH();
    scrollTop();
  });
}
function activeNav(id, type = true) {
  if (old_page_child !== null) {
    if (old_page === null) {
      old_page = id;
      get.id(id).parentElement.classList.add("active");
    } else {
      get.id(old_page).parentElement.classList.remove("active");
      old_page = id;
      get.id(id).parentElement.classList.add("active");
    }
  } else {
    if (!type && old_page !== null) {
      get.id(id).parentElement.classList.remove("active");
    }
  }
}
function scrollTop() {
  window.scrollTo(0, 0);
}

/******************************
 *
 * sắp xếp sản phẩm
 *
 * ********************************** */
function sort_products(type) {
  var activities = document.getElementById("sort");
  activities.addEventListener("change", function(params) {
    let data = data_products.find(function(obj) {
      return obj.name == type;
    });
    p.log(data);

    if (data !== undefined) {
      let j_data = JSON.parse(data.data);
      j_data = j_data.sort(function(a, b) {
        switch (activities.value) {
          case "1":
            return;
          case "2":
            return a.price - b.price;
          case "3":
            return b.price - a.price;
          case "4":
            return b.review - a.review;
          default:
            return;
        }
      });
      get.id("show_products").innerHTML = "";
      for (let i = 0; i < 30; i++) {
        show_o_products("show_products", j_data[i]);
      }
    }
  });
}
/******************************
 *
 * Hiển thị sản phẩm ở trang sản phẩm
 *
 * ********************************** */

function show_products(type = "do-an-sang", page = 0) {
  let data = data_products.find(function(obj) {
    return obj.name == type;
  });

  if (data !== undefined) {
    let j_data = JSON.parse(data.data);
    let limit_data = Math.ceil(j_data.length / 30);
    get.id("products-count").innerHTML =
      j_data.length + " sản phẩm được tìm thấy.";
    get.id("jqc_1").innerHTML = data.name_2;
    get.id("jqc_2").innerHTML = data.name_2;
    get.id("jqd_1").innerHTML = data.name_2;
    get.id("pagination").innerHTML = page + 1 + " / " + limit_data;
    for (let i = 0; i < 30; i++) {
      let calculator = i + 30 * page;
      let t_j_data = j_data[calculator];
      show_o_products("show_products", t_j_data);
    }
  }
}
function show_o_products(id, data) {
  let el_pro = get.id(id);
  let product_data = data;
  let div = create.el("div");
  div.classList.add("col");
  var rating = "";
  for (let j = 1; j <= 5; j++) {
    let eli = create.el("i");
    if (Math.ceil(product_data.ratingScore) >= j) {
      if (product_data.ratingScore > j) {
        eli.className = "fas fa-star";
        rating += eli.outerHTML;
      } else {
        eli.className = "fas fa-star-half-alt";
        rating += eli.outerHTML;
      }
    } else {
      eli.className = "far fa-star";
      rating += eli.outerHTML;
    }
  }
  if (product_data.originalPrice == null) {
    originalPrice = numberWithDots(product_data.price);
    discount = "-0%";
  } else {
    discount = product_data.discount;
    originalPrice = numberWithDots(product_data.originalPrice);
  }
  div.innerHTML =
    `<a href="#/products/` +
    product_data.category +
    `/` +
    product_data.params +
    `">
                              <div class="card">
                                  <div class="card-img">
                                      <img src="` +
    product_data.thumb +
    `" alt="">
                                  </div>
                                  <div class="card-content">
                                      <p class="card-content-title m-0">` +
    product_data.name +
    `</p>
                                      <p class="price m-0">
                                         ` +
    numberWithDots(product_data.price) +
    ` ₫
                                      </p>
                                      <span class="price-unsale">` +
    originalPrice +
    ` ₫</span>
                                      <span class="discount">` +
    discount +
    `</span>
                                      <div class="rating-address">
                                          <div class="rating" id="rating">
  ` +
    rating +
    `
                                              <span>(` +
    product_data.review +
    `)</span>
                                          </div>
                                          <div class="address">
                                              <span>` +
    product_data.location +
    `</span>
                                          </div>
                                          <div class="clearfix"></div>
                                      </div>
                                  </div>
                              </div>
                          </a>`;
  el_pro.appendChild(div);
}
/******************************
 *
 * Hiển thị sản phẩm ở trang chủ
 *
 * ********************************** */
function show_suggestion(params) {
  let data = [];
  let count = 0;
  let arr_index = [];
  for (let i = 0; i < data_products.length; i++) {
    let temp_data = JSON.parse(data_products[i].data);

    data = temp_data.concat(data);
  }
  while (count < 18) {
    let random = Math.floor(Math.random() * data.length);
    let find = random_products_home.find(function(params) {
      return params == random;
    });
    if (find === undefined) {
      count++;
      random_products_home.push(random);
      arr_index.push(random);
    }
  }
  let limit_suggestion = Math.ceil(data.length / 18);
  for (let i = 0; i < arr_index.length; i++) {
    let product_data = data[arr_index[i]];
    let div = create.el("div");
    div.classList.add("col");
    var rating = "";
    for (let j = 1; j <= 5; j++) {
      let eli = create.el("i");
      if (Math.ceil(product_data.ratingScore) >= j) {
        if (product_data.ratingScore > j) {
          eli.className = "fas fa-star";
          rating += eli.outerHTML;
        } else {
          eli.className = "fas fa-star-half-alt";
          rating += eli.outerHTML;
        }
      } else {
        eli.className = "far fa-star";
        rating += eli.outerHTML;
      }
    }
    if (product_data.originalPrice == null) {
      originalPrice = numberWithDots(product_data.price);
      discount = "-0%";
    } else {
      discount = product_data.discount;
      originalPrice = numberWithDots(product_data.originalPrice);
    }

    div.innerHTML =
      `<a href="#/products/` +
      product_data.category +
      `/` +
      product_data.params +
      `">
                              <div class="card">
                                  <div class="card-img">
                                      <img src="` +
      product_data.thumb +
      `" alt="">
                                  </div>
                                  <div class="card-content">
                                      <p class="card-content-title m-0">` +
      product_data.name +
      `</p>
                                      <p class="price m-0">
                                         ` +
      numberWithDots(product_data.price) +
      ` ₫
                                      </p>
                                      <span class="price-unsale">` +
      originalPrice +
      ` ₫</span>
                                      <span class="discount">` +
      discount +
      `</span>
                                      <div class="rating-address">
                                          <div class="rating" id="rating">
  ` +
      rating +
      `
                                              <span>(` +
      product_data.review +
      `)</span>
                                          </div>
                                          <div class="address">
                                              <span>` +
      product_data.location +
      `</span>
                                          </div>
                                          <div class="clearfix"></div>
                                      </div>
                                  </div>
                              </div>
                          </a>`;
    get.id("show-suggestion-today").appendChild(div);
  }
  if (limit_suggestion <= page_suggestion) {
    let add = get.class("add-suggestion-today");
    add[0].innerHTML = ``;
  } else {
    let add = get.class("add-suggestion-today");
    add[0].innerHTML = `<button onclick=" add_suggestion()">Tải thêm</button>`;
  }
}
function add_suggestion() {
  page_suggestion++;
  let add = get.class("add-suggestion-today");
  add[0].innerHTML = ` <div class="load">
  <img src="./imgs/load.svg" alt="">
  </div>`;
  show_suggestion();
}
/******************************
 *
 * Phần nội dung của web
 *
 * ********************************** */
function contentHome() {
  get.id("content").innerHTML = `<div id="home">
                <div id="banner" class="shadow-sm">
                    <div class="container">
                        <div class="row">
                            <div class="swiper-container swiper-container-horizontal" style="cursor: grab;">
                                <div class="swiper-wrapper" id="slide-banner" style="transition-duration: 0ms; transform: translate3d(-4992px, 0px, 0px);">
                                    <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                                        data-swiper-slide-index="5" style="width: 832px;"><img src="./imgs/1.jpg"></div>
                                    <div class="swiper-slide swiper-slide-duplicate-next" data-swiper-slide-index="0"
                                        style="width: 832px;"><img src="./imgs/6.jpg"></div>
                                    <div class="swiper-slide" data-swiper-slide-index="1" style="width: 832px;"><img
                                            src="./imgs/2.jpg"></div>
                                    <div class="swiper-slide" data-swiper-slide-index="2" style="width: 832px;"><img
                                            src="./imgs/3.jpg"></div>
                                    <div class="swiper-slide" data-swiper-slide-index="3" style="width: 832px;"><img
                                            src="./imgs/4.jpg"></div>
                                    <div class="swiper-slide swiper-slide-prev" data-swiper-slide-index="4" style="width: 832px;"><img
                                            src="./imgs/5.jpg"></div>
                                    <div class="swiper-slide swiper-slide-active" data-swiper-slide-index="5" style="width: 832px;"><img
                                            src="./imgs/1.jpg"></div>
                                    <div class="swiper-slide swiper-slide-duplicate swiper-slide-next"
                                        data-swiper-slide-index="0" style="width: 832px;"><img src="./imgs/6.jpg"></div>
                                </div>
                                <div class="prev" tabindex="0" role="button" aria-label="Previous slide">
                                    <i class="fal fa-chevron-left"></i>
                                </div>
                                <div class="next" tabindex="0" role="button" aria-label="Next slide">
                                    <i class="fal fa-chevron-right"></i>
                                </div>
                                <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"><span
                                        class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 1"></span><span
                                        class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span><span
                                        class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 3"></span><span
                                        class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 4"></span><span
                                        class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 5"></span><span
                                        class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0"
                                        role="button" aria-label="Go to slide 6"></span></div>
                                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                            </div>
                            <div class="km" id="km-banner">
                                <img src="./imgs/7.jpg"><img src="./imgs/8.jpg"></div>
                        </div>
                    </div>
                </div>
                <div id="search-hot">
                    <div class="search-hot-tile">
                        <p class="">Tìm kiếm phổ biến</p>
                    </div>
                    <div class="row">
                        <div class="col-1">
                            <div class="row">
                                <div class="left">
                                    <img src="./imgs/product/Hahne Bircher Muesli.jpg" alt="">
                                </div>
                                <div class="right">
                                    <p>Ngũ Cốc</p>
                                    <span>10,100 sản phẩm</span>

                                </div>
                            </div>
                        </div>
                        <div class="col-1">
                            <div class="row">
                                <div class="left">
                                    <img src="./imgs/product/Hahne Bircher Muesli.jpg" alt="">
                                </div>
                                <div class="right">
                                    <p>Ngũ Cốc</p>
                                    <span>10,100 sản phẩm</span>

                                </div>
                            </div>
                        </div>
                        <div class="col-1">
                            <div class="row">
                                <div class="left">
                                    <img src="./imgs/product/Hahne Bircher Muesli.jpg" alt="">
                                </div>
                                <div class="right">
                                    <p>Ngũ Cốc</p>
                                    <span>10,100 sản phẩm</span>

                                </div>
                            </div>
                        </div>
                        <div class="col-1">
                            <div class="row">
                                <div class="left">
                                    <img src="./imgs/product/Hahne Bircher Muesli.jpg" alt="">
                                </div>
                                <div class="right">
                                    <p>Ngũ Cốc</p>
                                    <span>10,100 sản phẩm</span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="suggestion-today">
                    <div class="search-hot-tile">
                        <p class="">Dành riêng cho bạn</p>
                    </div>
                    <div class="row" id="show-suggestion-today">
                    </div>
                    <div class="add-suggestion-today"><button onclick=" add_suggestion()">Tải thêm</button></div>
                </div>
            </div>`;

  new Swiper("#home #banner .container .row .swiper-container", {
    autoplay: {
      delay: 3000
    },
    speed: 400,
    loop: true,
    grabCursor: true,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev"
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    }
  });
  show_suggestion();
}

function contentLogin() {
  get.id("content").innerHTML = ` <div id="login">
                <div class="container">
                    <div class="title">
                        <h3 class="m-0">Chào mừng đến với Bibibuy. Đăng nhập ngay! </h3>
                        <div class="title-other">
                            <span>Thành viên mới? <a href="/#/dang-ky">Đăng kí</a> tại đây</span> </div>
                    </div>
                    <div class="form">
                        <div class="row">
                            <div class="col-1">
                                <div>
                                    <label>Số điện thoại hoặc email*</label>
                                    <input type="text" placeholder="Vui lòng nhập số điện thoại hoặc email của bạn"
                                        value="">
                                </div>
                                <div>
                                    <label>Mật khẩu*</label>
                                    <input type="password" id="pass" placeholder="Vui lòng nhập mật khẩu của bạn" value="">
                                    <i onclick="changePass(this)" class="fal fa-eye-slash"></i>

                                </div>
                                <a href="#">Quên mật khẩu</a>
                            </div>

                            <div class="col-2">
                                <button>ĐĂNG NHẬP</button>
                                <span>Hoặc, đăng nhập bằng</span>
                                <button>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fab fa-facebook-f"></i>&nbsp;&nbsp;&nbsp;
                                    Facebook</button>
                <div id="my-signin2"></div>
                               
                        </div>
                    </div>

                </div>
            </div>`;
  renderButton();
}
function changeLogin() {
  if (typeof Storage) {
    if (localStorage.account) {
      let account = JSON.parse(localStorage.account);
      let dang_nhap = get.id("dang-nhap");
      dang_nhap.parentElement.classList.add("dropdown");
      dang_nhap.parentElement.innerHTML =
        ` 
      <a class="dropbtn" id="dang-nhap">Chào,` +
        account.name +
        `</a>
        <div class="dropdown-content">
        <img src="` +
        account.img +
        `">
            <a href="#" onclick="signOut();">Đăng xuất</a>
        </div>`;
      if (get.id("dang-ky") !== null) {
        get.id("dang-ky").remove();
      }
    }
  }
}
function changePass(params) {
  if (hidden_pass) {
    hidden_pass = !hidden_pass;
    params.classList.remove("fa-eye-slash");
    params.classList.add("fa-eye");
    get.id("pass").type = "text";
  } else {
    hidden_pass = !hidden_pass;
    params.classList.add("fa-eye-slash");
    params.classList.remove("fa-eye");
    get.id("pass").type = "password";
  }
}

function products() {
  get.id("content").innerHTML = `<div id="products">
                <div class="container">
                    <div class="breadcrumd">
                        <a href="">Trang chủ</a>
                        <span><i class="fal fa-chevron-right"></i></span>
                        <p id="jqc_1"></p>
                    </div>
                    <hr class="m-0">
                    <div class="row">
                        <div class="col-1">
                            <p>Danh mục liên quan</p>
                            <a id="jqd_1"></a>
                            <hr>
                            <div class="thuong-hieu">
                                <p>Thương hiệu </p>
                                <div class="checkbox">
                                    <input type="checkbox" name="" id="">
                                    <span>Calbee</span>
                                </div>
                                <div class="checkbox">
                                    <input type="checkbox" name="" id="">
                                    <span>Calbee</span>
                                </div>
                                <div class="checkbox">
                                    <input type="checkbox" name="" id="">
                                    <span>Calbee</span>
                                </div>
                                <div class="checkbox">
                                    <input type="checkbox" name="" id="">
                                    <span>Calbee</span>
                                </div>

                            </div>
                            <hr>
                            <div class="dich-vu">
                                <p>Dịch vụ</p>
                                <div class="checkbox">
                                    <input type="checkbox" name="" id="">
                                    <span>Giao hàng miễn phí</span>
                                </div>
                                <div class="checkbox">
                                    <input type="checkbox" name="" id="">
                                    <span>Thanh toán khi nhận hàng</span>
                                </div>
                                <div class="checkbox">
                                    <input type="checkbox" name="" id="">
                                    <span>Được thực hiện bởi Bibibuy</span>
                                </div>
                            </div>
                            <hr>
                            <div class="dia-diem">
                                <p>Địa điểm</p>
                                <div class="checkbox">
                                    <input type="checkbox" name="" id="">
                                    <span>Nội địa</span>
                                </div>
                                <div class="checkbox">
                                    <input type="checkbox" name="" id="">
                                    <span>Nước ngoài</span>
                                </div>
                            </div>
                            <hr>
                            <div class="gia">
                                <p>Giá</p>
                                <div class="price">
                                    <input type="text" name="" id="" placeholder="Tối thiểu">
                                    <span>-</span>
                                    <input type="text" name="" id="" placeholder="Tối đa">
                                </div>
                                <i class="fas fa-caret-square-right"></i>
                            </div>
                        </div>
                        <div class="col-2">
                            <h3 id="jqc_2"></h3>
                            <div class="sort row">
                                <div class="left">
                                    <p class="m-0" id="products-count">0 sản phẩm tìm thấy</p>
                                </div>
                                <div class="right">
                                    <p class="m-0">Sắp xếp theo:</p>
                                    <select id="sort">
                                        <option value="1">Độ phổ biến</option>
                                        <option value="2">Giá từ thấp tới cao</option>
                                        <option value="3">Giá từ cao xuống thấp</option>
                                        <option value="4">Yêu thích</option></option>
                                    </select>&nbsp;&nbsp;
                                    <p class="m-0">Xem:</p>&nbsp;
                                    <i class="fas fa-th-large"></i>&nbsp;
                                    <i class="fas fa-th-list"></i>
                                </div>
                            </div>
                            <hr>
                            <div class="products" id="show_products">
                            </div>
                            <div class="pagination ml-auto">
                                <i class="fal fa-chevron-left disable"></i>
                                <span id='pagination'>1/15</span>
                                <i class="fal fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                </div>

            </div>`;
}
function a_cart(type) {
  var auth2 = gapi.auth2;
  if (auth2 !== undefined) {
    if (localStorage.cart) {
      let cart = JSON.parse(localStorage.cart);
      let f_cart = cart.find(function(obj) {
        return obj.params == product_data_j.params;
      });
      if (f_cart !== undefined) {
        let i = cart.indexOf(f_cart);
        let d = {
          params: product_data_j.params,
          count: Number(get.id("quantity").innerText),
          data: product_data_j
        };
        cart[i] = d;
        localStorage.cart = JSON.stringify(cart);
      } else {
        let d = {
          params: product_data_j.params,
          count: Number(get.id("quantity").innerText),
          data: product_data_j
        };
        cart.push(d);
        localStorage.cart = JSON.stringify(cart);
      }
    } else {
      let arr = [];
      let d = {
        params: product_data_j.params,
        count: Number(get.id("quantity").innerText),
        data: product_data_j
      };
      arr.push(d);
      localStorage.cart = JSON.stringify(arr);
    }
    account = JSON.parse(localStorage.account);
    update_cart_account(account.email, localStorage.cart);
    s_q_cart();
    if (type == "add") {
      alert_add();
    } else {
      location.href = "#/gio-hang";
    }
  } else {
    location.href = "#/dang-nhap";
  }
}
function u_q_cart() {
  if (localStorage.cart) {
    let p = create.el("p");
    let cart = JSON.parse(localStorage.cart);
    let count = 0;
    for (let i = 0; i < cart.length; i++) {
      const element = cart[i];
      count += element.count;
    }
    p.innerHTML = count;
    get.id("show_quantity_cart").append(p);
  }
}
function s_q_cart() {
  if (localStorage.cart) {
    let p = create.el("p");
    let cart = JSON.parse(localStorage.cart);
    let count = 0;
    for (let i = 0; i < cart.length; i++) {
      const element = cart[i];
      count += element.count;
    }
    p.innerHTML = count;
    get.id("show_quantity_cart").append(p);
  }
}
function alert_add() {
  alert("Thêm thành công");
}
function contentProductDetail(params) {
  let product_data = params;
  product_data_j = params;
  let div = create.el("div");
  div.id = "product-detail";
  var rating = "";
  for (let j = 1; j <= 5; j++) {
    let eli = create.el("i");
    if (Math.ceil(product_data.ratingScore) >= j) {
      if (product_data.ratingScore > j) {
        eli.className = "fas fa-star";
        rating += eli.outerHTML;
      } else {
        eli.className = "fas fa-star-half-alt";
        rating += eli.outerHTML;
      }
    } else {
      eli.className = "far fa-star";
      rating += eli.outerHTML;
    }
  }
  if (product_data.originalPrice == null) {
    originalPrice = numberWithDots(product_data.price);
    discount = "-0%";
  } else {
    discount = product_data.discount;
    originalPrice = numberWithDots(product_data.originalPrice);
  }

  div.innerHTML =
    `                <div class="container">
                    <div class="breadcrumd">
                        <a href="">Trang chủ</a>
                        <span><i class="fal fa-chevron-right"></i></span>
                        <a id="title_category_detail" >Trang chủ</a>
                        <span><i class="fal fa-chevron-right"></i></span>
                        <p>` +
    params.name +
    `</p>
                    </div>
                    <div class="info row">
                        <div class="col-1">
                            <div class="swiper-container">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="swiper-zoom-container"><img src="` +
    params.thumb +
    `" alt=""></div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="swiper-zoom-container"><img src="./imgs/404.svg" alt=""></div>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="swiper-container-thumbs" style="margin-top: 4px;">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide"><img src="` +
    params.thumb +
    `" alt="" width="67.188px " height="67.188px "></div>
                                   <div class="swiper-slide"><img src="./imgs/404.svg" alt="" ></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-2">
                            <h2>
                               ` +
    params.name +
    `
                            </h2>
                            <div class="rating-social">
                                <div class="rating" id="rating">
                                    ` +
    rating +
    `</i>&nbsp;&nbsp;&nbsp;
                                    <span> ` +
    params.review +
    ` đánh giá &nbsp;|&nbsp; 46 câu hỏi đã trả lời</span>
                                </div>
                                <div class="social">
                                    <i class="fas fa-share-alt"></i>
                                    <i class="far fa-heart"></i>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="trademark">
                                <span>Thương hiệu:&nbsp;&nbsp;</span>
                                <span>OEM | Sản phẩm của OEM</span>
                            </div>
                            <div class="price">
                                <p>` +
    numberWithDots(product_data.price) +
    `₫  &nbsp;&nbsp;<span> ` +
    originalPrice +
    ` ₫</span></p>
                            </div>
                            <div class="quantity">
                                <span>Số lượng:</span>&nbsp;&nbsp;&nbsp;&nbsp;
                                <i class="fal fa-minus" onclick="quantity_reduction()"></i>
                                <span id="quantity">1</span>
                                <i class="fal fa-plus" onclick="quantity_increase()"></i>
                            </div>
                            <div class="button row">
                                <a  onclick="a_cart('buy')">MUA NGAY</a>
                                <a onclick="a_cart('add')" >THÊM VÀO GIỎ HÀNG</a>
                            </div>
                        </div>
                        <div class="col-3">
                            <img src="./imgs/address.png" alt="" width="100%">
                        </div>
                    </div>
                    <div class="desc row">
                        <div class="col-1">
                            <div class="title">
                                <h3>Mô tả sản phẩm Bột Yến Mạch Mỹ Nguyên Chất Nuts talk 500g</h3>
                            </div>
                            <div class="content">
                                <div class="arler-shop">
                                    <p><i class="fas fa-exclamation-circle"></i> &nbsp; Đây là sản phẩm được bán bởi
                                        Nhà
                                        Bán Hàng
                                        và
                                        Nhà Bán Hàng có trách nhiệm xuất hóa đơn
                                        theo luật hiện hành.</p>
                                </div>
                                <div class="m-description row">
                                    <ul class="cola-1">
                                        <li>Bảo vệ tim</li>
                                        <li>Chăm sóc da mặt</li>
                                        <li>Giúp đốt cháy chất béo nhanh hơn</li>
                                    </ul>
                                    <ul class="cola-1">
                                        <li>Tránh suy nhược thần kinh</li>
                                        <li>Yến mạch trị mụn trứng cá Chữa da dị ứng và mẩn đỏ</li>
                                    </ul>
                                </div>
                                <hr>
                                <div class="detail-content">
                                    <h3><strong>THÔNG TIN SẢN PHẨM&nbsp;yến mạch Úc&nbsp;giữ nguyên độ tươi ngon, mùi
                                            thơm đặc trưng</strong></h3>

                                    <p>- Luôn đảm bảo date mới nhất cho khách là&nbsp; hạn dùng 15 tháng</p>

                                    <p>Hạt yến mạch được biết đến như một loại ngũ cốc giàu dinh dưỡng và cực kỳ tốt
                                        cho sức khỏe cũng như làm đẹp với
                                        công dụng đa năng kỳ diệu. Ưu điểm dễ nhận biết của yến mạch là giàu chất xơ
                                        hòa tan, giúp giảm nguy cơ mắc
                                        bệnh tim mạch, chống ung thư hay các vấn đề về đường tiêu hóa.&nbsp;</p>

                                    <h3><br>
                                        Yến mạch được trồng tại Úc là 100% hữu cơ vì được trồng và canh tác tự
                                        nhiên,vẫn giữ nguyên độ tươi ngon, mùi
                                        thơm đặc trưng, không sử dụng hóa chất làm phân bón hóa học, được đảm bảo bằng
                                        độ phì nhiêu của đất, nguồn
                                        nước, nuôi trồng bằng thực phẩm hữu cơ, phòng bệnh bằng phương pháp tự nhiên.</h3>

                                    <h3><img alt="Kết quả hình ảnh cho yến mạch úc" src="https://vn-live-02.slatic.net/original/9289faf6f77b96fc438d493158e4c33c.jpg"><br>
                                        <br>
                                        Yến mạch được xem là một trong những loại thực phẩm tự nhiên có giá trị dinh
                                        dưỡng cao, tốt cho sức khỏe. Yến
                                        mạch có tác dụng chống axit hóa, kích thích ngon miệng, phát triển chiều cao,
                                        phòng chống các bệnh ung thư, tim
                                        mạch, tiểu đường, tránh suy nhược thần kinh, củng cố hệ miễn dịch làm trắng da
                                        một cách tự nhiên đặc biệt với
                                        làn da nhạy cảm.<br>
                                        <br>
                                        Hạt yến mạch Custom Food Group được sản xuất theo công nghệ hiện đại của Úc với
                                        những quy chuẩn khép kín không
                                        chứa các hóa chất độc hại ảnh hưởng đến sức khỏe người tiêu dùng.</h3>

                                    <h3>- <strong>Dùng yến mạch để giảm cân</strong></h3>

                                    <p><img alt="bột yến mạch, yến mạch giảm cân,yến mạch dinh dưỡng, yến mạch nguyên hạt, yến mạch quaker, yến mạch giảm cân"
                                            src="https://vn-live-02.slatic.net/original/475e319dc249e81a45ce6649dcc7d717.jpg"
                                            title="Yến mạch quaker giảm cân hiệu quả"></p>

                                    <p>Để giảm cân với yến mạch: bạn có thể dùng yến mạch để nấu cháo ăn thay cơm hàng
                                        ngày. Kết hợp cùng với ăn trứng
                                        luộc và hoa quả.</p>

                                    <p><img alt="yen-mach-mang-den-cho-ban-voc-dang-thon-gon-dephon" src="https://vn-live-02.slatic.net/original/15db116f55b209decf8f4c290b94eafb.jpg"></p>

                                    <p>Sản phẩm yến mạch mang đến cho bạn vóc dáng thon gọn hơn</p>

                                    <p>Giảm cân bằng bột yến mạch Úc giúp đảm bảo an toàn cho sức khỏe của bạn bởi yến
                                        mạch cung cấp nhiều dưỡng chất
                                        cho sức khỏe giúp bạn đủ năng lượng để có thể làm việc hàng ngày dù lượng ăn
                                        giảm đi.<br>
                                        Giảm cân bằng yến mạch giúp bạn tránh khỏi tình trạng mất sức do thiếu năng
                                        lượng khi giảm cân không đúng cách.</p>

                                    <h3>- <strong>Nấu cháo ăn dặm cho bé</strong></h3>

                                    <p>Trong&nbsp;<strong>bột&nbsp;yến mạch</strong>&nbsp;có chứa
                                        nhiều&nbsp;enzyme&nbsp;thủy phân tinh bột nên rất dễ
                                        tiêu hóa. Ngoài ra yến mạch có chứa nhiều chất sắt, kẽm,&nbsp;calcium&nbsp;cũng
                                        như vitamin B và&nbsp;folic
                                        acid&nbsp;làm tăng khả năng tập trung, giúp trẻ thông minh và phát triển trí
                                        não. Bột yến mạch được dùng rộng
                                        rãi ở Châu âu , vì rất ngon và bổ dưỡng khi quấy với bột với sữa , trứng , nước
                                        xương hoặc thịt bằm cho trẻ em
                                        từ 6 tháng tuổi trở lên , người ốm , người cao tuổi.</p>

                                    <p><strong>Cách nấu yến mạch đơn giản với sữa:</strong></p>

                                    <p>Lấy 2 muỗng canh bột yến mạch hòa với 300ml nước đun , khuấy đều 5-7 phút sau
                                        khi sôi cho đường và 1 muỗng canh
                                        sữa đặc hoặc sữa bột bỏ thêm 1 ít bơ cho vị thơm ngon . Nếu nấu với sữa tươi
                                        thì lấy 2 muỗng canh bột hòa với
                                        180ml sữa tươi và 120 ml nước đun , khuấy đều khoảng 5-7 phút sau khi sôi cho
                                        đường và 1 ít bơ tùy khẩu vị . Có
                                        thể thay bơ bằng dầu ăn.</p>

                                    <p><strong>- Làm đẹp với yến mạch&nbsp;</strong></p>

                                    <p>Không chỉ là loại thực phẩm bổ dưỡng, yến mạch còn rất tuyệt vời trong chăm sóc
                                        da và làm đẹp.&nbsp;Các loại mặt
                                        nạ dưới đây&nbsp;<strong>phù hợp với mọi loại da, đặc biệt là da nhạy cảm</strong>.
                                        Mặt nạ yến mạch vừa có tác
                                        dụng làm trắng da, tẩy tế bào chết, ngăn ngừa mụn vừa rất giàu dinh dưỡng giúp
                                        da căng tràn và mịn màng.</p>

                                    <p>…….____________<img alt="bột yến mạch, yến mạch giảm cân,yến mạch dinh dưỡng, yến mạch nguyên hạt, yến mạch quaker, yến mạch giảm cân"
                                            src="https://vn-live-02.slatic.net/original/bbb0323f781765f41d2586cd6036fd97.jpg"
                                            title="Làm đẹp với yến mạch"></p>

                                    <p><strong>- Thực phẩm dinh dưỡng hàng ngày</strong></p>

                                    <p><img alt="bột yến mạch, yến mạch giảm cân,yến mạch dinh dưỡng, yến mạch nguyên hạt, yến mạch quaker, yến mạch giảm cân"
                                            src="https://vn-live-02.slatic.net/original/fff70357852ba0ccc284884f218b5e56.jpg"
                                            title="Yến mạch quaker"></p>

                                    <p>Yến mạch là thực phẩm dinh dưỡng hàng ngày rất được ưa chuộng tại phương Tây với
                                        những lợi ích to lớn cho sức
                                        khỏe</p>

                                    <p><strong><em>Tăng khả năng vận động của cơ bắp:&nbsp;</em></strong>Bạn có cơ sở
                                        để&nbsp;tin&nbsp;rằng ăn bánh làm
                                        từ bột yến mạch giúp bạn làm việc lâu hơn, sự vận động của cơ thể dẻo dai hơn.
                                        Các nhà khoa học Anh đã chỉ ra
                                        rằng nên ăn các thực phẩm làm từ bột yến mạch 3 tiếng trước khi làm việc, đặc
                                        biệt là công việc đòi hỏi vận
                                        động nhiều. Bột yến mạch sẽ giúp cơ thể đốt cháy mỡ thừa nhanh chóng và cung
                                        cấp năng lượng&nbsp;triệt để cho
                                        cơ bắp.</p>

                                    <p><strong><em>Chống ung thư:&nbsp;</em></strong>Ăn sáng với bột yến mạch mỗi ngày
                                        sẽ giúp phòng ngừa nguy cơ ung
                                        thư vú. Đặc biệt đối với phụ nữ ở thời kỳ tiền mãn kinh, có hiện tượng thừa
                                        chất xơ từ các loại ngũ cốc, thì
                                        bột yến mạch sẽ giúp giảm nguy cơ tăng lượng chất xơ trong cơ thể, điều hòa nội
                                        tiết.</p>

                                    <p data-spm-anchor-id="a2o4n.pdp.product_detail.i4.fb9e6e52IbPnlA"><strong><em>Tránh
                                                suy nhược thần kinh, củng cố
                                                hệ miễn dịch của cơ thể và cải thiện đời sống tình dục:</em></strong>&nbsp;yến
                                        mạch có chứa nhiều chất
                                        sắt, kẽm, calcium cũng như vitamin B và folic acid giúp tăng khả năng tập trung
                                        và kích thích tố sinh dục. Nếu
                                        lỡ quá chén hoặc bị táo bón, cháo yến mạch sẽ là giải pháp tối ưu giúp bạn vượt
                                        qua những cảm giác khó chịu.</p>
                                </div>
                            </div>

                        </div>
                        <div class="col-2"></div>
                    </div>
            </div>`;
  get.id("content").innerHTML = ``;
  get.id("content").appendChild(div);
  var thumbsSwiper = new Swiper(".swiper-container-thumbs", {
    slidesPerView: 5,
    spaceBetween: 5
  });
  new Swiper("#product-detail .swiper-container", {
    zoom: {
      minRatio: 1,
      maxRatio: 3
    },
    speed: 400,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    },
    thumbs: {
      swiper: thumbsSwiper
    }
  });
}

function content404() {
  get.id("content").innerHTML = `  <div id="not-found" class="container">
                <iframe src="./404.html" frameborder="0" height="800" width="1180" style="margin-bottom:-4px;"></iframe>
            </div>`;
}
function show_cart_d(params) {
  var auth2 = gapi.auth2;
  if (auth2 !== undefined) {
    location.href = "#/gio-hang";
  } else {
    location.href = "#/dang-nhap";
  }
}
function show_cart_detail(params) {
  var auth2 = gapi.auth2;
  if (auth2 !== undefined) {
    if (localStorage.cart !== "") {
      if (localStorage.cart !== []) {
        // p.log(localStorage.cart);
        get.id("content").innerHTML = ` <div id="show_cart">
          <div class="container">
          <h3>Thanh toán</h3>
            <div class="row">
              <div class="col8">
                <div class="h1" id="show_cart_detail">
                  
                </div>
              </div>
              <div class="col4">
                <div class="h2 payment">
                  <button onclick="delete_product_all()">Thanh toán</button>
                  <div class="total">Tổng: <span id="totalll">50000</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>`;
        let cart = JSON.parse(localStorage.cart);
        let total_ttt = 0;
        for (let i = 0; i < cart.length; i++) {
          const element = cart[i];
          let str_cart = { name: "" };
          str_cart.name = element.data.params;
          total_ttt = Number(element.count) * Number(element.data.price);
          let div = create.el("div");
          div.classList.add("row");
          div.classList.add("h3");
          div.innerHTML =
            `<div class=" row h3">
        <div class="col2">
          <img
            width="100%"
            src="` +
            element.data.thumb +
            `"
            alt=""
          />
        </div>
        <div class="col5 padding-top">
          <a href="">
          ` +
            element.data.name +
            `
                      </a>
        </div>
        <div class="col2 padding-top" ><p style="color: #f46a00;font-size: 20px; text-align: center" class="m-0">  ` +
            numberWithDots(element.data.price) +
            ` ₫</p></div>
        <div class="col2 padding-top"><p style="font-size: 15px; text-align: center" class="m-0">Số lượng:  ` +
            numberWithDots(element.count) +
            ` </p></div>

        <div class="col1 padding-top">
        <p onclick="delete_product(\'` +
            element.data.params +
            `\')"  style=" cursor: pointer;font-size: 15px; text-align: center" class="m-0"><i class="fas fa-trash-alt"></i> </p>
           
        </div>
      </div>`;
          get.id("show_cart_detail").appendChild(div);
        }
        get.id("totalll").innerHTML = numberWithDots(total_ttt) + ` ₫`;
      } else {
        get.id("content").innerHTML = ` <div id="show_cart">
          <div class="container">
          <h3>Bạn chưa có sản phẩm trong giỏ</h3>
          <a href="#">Tiếp tục mua sắm</a>
           </div>
        </div>`;
      }
    } else {
      get.id("content").innerHTML = ` <div id="show_cart">
          <div class="container">
          <h3>Bạn chưa có sản phẩm trong giỏ</h3>
          <a href="#">Tiếp tục mua sắm</a>
           </div>
        </div>`;
    }
  } else {
    location.href = "#/dang-nhap";
  }

  // let cart = JSON.parse(localStorage.cart);
  // if (cart) {
  // } else {
  // }
}
function delete_product(paramspp) {
  let cart = JSON.parse(localStorage.cart);
  let f_cart = cart.find(function(params) {
    return params.data.params == paramspp;
  });
  let i = cart.indexOf(f_cart);
  cart.splice(i, 1);

  localStorage.cart = JSON.stringify(cart);
  email = JSON.parse(localStorage.account);
  update_cart_account(email.email, localStorage.cart);
  setTimeout(() => {
    location.reload();
  }, 3000);
}
function delete_product_all(paramspp) {
  localStorage.cart = [];
  email = JSON.parse(localStorage.account);
  update_cart_account(email.email, localStorage.cart);
  setTimeout(() => {
    window.location.href = "#/hoan-thanh";
    location.reload();
  }, 3000);
}
function contentThank() {
  get.id("content").innerHTML = ` <div id="show_cart">
          <div class="container">
          <h3>Cám ơn bạn đã mua hàng </h3>
          <a href="#">Tiếp tục mua sắm</a>
           </div>
        </div>`;
}
