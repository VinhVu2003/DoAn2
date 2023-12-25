// Dữ liệu để vẽ biểu đồ
var data = {
    labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"],
    datasets: [{
        label: "Số lượng sản phẩm bán ra",
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        data: [1000, 900, 921,867 , 765,343,200,786,500,546,976,931],
    }],
};

// Lựa chọn cấu hình biểu đồ
var options = {
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

// Lấy đối tượng canvas và vẽ biểu đồ
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options,
});