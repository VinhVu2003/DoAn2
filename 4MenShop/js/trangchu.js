$(document).ready(function(){
    $('.product-selling-content').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
});
// ----------------------------slideshow-------------------------

var index = 0;
function next(){
    var imgs = ["./anh/slideshow1.jpg","./anh/slideshow3.jpg","./anh/banner-top-trang-chu-3-slide-21.jpg"]
    document.getElementById('img').src = imgs[index];
    index++;
    if(index==3){
        index=0;
    }
}

function prev(){
    
    var imgs = ["./anh/slideshow1.jpg","./anh/slideshow2.jpg","./anh/slideshow3.jpg"]
    document.getElementById('img').src = imgs[index];
    index--;
    if(index<0){
        index=2;
    }
}
setInterval("next()",3000)
// ----------------------------------------------------------------------------

const btn = document.querySelectorAll('.producttext')
// console.log(btn)
btn.forEach(function(producttext){
 
    producttext.addEventListener("click",function(event){{
        var btnItem = event.target
        
        var product = btnItem.parentElement.parentElement
      
        console.log(product)
        var productsmall = product.querySelector(".productimgsmall")
        var productImg = productsmall.querySelector("img").src

        var productText = product.querySelector(".producttext") 
        var productName = productText.querySelector("a").innerText

        var productMoney = product.querySelector(".protect-money")
        var productPrice = productMoney.querySelector("p").innerText
        
         console.log(productImg)
         console.log(productName)
         console.log(productPrice)
        var productInfo = {
            img: productImg,
            name: productName,
            price: productPrice
        };
        localStorage.setItem('selectedProduct', JSON.stringify(productInfo));
        window.location.href = 'chitietsanpham.html';
        // addcart(productPrice,productName,productImg)
        // alert("Thêm sản phẩm thành công!")
    }   
    })
})

const btn_New = document.querySelectorAll('.producttext-new')
// console.log(btn_New)
btn_New.forEach(function(producttext){
    producttext.addEventListener("click",function(event){{
        var btnItem = event.target
        
        var product = btnItem.parentElement.parentElement.parentElement
        // .parentElement.parentElement.parentElement
        console.log(product)
        var productsmall = product.querySelector(".productimgpig-new")
 
        var productImg = productsmall.querySelector("img").src

        var productText = product.querySelector(".producttext-new") 
        var productName = productText.querySelector("a").innerText

        var productMoney = product.querySelector(".protect-money-new")
        var productPrice = productMoney.querySelector("p").innerText
        
         console.log(productImg)
         console.log(productName)
         console.log(productPrice)
        var productInfo = {
            img: productImg,
            name: productName,
            price: productPrice
        };
        localStorage.setItem('selectedProduct', JSON.stringify(productInfo));
        window.location.href = 'chitietsanpham.html';
        
    }   
    })
})

const cart = document.querySelectorAll('.overlayitem')
cart.forEach(function(producttext){
    producttext.addEventListener("click",function(event){{
        var btnItem = event.target
        
        var product = btnItem.parentElement.parentElement.parentElement.parentElement.parentElement
      
        console.log(product)
        var productsmall = product.querySelector(".productimgsmall")
        var productImg = productsmall.querySelector("img").src

        var productText = product.querySelector(".producttext") 
        var productName = productText.querySelector("a").innerText

        var productMoney = product.querySelector(".protect-money")
        var productPrice = productMoney.querySelector("p").innerText
        
        var listProduct = localStorage.getItem('listProduct')? JSON.parse(localStorage.getItem('listProduct')):[]
       
        var search = listProduct.find(x=>x.name=== productName)
        if(!search){
            listProduct.push({
                img: productImg,
                name: productName,
                price: productPrice,
                sl:1
            })
            localStorage.setItem('listProduct',JSON.stringify(listProduct));
            alert("Thêm sản phẩm thành công!")
            Product()
            updateCartItemCount()
        }
        else{
            ThongBaoLoi() 
        }
    }   
    })
})




