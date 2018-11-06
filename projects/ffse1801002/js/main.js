function header() {
  let g_header = document.getElementById("header");
  g_header.innerHTML = ` <div class="log">
	<div class="logo text-center col-lg-12 col-sm-12">
	  <a href="trang-chu.html"><img class="d-none d-lg-block ctner" src="img/log1.png"></a>
	  <a href="trang-chu.html"><img class="d-block d-lg-none ctner" src="img/logo1sm.png"></a>
	  <p class="d-none d-lg-block ctner">November 2018 | a hipster cafe & lounge of vietnam | est. 2007</p>
	</div>
  </div>
  <div class="bor col-sm-12 col-md-12 col-lg-12">
	<div class="navbar navbar-expand-md  menu ctner">
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
		<span class="oi oi-menu"></span>
	  </button>
	  <div class="collapse navbar-collapse" id="collapsibleNavbar">
		<ul class="navbar-nav bt">
		  <li class="nav-item">
			<a href="trang-chu.html" class="nav-link"><span class="oi oi-star"></span>TRANG CHỦ</a>
		  </li>
		  <li class="nav-item dropdown">
			<a href="gioi-thieu.html" class="nav-link"><span class="oi oi-star"></span>GIỚI THIỆU</a>
		  </li>
		  <li class="nav-item">
			<a href="thuc-don.html" class="nav-link"><span class="oi oi-star"></span>THỰC ĐƠN</a>
		  </li>
		  <li class="nav-item">
			<a href="tap-hoa.html" class="nav-link"><span class="oi oi-star"></span>TẠP HÓA</a>
		  </li>
		  <li class="nav-item">
			<a href="cua-hang.html" class="nav-link"><span class="oi oi-star"></span>CỬA HÀNG</a>
		  </li>
		  <li class="nav-item">
			<a href="lien-he.html" class="nav-link"><span class="oi oi-star"></span>LIÊN HỆ</a>
		  </li>
		</ul>
		<ul class="navbar-nav">
		  <li class="nav-item">
			<a href="#" class="nav-link lang"><img src="img/hq.png"></a>
			<a href="#" class="nav-link lang"><img src="img/vn.png"></a>
			<a href="#" class="nav-link lang"><img src="img/anh.png"></a>
		  </li>
		</ul>
	  </div>
	</div>
  </div>`;
}
header();
function menu_active() {
  let url = window.location.pathname;
  let page = url.split("/");
  switch (page[2]) {
    case "trang-chu.html":
      active(0);
      break;
    case "gioi-thieu.html":
      active(1);
      break;
    case "thuc-don.html":
      active(2);
      break;
    case "tap-hoa.html":
      active(3);
      break;
    case "cua-hang.html":
      active(4);
      break;
    case "lien-he.html":
      active(5);
      break;
    default:
      break;
  }
}
function active(params) {
  let g_nav = document.getElementsByClassName("nav-link");
  g_nav[params].classList.add("active");
}

menu_active();
