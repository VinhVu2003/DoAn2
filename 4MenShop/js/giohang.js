function Product() {
    var listItemBuy = localStorage.getItem('listProduct') ? JSON.parse(localStorage.getItem('listProduct')) : [];
    var tbody = document.querySelector('.parentListCart'); // Sử dụng document.querySelector thay vì $ để lấy phần tử
    var content = '';
      
    listItemBuy.forEach(function (value, index) {
        content +=
          `
          <tr id="listCart">
              <td style="padding: 5px;"><img src="${value.img}" style="width: 50px;"></td>
              <td ng-model="tenSanPham"><p><span class="TTSP">${value.name}</span></p></td>
              <td style="display: flex;margin-top: 21px;">
                  <div><button onclick="tangsl(${index})" class="tang" type="button">+</button></div>
                  <input class="sl" type="text" value="${value.sl}" min="0">
                  <div><button onclick="giamsl(${index})" class="giam" type="button">-</button></div>
              </td>
              <td>
                  <select id="size" class="size">
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                  </select>
              </td>
              <td> <p><span class="gia">${value.price}</span></p></td>
              <td><button class="xoa" onclick="deleteItem(${index})">Xóa</button></td>
          </tr>
          `
        ;
    });
      
    tbody.innerHTML = content; // Sử dụng innerHTML để thay thế nội dung của phần tử
      
        // total()
        
    tongtien();
}
Product()

// document.addEventListener('DOMContentLoaded', function() {
//     // Mã JavaScript của bạn ở đây
//     var listItemBuy = localStorage.getItem('listProduct') ? JSON.parse(localStorage.getItem('listProduct')) : [];
//     listItemBuy.forEach(function(index){
//         var selectSizePage2 = document.getElementById("size");
//         if (selectSizePage2) {
//             selectSizePage2.value = storedSelectedSize;
//         } else {
//             console.error(`Element with id size_${index} not found in the DOM.`);
//         }
//     })
// });
function deleteItem(index) {
    var result= confirm("Bạn có chắc chắn muốn xóa!")
    if(result){
        var listItemBuy = localStorage.getItem('listProduct') ? JSON.parse(localStorage.getItem('listProduct')) : [];
        listItemBuy.splice(index, 1);
        localStorage.setItem('listProduct', JSON.stringify(listItemBuy));
        Product(); // Re-render the product list
    }
}
    
function tongtien() {
    var listItemBuy = localStorage.getItem('listProduct') ? JSON.parse(localStorage.getItem('listProduct')) : [];
    var total = 0;

    listItemBuy.forEach(function (x) {
        var gia=x.price;
        var sl=x.sl;
        total += sl*gia; // Assuming 'price' is a numeric value
    });
    console.log(total)

    var totalSpan = document.querySelector('.total-span');
   
    totalSpan.textContent = formatAmount(total)+" VNĐ"; 
}

function formatAmount(amount) {
    // Multiply the amount by 1000
    amount *= 1000;
    // Use toLocaleString to add commas as thousands separators
    return amount.toLocaleString('en-VN');
}

function tangsl(index){
    var listProductLocal = localStorage.getItem('listProduct')? JSON.parse(localStorage.getItem('listProduct')):[]
    var sl = listProductLocal[index].sl
    sl++
    listProductLocal[index].sl = sl
    localStorage.setItem('listProduct',JSON.stringify(listProductLocal))
    Product()
    tongtien()
}

function giamsl(index){
        
    var listProductLocal = localStorage.getItem('listProduct')? JSON.parse(localStorage.getItem('listProduct')):[]
    var sl = listProductLocal[index].sl
    if(sl>1){
        sl--
        listProductLocal[index].sl = sl
        localStorage.setItem('listProduct',JSON.stringify(listProductLocal))
        Product()
        tongtien()
    }
}


