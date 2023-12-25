function checkLogin() {
  // event.preventDefault(); 
  // Ngăn chặn việc submit mặc định của form
  var taikhoan = document.getElementById('taikhoan').value;
  var matkhau = document.getElementById('matkhau').value;
  console.log(taikhoan)
  // Kiểm tra nếu tài khoản là số điện thoại và mật khẩu không trống
  if (isPhoneNumber(taikhoan) && matkhau.trim() != "") {
    // Chuyển đến trang admin
    window.location.href = 'admin.html';
    
  } else {
    alert('Đăng nhập thất bại! Vui lòng nhập số điện thoại và mật khẩu không để trống!');
    
    if(alert){
      document.getElementById('taikhoan').value = '';
      document.getElementById('matkhau').value = '';
    }
  }
}


function isPhoneNumber(input) {
    // Biểu thức chính quy để kiểm tra số điện thoại (định dạng 10 chữ số)
    var phonePattern = /^[0-9]{10}$/;
    // Kiểm tra xem chuỗi có khớp với biểu thức chính quy không
    return phonePattern.test(input)
}

  
