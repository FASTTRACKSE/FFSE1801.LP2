
var list_products = [
    {
        id: 1,
        name: "Americano nóng",
        thumb: "https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/5L1rxcZKRG53m876xCBtfiP5mkd8xtGLEk3aVgVG.jpeg",
        desc: "cà phê espresso uống theo cách của người Mỹ, espresso pha loãng với nước, dễ uống hơn espresso mà vẫn cung cấp đủ lượng cafeine",
        price: 39,
    },
    {
        id: 2,
        name: "Americano đá",
        thumb: "https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/5L1rxcZKRG53m876xCBtfiP5mkd8xtGLEk3aVgVG.jpeg",
        desc: "cà phê espresso uống theo cách của người Mỹ, espresso pha loãng với nước, dễ uống hơn espresso mà vẫn cung cấp đủ lượng cafeine",
        price: 39,
    },
    {
        id: 3,
        name: "Cappucino nóng",
        thumb: "https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/XuEq9URO2lPZE1mxDMn4RY0FO9sx5Dppol3cQPsC.jpeg",
        desc: "cà phê espresso kết hợp với sữa tươi đánh nóng, foam sữa dày mịn, độ ngọt và béo của sữa tươi đánh nóng hòa quyện cùng vị đậm đà của cà phê espresso",
        price: 45,
    },
    {
        id: 4,
        name: "Cappucino đá",
        thumb: "https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/XuEq9URO2lPZE1mxDMn4RY0FO9sx5Dppol3cQPsC.jpeg",
        desc: "Espresso (cà phê Ý), sữa tươi và đá.",
        price: 45,
    },
    {
        id: 5,
        name: "Caramel đá xay",
        thumb: "https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/BXqwqpwViPUlyCUybVQA5Bg4sWfsHLdiY2lBRP9Q.jpeg",
        desc: "cà phê đá xay với caramel, cà phê espresso hòa quyện cùng syrup caramel và whipping cream rưới sốt caramel bên trên",
        price: 59,
    },
    {
        id: 6,
        name: "Caramel macchiato nóng",
        thumb: "https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/QiBb15QEnqt9lO81zUDXN57Qr0RWmOEEhtVNQjQH.jpeg",
        desc: "độ béo của sữa tươi đánh nóng và cà phê espresso kết hợp với vị ngọt của sốt caramel",
        price: 55,
    },
    {
        id: 7,
        name: "Caramel macchiato đá",
        thumb: "https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/QiBb15QEnqt9lO81zUDXN57Qr0RWmOEEhtVNQjQH.jpeg",
        desc: "Espresso (cà phê Ý), sữa tươi và caramel.",
        price: 55,
    },
    {
        id: 8,
        name: "Latte nóng",
        thumb: "https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/Y8FeEBo6jkmu6ErE6lxDvT8bgkVRcyHuEMOF7wD7.jpeg",
        desc: "cà phê espresso kết hợp với sữa tươi đánh nóng, foam sữa mỏng, tạo hình bằng foam sữa trên nền cà phê, độ ngọt của sữa tươi đánh nóng hòa quyện cùng vị đậm đà của cà phê espresso",
        price: 45,
    },
    {
        id: 9,
        name: "Latte đá",
        thumb: "https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/Y8FeEBo6jkmu6ErE6lxDvT8bgkVRcyHuEMOF7wD7.jpeg",
        desc: "Espresso (cà phê Ý) sữa tươi.",
        price: 45,
    },
    {
        id: 10,
        name: "Mocha nóng",
        thumb: "https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/I164lcfIlZhxDwJkkjZIHQ2VzJYYtxYZj2UHHmAc.jpeg",
        desc: "cà phê espresso kết hợp cùng chocolate và sữa tươi, độ ngọt của sốt chocolate, béo của sữa và vị cà phê kết hợp",
        price: 49,
    },
    {
        id: 11,
        name: "Mocha đá",
        thumb: "https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/I164lcfIlZhxDwJkkjZIHQ2VzJYYtxYZj2UHHmAc.jpeg",
        desc: "cà phê espresso kết hợp cùng chocolate và sữa tươi, độ ngọt của sốt chocolate, béo của sữa và vị cà phê kết hợp",
        price: 49,
    },
    {
        id: 12,
        name: "Mocha đá xay",
        thumb: "https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/9xo47lLqC1gNT4GeSjVxayaqQRcsNxpqLsuTzZWC.jpeg",
        desc: "cà phê đá xay hương chocolate, cà phê espresso hòa quyện cùng chocolate và whipping cream rưới sốt chocolate bên trên",
        price: 59,
    },
    {
        id: 13,
        name: "Cà phê đen nóng",
        thumb: "https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/2EaiPVhzkJxpoUYocYEkJShDl8KYvV7YxSqFdA5l.jpeg",
        desc: "sử dụng tỷ lệ trộn 70% Robusta và 30% Arabica, vị đậm đà đặc trưng của robusta và hương thơm của hạt Arabica hòa quyện",
        price: 29,
    },
    {
        id: 14,
        name: "Cà phê đen đá",
        thumb: "https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/2EaiPVhzkJxpoUYocYEkJShDl8KYvV7YxSqFdA5l.jpeg",
        desc: "sử dụng tỷ lệ trộn 70% Robusta và 30% Arabica, vị đậm đà đặc trưng của robusta và hương thơm của hạt Arabica hòa quyện",
        price: 29,
    },
    {
        id: 15,
        name: "Cà phê sữa nóng",
        thumb: "https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/aBrljYZABP5w9DSp7RVX3yvA8QGQkKVRDb1RnodF.jpeg",
        desc: "vị đậm đà của cà phê hòa quyện với vị ngọt và béo của sữa đặc",
        price: 29,
    },
    {
        id: 16,
        name: "Cà phê sữa đá",
        thumb: "https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/aBrljYZABP5w9DSp7RVX3yvA8QGQkKVRDb1RnodF.jpeg",
        desc: "vị đậm đà của cà phê hòa quyện với vị ngọt và béo của sữa đặc",
        price: 29,
    },
    {
        id: 17,
        name: "Bạc sỉu",
        thumb: "https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/fhSlmMuOUgBJe8X1r61rpTYCDclCblEEzchCm1DY.jpeg",
        desc: "hàm lượng cà phê ít hơn, độ ngọt và béo từ sữa đặc kết hợp với sữa tươi",
        price: 29,
    },
    {
        id: 18,
        name: "Socola đá xay",
        thumb: "https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/JdcEFIZHjILe8tYObxrQ8S6BzHcdvTnrOtALFoqo.jpeg",
        desc: "chocolate xay cùng sữa tươi kết hợp whipping cream rưới sốt chocolate phía trên",
        price: 59,
    },
    {
        id: 19,
        name: "Cookies đá xay",
        thumb: "https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/HOlc6LGTYBrh0K6fFndZKwdAeXaZcY538jM7JiVO.jpeg",
        desc: "Espresso (cà phê Ý), sữa tươi và đá.",
        price: 59,
    },
    {
        id: 20,
        name: "Socola đá",
        thumb: "https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/59N46ec9zJ6mAqeTMegOh1629gh2CIjRJAfZZBrj.png",
        desc: "Socola",
        price: 55,
    },
    {
        id: 21,
        name: "Sinh tố việt quất",
        thumb: "https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/cjFfxh5WemEHDV9gSUc8xNk4BVAtZBXPkIJTG8Fe.jpeg",
        desc: "sữa chua kết hợp cùng mức blueberry thơm nồng, chua nhẹ",
        price: 59,
    },
    {
        id: 22,
        name: "Soda việt quất",
        thumb: "https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/Tg3vi4O5gNaCoMud6kNA4DLeDzzq8dSF6X9QfcoH.jpeg",
        desc: "mùi thơm, chua nhẹ, ngọt nhẹ của mức việt quất kết hợp cùng soda",
        price: 45,
    },
    {
        id: 23,
        name: "Nước cam tươi",
        thumb: "https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/Rb6ohKMqCBcDJYMqDg6AK4axRhWG6bX256U9lQr0.jpeg",
        desc: "Espresso (cà phê Ý), sữa tươi và đá.",
        price: 65,
    },
    {
        id: 24,
        name: "Sinh tố cam xoài",
        thumb: "https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/taVqROhnhyyZ05Nj8k3ZidcJ9nPiH7WuIWXjAHOP.jpeg",
        desc: "vị chua của cam, thơm của xoài xay với sữa chua kết hợp cùng foan kem sữa và vụn bánh oreo nướng",
        price: 59,
    },
    {
        id: 25,
        name: "Mojito chanh tươi",
        thumb: "https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/7Jh4XCA4A9xu1zM5YqhE6mu4wfASPPGm5cGr35h0.jpeg",
        desc: "mùi thơm của lá hung lũi, cay nhẹ của xả, vị the mát của icy mint, vị chua của chanh vị ngọt của đường cát kết hợp với nhau",
        price: 45,
    },
    {
        id: 26,
        name: "Mojito chanh dây",
        thumb: "https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/gfpo5VkgF2Md3vDWzzyBM3kUVPFlhHOY1jh9FE9w.jpeg",
        desc: "Espresso (cà phê Ý), sữa tươi và đá.",
        price: 45,
    },
    {
        id: 27,
        name: "Matcha đá xay",
        thumb: "https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/vPWEITCzmAgFYLmr6gIZZPLz1EQ6SZGVXN02mMBj.jpeg",
        desc: "Trà xanh đá xay, hương thơm đặc trưng của trà xanh xay cùng sữa tươi và đá mát lạnh",
        price: 59,
    },
    {
        id: 28,
        name: "Trà matcha latte nóng",
        thumb: "https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/IauKnjPVWzfEeJljFBIE64vzCIOpMEyZ3jlBZdqP.jpeg",
        desc: "trà xanh kết hợp cùng sữa tươi, mùi thơm nồng đặc trưng của trà xanh kết hợp cùng sữa tươi",
        price: 55,
    },
    {
        id: 29,
        name: "Cappucino đá",
        thumb: "https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/gXKp3RDOMVX7B60TkOe41B4QyGfkH0bVSVKqZ0DS.jpeg",
        desc: "trà xanh kết hợp cùng sữa tươi, mùi thơm nồng đặc trưng của trà xanh kết hợp cùng sữa tươi",
        price: 55,
    },
    {
        id: 30,
        name: "Matcha macchiato",
        thumb: "https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/W61OhyyLoOFAnERi8RvNO55xG9aYPDCfgpzome1d.jpeg",
        desc: "Matcha macchiato có vị hơi nhẫn đắng của bột matcha nhưng có hậu vị ngọt, bùi; kết hợp cùng foam phô mai thơm ngậy",
        price: 45,
    },
    {
        id: 31,
        name: "Trà đen macchiato",
        thumb: "https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/Xjh9E850NsEjs4f1vHBpiEkfh2o2fOeJHl2kuICY.jpeg",
        desc: "Trà đen macchiato đem lại cảm giác thú vị cho vị giác khi chất chát đậm đà của trà đen hòa cùng vị mằn mặn béo ngậy của kem phô mai.",
        price: 42,
    },
    {
        id: 32,
        name: "Trà hoa đậu biếc macchiato",
        thumb: "https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/9bT8pk9GFVzNY24l544Rd1TH5kYaibXpzKTxWlKN.jpeg",
        desc: "Sản phẩm kết hợp giữa trà hoa, trái cây và milk foam",
        price: 45,
    },
    {
        id: 33,
        name: "Trà đào cam sả",
        thumb: "https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/jM29yXO6Y8W4DaYmdgSsDtGIgJ9PUAdhI1iMm8Tr.jpeg",
        desc: "trà kết hợp với vị ngọt, hương thơm của đào, vị nồng của xả, mùi thơm từ cam vàng, hòa quyện tạo ra 1 thức uống mát và tốt cho sức khỏe",
        price: 42,
    },
    {
        id: 34,
        name: "Trà gạo rang macchiato",
        thumb: "https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/MD48rb84GVpIWC7bBouykrNfg7UcHZM7dZVDUzzz.jpeg",
        desc: "Trà gạo rang Macchiato",
        price: 48,
    },
    {
        id: 35,
        name: "Trà ổi thanh long macchiato",
        thumb: "https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/veNp8aOEON93xjJnciWFarmBrSBK5ZVoY0lr2iGn.png",
        desc: "Trà ổi thanh long Macchiato",
        price: 48,
    },
    {
        id: 36,
        name: "Americano macchiato",
        thumb: "https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/omDwaNH0Hdra6avWGa2KXAlxiXYFOZLrGVBM9DRT.png",
        desc: "Americano Macchiato",
        price: 45,
    },
    
]