document.addEventListener('click', function(event) {
    // Kiểm tra xem phần tử được click có class là 'overlayitem' hay không
    if (event.target.classList.contains('fa-cart-shopping')) {
        // Lấy thông tin sản phẩm từ phần tử cha gần nhất có class là 'contentsmall'
        const product = event.target.closest('.contentsmall-new');

        // Lấy thông tin ảnh sản phẩm
        const productImg = product.querySelector('.productimgpig-new a img').src;

        // Lấy thông tin tên sản phẩm
        const productName = product.querySelector('.producttext-new a').innerText;

        // Lấy thông tin giá tiền sản phẩm
        const productMoney = product.querySelector('.protect-money-new p').innerText;

        // Tiếp tục xử lý theo nhu cầu của bạn
        console.log('Product Image:', productImg);
        console.log('Product Name:', productName);
        console.log('Product Money:', productMoney);

        var listProduct = localStorage.getItem('listProduct')? JSON.parse(localStorage.getItem('listProduct')):[]
       
        var search = listProduct.find(x=>x.name=== productName)
        if(!search){
            listProduct.push({
                img: productImg,
                name: productName,
                price: productMoney,
                sl:1
            })
            localStorage.setItem('listProduct',JSON.stringify(listProduct));
            alert("Thêm sản phẩm thành công!")
            Product()
            updateCartItemCount()
        }
        else{
            ThongBaoLoi() 
        }
    }
});


function ThongBaoLoi() {
    // Tạo một phần tử div để chứa thông báo
    var alertDiv = document.createElement("div");
    alertDiv.id = "ThongBaoLoi";
    alertDiv.innerHTML = 
                        `
                        <div style="float: left;"><i class="fa-regular fa-message" style="font-size: 20px; margin-top: 10px;"></i></div>
                        <div style="float: left; margin-left: 10px;">
                            <strong>Thông báo...</strong><br> Sản phẩm đã có trong giỏ hàng!
                        </div>
                        `;

    // Thêm phần tử div vào body
    document.body.appendChild(alertDiv);

    // Hiển thị thông báo
    alertDiv.style.display = "block";
    
    setTimeout(function () {
        alertDiv.style.display = "none";
        // Xóa phần tử div sau khi đã tự đóng
    }, 2000);
}

// ------------------------------cart------------------------------------
function Product() {
    var listItemBuy = localStorage.getItem('listProduct') ? JSON.parse(localStorage.getItem('listProduct')) : [];
    var div = document.querySelector('.giohang-chung'); // Sử dụng document.querySelector thay vì $ để lấy phần tử
    var content = '';
      
    listItemBuy.forEach(function (value, index) {
        content +=
          `
          <table >
                <tr>
                    <td rowspan="3" style="width: 70px;"><img src="${value.img}" style="width: 100%;height: 100%;"></td>
                    <td style="padding-left: 5px;text-align: left;line-height: normal;"> 
                        <p>${value.name}</p>
                    </td>
                </tr>
                <tr>
                    <td style="padding-left: 5px;text-align: left;">
                        <p>${value.price}</p>
                    </td>
                </tr>
                <tr>
                    <td style="padding-left: 5px;text-align: left;">
                        <button onclick="deleteItem(${index})" style="margin-bottom: 15px;"> <i class="fa-solid fa-trash"></i></button>
                    </td>
                </tr>
            </table>
          `;
        });
      
    div.innerHTML = content; // Sử dụng innerHTML để thay thế nội dung của phần tử
}
Product()

function deleteItem(index) {

    var result= confirm("Bạn có chắc chắn muốn xóa!")
    if(result){
        var listItemBuy = localStorage.getItem('listProduct') ? JSON.parse(localStorage.getItem('listProduct')) : [];
        listItemBuy.splice(index, 1);
        localStorage.setItem('listProduct', JSON.stringify(listItemBuy));
        Product(); // Re-render the product list
    }
    updateCartItemCount()
}

function updateCartItemCount() {
    var cart = JSON.parse(localStorage.getItem('listProduct')) || {};
    var itemCount = 0;
    for (var productId in cart) {
        if (cart.hasOwnProperty(productId)) {
            itemCount += 1; // Tổng số lượng sản phẩm trong giỏ hàng
        }
    }
    // console.log(itemCount)
    var cartItemCountElement= document.getElementById("count_cart")
    // Hiển thị số lượng đơn hàng bên cạnh icon giỏ hàng
    cartItemCountElement.textContent = itemCount;

    if(itemCount==0){
        cartItemCountElement.textContent = "";
    }
}
updateCartItemCount()
// backtotop
const toTop = document.querySelector(".back-top");
window.addEventListener("scroll",() =>{
    if(window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active")
    }
})


//giohang

var icon = document.querySelector('.fa-cart-shopping')
var content = document.querySelector('.giohang')
content.style.display='none'
icon.addEventListener('click',function(){
    if(content.style.display === 'none'){
        content.style.display = 'block'
    }
    else {
        content.style.display = 'none'   
    }

})
