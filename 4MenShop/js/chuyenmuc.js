const btn = document.querySelectorAll('.producttext')
btn.forEach(function(producttext,index){
 
    producttext.addEventListener("click",function(event){{
        var btnItem = event.target
        
        var product = btnItem.parentElement.parentElement
        // .parentElement.parentElement.parentElement
      
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
        
    }   
    })
})

const btn_right = document.querySelectorAll('.div-information')
btn_right .forEach(function(producttext,index){
 
    producttext.addEventListener("click",function(event){{
        var btnItem = event.target
        
        var product = btnItem.parentElement.parentElement.parentElement
        
      
        console.log(product)
        var productsmall = product.querySelector(".div-img")
        var productImg = productsmall.querySelector("img").src

        var productText = product.querySelector(".name") 
        var productName = productText.querySelector("a").innerText

        var productMoney = product.querySelector(".gia")
        var productPrice = productMoney.innerText
        
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
cart.forEach(function(producttext,index){
 
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
                sl:1
            })
            localStorage.setItem('listProduct',JSON.stringify(listProduct));
            alert("Thêm sản phẩm thành công!")
            Product()
        }
        else{
            alert("Sản phẩm đã có trong giỏ hàng!")
            
        }
    }   
    })
})