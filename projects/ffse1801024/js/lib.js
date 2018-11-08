const get = {
  id: function(param) {
    return document.getElementById(param);
  },
  class: function(param) {
    return document.getElementsByClassName(param);
  },
  tag: function(param) {
    return document.getElementsByTagName(param);
  },
  name: function(param) {
    return document.getElementsByName(param);
  },
  tagNs: function(param) {
    return document.getElementsByTagNameNS(param);
  },
  data: function(url, f) {
    let request = null;
    if (window.XMLHttpRequest) {
      request = new XMLHttpRequest();
    } else {
      request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    request.open("GET", url, true);
    request.onload = f;
    request.onerror = function() {};
    request.send();
  },
  hash: function() {
    return window.location.hash;
  }
};
const create = {
  el: function(params) {
    return document.createElement(params);
  }
};
const p = {
  type: function(params) {
    return console.log(typeof params);
  },
  log: function(params) {
    return console.log(params);
  },
  table: function(params) {
    return console.table(params);
  }
};
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
const show = x => {
  get.id(x).style.display = "block";
};
const hidden = x => {
  get.id(x).style.display = "none";
};

firebase.initializeApp({
  apiKey: "AIzaSyCar15o_gyJDZh-_KicNQYwJiPFVVZOn2s",
  authDomain: "bibibuy-a9cc4.firebaseapp.com",
  databaseURL: "https://bibibuy-a9cc4.firebaseio.com",
  projectId: "bibibuy-a9cc4",
  storageBucket: "bibibuy-a9cc4.appspot.com",
  messagingSenderId: "108441251937"
});
// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});
const str_slug = function(title) {
  var slug;

  //Đổi chữ hoa thành chữ thường
  slug = title.toLowerCase();

  //Đổi ký tự có dấu thành không dấu
  slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, "a");
  slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, "e");
  slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, "i");
  slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, "o");
  slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, "u");
  slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, "y");
  slug = slug.replace(/đ/gi, "d");
  //Xóa các ký tự đặt biệt
  slug = slug.replace(
    /\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi,
    ""
  );
  //Đổi khoảng trắng thành ký tự gạch ngang
  slug = slug.replace(/ /gi, "-");
  //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
  //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
  slug = slug.replace(/\-\-\-\-\-/gi, "-");
  slug = slug.replace(/\-\-\-\-/gi, "-");
  slug = slug.replace(/\-\-\-/gi, "-");
  slug = slug.replace(/\-\-/gi, "-");
  //Xóa các ký tự gạch ngang ở đầu và cuối
  slug = "@" + slug + "@";
  slug = slug.replace(/\@\-|\-\@|\@/gi, "");
  //In slug ra textbox có id “slug”
  return slug;
};
const quantity_increase = x => {
  let quantity = get.id("quantity");
  let num_quantity = Number(quantity.innerHTML);
  if (num_quantity >= 1) {
    quantity.innerHTML = num_quantity + 1;
  }
};
const quantity_reduction = x => {
  let quantity = get.id("quantity");
  let num_quantity = Number(quantity.innerHTML);
  if (num_quantity > 1) {
    quantity.innerHTML = num_quantity - 1;
  }
};