const tt = document.querySelector("#btn_thanh_toan")
tt.addEventListener("click", function(){
    var ht =document.querySelectorAll('.content-left-input')
    
    // ht.forEach(function(input) {
    //     input.addEventListener("keydown", function() {
    //         validateInput(input);
    //     });
    // });
    var name=ht[0].value;
    var email=ht[1].value;
    var sdt=ht[2].value;
    var ad1=ht[3].value;
    var ad2=ht[4].value;
    
    var ktname = /^[a-zA-Z]+$/;
    var ktemail = /^[^\s@]+@gmail\.com+$/;
    var ktphone = /^(0[1-9])+([0-9]{8,9})$/;
    
    if(ad1.trim() == "" || ad2.trim() == "" || name.trim() == "" || sdt.trim() == "" || email.trim() == "" ){
        alert("Không được để trống thông tin!")
        
    }
    else if(!ktphone.test(sdt))
    {
       
        alert("Vui lòng nhập đúng!")
    }
    else if(!ktemail.test(email))
    {
       
        alert("Vui lòng nhập đúng!")
    }
    else if(!ktname.test(name))
    {
       
        alert("Vui lòng nhập đúng!")
    }
    if(ktphone.test(sdt) && ktname.test(name) && ktemail.test(email) && ad1.trim() != "" && ad2.trim() != ""){
        alert("Đặt hàng thành công!")
        if(alert){
            window.location.href="trangchu.html"
        }
    }

})
























































    //  $scope.Tongtien=function(){
    //     var sum = 0
        
    //     var listProductLocal = localStorage.getItem('listProduct')? JSON.parse(localStorage.getItem('listProduct')):[]
    //     listProductLocal.map(function(item){
    //         var soluong = item.amount
    //         var gia = item.price
    //         sum += soluong*gia
    //     })
    //     var tongcong = document.querySelector(".tongcong span")
    //     tongcong.innerHTML = sum
    //     localStorage.setItem('listProduct',JSON.stringify(listProductLocal))
    //     console.log($scope.listItemBuy)
    //     $scope.tongtien;
    //     $scope.listItemBuy.forEach(x =>{
    //         $scope.tongtien += x.amount*x.price
    //     })
    //     console.log($scope.tongtien);
    // }
    // $scope.Tongtien();
   
    // deleteProduct = function(id){
    //     var listItemBuy = localStorage.getItem('listProduct')? JSON.parse(localStorage.getItem('listProduct')):[]
    //     listItemBuy.splice(id,1)
    //     localStorage.setItem('listProduct',JSON.stringify(listItemBuy))
    //     window.location.reload()
    // }




//     var productList = JSON.parse(localStorage.getItem('listProduct')) || [];
//     console.log(productList)

// function displayCartItems() {
//         var tableBody = document.getElementById('cartBody');
//         var totalPrice = 0;

//         tableBody.innerHTML = '';

//         for (var productId in cart) {
//             var product = cart[productId];
//             var price = parseFloat(product.price) || 0;
//             var quantity = parseInt(product.quantity) || 0;
//             var totalItemPrice = price * quantity;

//             totalPrice += totalItemPrice;

//             var newRow = document.createElement('tr');
//             newRow.innerHTML = `
//                 <td><img width="100px" src="${product.image}" alt="${product.name}"></td>
//                 <td>${product.name}</td>
//                 <td>
//                     <button class="remove" type="button" onclick="changeQuantity('${productId}', -1)">-</button>
//                     <input type="text" class="count" min="1" value="${quantity}">
//                     <button class="add" type="button" onclick="changeQuantity('${productId}', 1)">+</button>
//                 </td>
//                 <td>${totalItemPrice.toLocaleString('vi-VN')} đ</td>
//                 <td><button class="delete-item" type="button" data-product-id="${productId}" onclick="deleteItem('${productId}')">Xóa</button></td>
//                 <td><input type="checkbox" class="checkbox" data-product-id="${productId}" onchange="toggleProductSelection('${productId}')"></td>
//             `;

//             tableBody.appendChild(newRow);
//         }

//         var totalPriceElement = document.querySelector('.totals_price');
//         totalPriceElement.textContent = totalPrice.toLocaleString('vi-VN') + ' đ';
//     }
// function displayCartItems() {
//     var tableBody = document.getElementById('cartBody');
//     var totalPrice = 0;

//     tableBody.innerHTML = '';

//     for (var productId in cart) {
//         var product = cart[productId];
//         var price = parseFloat(product.price) || 0;
//         var quantity = parseInt(product.quantity) || 0;
//         var totalItemPrice = price * quantity;

//         totalPrice += totalItemPrice;

//         var newRow = document.createElement('tr');
//         newRow.innerHTML = `
//             <td><img width="100px" src="${product.image}" alt="${product.name}"></td>
//             <td>${product.name}</td>
//             <td>
//                 <button class="remove" type="button" onclick="changeQuantity('${productId}', -1)">-</button>
//                 <input type="text" class="count" min="1" value="${quantity}">
//                 <button class="add" type="button" onclick="changeQuantity('${productId}', 1)">+</button>
//             </td>
//             <td>${totalItemPrice.toLocaleString('vi-VN')} đ</td>
//             <td><button class="delete-item" type="button" data-product-id="${productId}" onclick="deleteItem('${productId}')">Xóa</button></td>
//             <td><input type="checkbox" class="checkbox" data-product-id="${productId}" onchange="toggleProductSelection('${productId}')"></td>
//         `;

//         tableBody.appendChild(newRow);
//     }

//     var totalPriceElement = document.querySelector('.totals_price');
//     totalPriceElement.textContent = totalPrice.toLocaleString('vi-VN') + ' đ';
// }



