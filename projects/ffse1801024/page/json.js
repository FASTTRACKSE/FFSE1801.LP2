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
function btn() {
  let input = document.getElementById("input").value;
  let select = document.getElementById("select").value;
  let name = select.split("/")[1];
  select = select.split("/")[0];
  input = JSON.parse(input);
  arr = [];
  for (let i = 0; i < input.length; i++) {
    temp = {
      category: select,
      params: str_slug(input[i].name),
      name: input[i].name,
      originalPrice: parseInt(input[i].originalPrice),
      price: parseInt(input[i].price),
      discount: input[i].discount,
      ratingScore: parseFloat(input[i].ratingScore),
      review: parseInt(input[i].review),
      location: input[i].location,
      thumb: input[i].image,
      productUrl: input[i].productUrl
    };
    arr.push(temp);
  }
  arr = JSON.stringify(arr);
  db.collection("products")
    .doc(select)
    .set({ data: arr, name: name });

  console.log(arr);
}
function getdb(params) {
  let select = document.getElementById("select").value;
  var docRef = db.collection("products").doc(select);
  docRef
    .get()
    .then(function(doc) {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        console.log(JSON.parse(doc.data().data));
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
}
const 