// hàm hiện list sản phẩm trong trang order
function showproducts() {
    for (let index = 0; index < list_products.length; index++) {
        let div = document.createElement("div");
        div.classList.add("media")
        div.classList.add("mt-3")
        div.classList.add("col")
        div.classList.add("p-0")
        div.innerHTML = `
        <img class="mr-3 img-fluid" style="width: 12%; height: auto;" src="`+ list_products[index].thumb + `"
        alt="Generic placeholder image">
        <div class="media-body col">
            <h5 class="mt-0">`+ list_products[index].name + `</h5>
            <p class="m-0">`+ list_products[index].desc + `</p>
            <p>`+ list_products[index].price + `$</p>
        </div>
        <div class="col-4">
            <input type="number" style="cursor: text;" class="text-center btn btn-sm btn-outline-dark col-lg-3 col-md-6 col-6" id="quantity`+ list_products[index].id + `" value="1" min="1"></input>
            <button class="btn btn-primary btn-sm" onclick="cart(`+ list_products[index].id + `)">add cart</button>
        </div>
        `
        document.getElementById("order").appendChild(div);
    }
}
//show cart
function showcart() {
    let cart = JSON.parse(localStorage.cart);
    for (let index = 0; index < cart.length; index++) {
        let products = list_products.find(function (p) {
            return p.id == cart[index].id
        })
        let tr = document.createElement("tr");
        tr.innerHTML = `
        <td data-th="Product">
            <div class="row">
                <div class="col-lg-2 col-md-2 p-0"><img id="myImg" src="`+products.thumb+`" class="img-fluid w-100 px-1 img-responsive"
                    alt="..." /></div>
                <div class="col-lg-10 col-md-10 ">
                    <h5 class="nomargin">`+products.name+`</h5>
                    <p>`+products.desc+`</p>
                </div>
            </div>
        </td>
        <td id="price" class="product-price" data-th="Price">`+products.price+`</td>
        <td data-th="Quantity">
            <input id="" type="number" class="form-control text-center product-quantity" value="`+cart[index].counta+`">
        </td>
        <td class="product-subtotal text-center" data-th="Subtotal">0</td>
        <td class="actions text-center" data-th="">
            <button class="btn btn-danger btn-sm btn-custom" onclick="remove_cart(`+cart[index].id+`)"><i class="far fa-trash-alt delete"></i></button>
        </td>
        `
        document.getElementById("showcart").appendChild(tr);
        // console.log(products)
    }

}
function remove_cart(params) {
    let cart = JSON.parse(localStorage.cart)
    for( var i = 0; i < cart.length; i++){ 
        if ( cart[i].id == params) {
            cart.splice(i, 1); 
        } 
     }
     localStorage.cart = JSON.stringify(cart);
     window.location.reload();
}

