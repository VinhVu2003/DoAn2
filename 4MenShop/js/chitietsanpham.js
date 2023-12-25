// Đợi cho trang được tải hoàn toàn
document.addEventListener('DOMContentLoaded', function() {
    // Lấy thông tin sản phẩm từ localStorage
    var productInfoString = localStorage.getItem('selectedProduct');
    // console.log(productInfoString);
    
    // Chuyển thông tin từ chuỗi JSON thành đối tượng JavaScript
    var productInfo = JSON.parse(productInfoString);
    console.log(productInfo)
    // Hiển thị thông tin sản phẩm trong các phần tử tương ứng
    var productImgElement = document.querySelector(".productimg");
    var productNameElement = document.querySelector(".productname");
    var productPriceElement = document.querySelector(".productprice");
    var title = document.querySelector(".title");
    // Gắn thông tin vào các phần tử
    title.innerText = productInfo.name;
    productImgElement.src = productInfo.img;
    productNameElement.innerText = productInfo.name;
    productPriceElement.innerText = productInfo.price;
});


const cart = document.querySelector('.btn_addcart')
cart.addEventListener("click",function(event){{
    var productInfoString = localStorage.getItem('selectedProduct');
// console.log(productInfoString);

// Chuyển thông tin từ chuỗi JSON thành đối tượng JavaScript
    var productInfo = JSON.parse(productInfoString);
    var productImg =productInfo.img
    var productName = productInfo.name
    var productPrice = productInfo.price

    var selectElement = document.getElementById("soluong");
    // Lấy giá trị được chọn
    var selectedValue = selectElement.value;  

    
    
    var selectElementSize = document.getElementById("size");
    // Lấy giá trị được chọn
    var selectedValueSize = selectElementSize.value;
    console.log(selectedValueSize)
    // Kiểm tra nếu giá trị được chọn là không hợp lệ (ví dụ: giá trị rỗng), bạn có thể thêm điều kiện để xử lý
    // console.log(productImg)
    // console.log(productName)
    // console.log(productPrice)
   
    var listProduct = localStorage.getItem('listProduct')? JSON.parse(localStorage.getItem('listProduct')):[]
   
    var search = listProduct.find(x=>x.name=== productName)
    if(!search){
        listProduct.push({
            img: productImg,
            name: productName,
            price: productPrice,
            sl:selectedValue,
            size:selectedValueSize
        })
        localStorage.setItem('listProduct',JSON.stringify(listProduct));
        window.location.href="giohang.html"
    }
    else{
        // filter được sử dụng để tạo một mảng mới chỉ chứa các phần tử không trùng lặp với productName.
        listProduct = listProduct.filter(item => item.name !== productName);
        localStorage.setItem('listProduct', JSON.stringify(listProduct));
        // Thực hiện các hành động khác khi xóa
        // ...
        listProduct.push({
            img: productImg,
            name: productName,
            price: productPrice,
            sl:selectedValue,
            size:selectedValueSize
        })
        localStorage.setItem('listProduct',JSON.stringify(listProduct));
        window.location.href="giohang.html"
        
    }
}   
})


const cart2 = document.querySelectorAll('.themgiohang')
cart2.forEach(function(themgiohang,index){
    themgiohang.addEventListener("click",function(event){{
        var productInfoString = localStorage.getItem('selectedProduct');
    // console.log(productInfoString);
    
    // Chuyển thông tin từ chuỗi JSON thành đối tượng JavaScript
        var productInfo = JSON.parse(productInfoString);
        var productImg =productInfo.img
        var productName = productInfo.name
        var productPrice = productInfo.price

        var selectElement = document.getElementById("soluong");
        // Lấy giá trị được chọn
        var selectedValue = selectElement.value;  

        // var selectElementSize = document.getElementById("size");
        // // Lấy giá trị được chọn
        // var selectedValueSize = selectElementSize.value;
        
        // Kiểm tra nếu giá trị được chọn là không hợp lệ (ví dụ: giá trị rỗng), bạn có thể thêm điều kiện để xử lý
        console.log(productImg)
        console.log(productName)
        console.log(productPrice)
       
        var listProduct = localStorage.getItem('listProduct')? JSON.parse(localStorage.getItem('listProduct')):[]
       
        var search = listProduct.find(x=>x.name=== productName)
        if(!search){
            listProduct.push({
                img: productImg,
                name: productName,
                price: productPrice,
                sl:selectedValue
            })
            localStorage.setItem('listProduct',JSON.stringify(listProduct));
            alert("Thêm thành công")

        }
        else{
            alert("Sản phẩm đã có trong giỏ hàng")
            
        }
    }   
    })
})



// function ThongBaoLoi() {
//     // Tạo một phần tử div để chứa thông báo
//     var alertDiv = document.createElement("div");
//     alertDiv.id = "ThongBaoLoi";
//     alertDiv.innerHTML = 
//                         `
//                         <div style="float: left;"><i class="fa-regular fa-message" style="font-size: 20px; margin-top: 10px;"></i></div>
//                         <div style="float: left; margin-left: 10px;">
//                             <strong>Thông báo...</strong><br> Sản phẩm đã có trong giỏ hàng!
//                         </div>
//                         `;

//     // Thêm phần tử div vào body
//     document.body.appendChild(alertDiv);

//     // Hiển thị thông báo
//     alertDiv.style.display = "block";
    
//     setTimeout(function () {
//         alertDiv.style.display = "none";
//         // Xóa phần tử div sau khi đã tự đóng
//     }, 2000);
// }

// function changeImage(id){
//     let imgParth=document.getElementById(id).getAttribute('src');
//     document.getElementById('img-main').setAttribute('src', imgParth);
// }


// $(document).ready(function(){
//     $('.product-selling-content').slick({
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         infinite: true,
//         prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
//         nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
//     });
// });
