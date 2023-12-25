function checktk(input) {
    // Lấy giá trị hiện tại của input
    var inputValue = input.value;
   
    if (inputValue != "") {
        input.style.border = "1px solid gray";
    } else {
        input.style.border = "1px solid red";
    }
}

function checkmk(input) {
    // Lấy giá trị hiện tại của input
    var inputValue = input.value;
    if (inputValue != "") {
        input.style.border = "1px solid gray";
    } else {
        input.style.border = "1px solid red";
    }
}
function checkname(input) {
    // Lấy giá trị hiện tại của input
    var inputValue = input.value;
    var ktname = /^[a-zA-Z\s]+$/;
    if (ktname.test(inputValue)) {
        input.style.border = "1px solid gray";
    } else {
        input.style.border = "1px solid red";
    }
}
function checksdt(input) {
    // Lấy giá trị hiện tại của input
    var inputValue = input.value;
    var ktphone = /^(0[1-9])+([0-9]{8,9})$/;
    if (ktphone.test(inputValue)) {
        input.style.border = "1px solid gray";
    } else {
        input.style.border = "1px solid red";
    }
}
function checkmknhaplai(input) {
    var ht =document.querySelectorAll('.content-left-input')
    var mk1=ht[1].value;
    // Lấy giá trị hiện tại của input
    var inputValue = input.value;
    if (inputValue === mk1) {
        input.style.border = "1px solid gray";
    } else {
        input.style.border = "1px solid red";
    }
    
}

const tt = document.querySelector("#button")
tt.addEventListener("click", function(){
    var ht =document.querySelectorAll('.content-left-input')
    var tk=ht[0].value;
    var mk=ht[1].value;
    var mk2=ht[2].value;
    var sdt=ht[3].value;
    var name=ht[4].value;

    var ktphone = /^(0[1-9])+([0-9]{8,9})$/;

    if(tk.trim() == "" || mk.trim() == "" || name.trim() == "" || sdt.trim() == "" || mk2.trim() == "" ){
        alert("Không được để trống thông tin!")
        for( var i=0;i<ht,length;i++){
            if(ht[i].value == ""){
                ht[i].style.border = "1px solid red";
            }
            else{
                ht[i].style.border = "1px solid gray";
            }
        }
    }
    else if(mk2 != mk){
        alert("Mật khẩu nhập lại không khớp!")
    }
    else if(!ktphone.test(sdt)){
        alert("Số điện thoại không hợp lệ!")
    }
    else{
        alert("Đăng kí thành công!")
        window.location.href ="Login.html"
    }

})