// local storage
function cart(params) {
    if (localStorage.cart) {
        let cart = JSON.parse(localStorage.cart)
        let products = cart.find(function (p) {
            return p.id == params
        })
        if (products !== undefined) {
            for (let index = 0; index < cart.length; index++) {
                if (cart[index].id == params) {
                    cart[index].counta = document.getElementById('quantity' + params).value;
                    localStorage.cart = JSON.stringify(cart);
                }

            }
        } else {
            let temp = {
                id: params,
                counta: document.getElementById('quantity' + params).value,
            }
            cart.push(temp)
            localStorage.cart = JSON.stringify(cart)
        }
        localStorage.cart = JSON.stringify(cart)
    } else {
        let cart = [];
        let temp = {
            id: params,
            counta: document.getElementById('quantity' + params).value,
        }
        cart.push(temp)
        localStorage.cart = JSON.stringify(cart)
    }
}

///////////multi and total cart page------------------------------------
function multiplication() {
    var listprice = document.getElementsByClassName("product-price");
    var listquantity = document.getElementsByClassName("product-quantity");
    var listsubtotal = document.getElementsByClassName("product-subtotal");
    var total = null;
    for (let index = 0; index < listprice.length; index++) {
        let mul = parseFloat(listprice[index].innerHTML) * listquantity[index].value;
        listsubtotal[index].innerHTML = mul + "$";
        listquantity[index].min = 1;
        total += mul
    }
    for (let i = 0; i < 2; i++) {
        document.getElementsByClassName("total")[i].innerHTML = total.toFixed(2) + "$";
    }
}
// -------------------------end function------------------------------------------
// functon show password---------------------------------
function showpass() {
    if(document.getElementById("password").type==="password"){
        document.getElementById("password").type="text"
    }else{
        document.getElementById("password").type="password"        
    }
}
// function sort items------------------------------
function sort_default(){
    list_products.sort(function(a,b){
        return a.id - b.id
    })
}
function sort_up() {
    list_products.sort(function (a,b) {
        return a.price - b.price
    })
}
function sort_down(){
    list_products.sort(function (a,b) {
        return b.price - a.price
    })
}
function sort_AZ(){
    list_products.sort(function(a, b){
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
    });
}
function sort_ZA(){
    list_products.sort(function(a, b){
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
    });
    list_products.reverse();
}
// console.log(list_products)
//active-menu
//search










function alertt(){
    alert("Sorry! chức năng này đang được phát triển!");
}
function sent(){
    alert("message was sent!");
}

