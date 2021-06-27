// alert('dfdgf');
function LayLoaiXe() {
    var ketqua;
    var grabCar = document.getElementById('grabCar').checked;
    var grabSUV = document.getElementById('grabSUV').checked;
    var grabBlack = document.getElementById('grabBlack').checked;

    if (grabCar) {
        ketqua = "grabCar";
    } else if (grabSUV) {
        ketqua = "grabSUV";
    } else if (grabBlack) {
        ketqua = "grabBlack";
    }

    return ketqua;

}


function TinhTien() {
    var laySoKM = document.getElementById('soKM').value;
    laySoKM = parseFloat(laySoKM);
    var layThoiGianCho = document.getElementById('thoiGianCho').value;
    layThoiGianCho = parseFloat(layThoiGianCho);
   
    var divThanhTien = document.getElementById('divThanhTien');
    divThanhTien.style.display = "block";
    var spanTien = document.getElementById('xuatTien');


    // // var thanhTien = laySoKM * 2 + layThoiGianCho*2;
    // // spanTien.innerHTML = thanhTien;
    var loaixe = LayLoaiXe();
    var thanhTien = 0;
    switch (loaixe) {
        case 'grabCar':
            if (isNaN(layThoiGianCho)==false && layThoiGianCho >= 3) {
                thanhTien = layThoiGianCho*2000;
            }
            if (laySoKM <= 1) {
                thanhTien += laySoKM * 8000;
            } else if (laySoKM > 1 && laySoKM <= 20) {
                thanhTien = laySoKM * 7500;
            }
            else if (laySoKM > 20) {
                thanhTien += laySoKM * 7000;
            }
            break;
        case 'grabSUV':
            if (isNaN(layThoiGianCho)==false && layThoiGianCho >= 3) {
                thanhTien = layThoiGianCho*3000;
            }
            if (laySoKM <= 1) {
                thanhTien += laySoKM * 9000;
            } else if (laySoKM > 1 && laySoKM <= 20) {
                thanhTien = laySoKM * 8500;
            }
            else if (laySoKM > 20) {
                thanhTien += laySoKM * 8000;
            }
            break;
        case 'grabBlack':
            if (isNaN(layThoiGianCho)==false && layThoiGianCho >= 3) {
                thanhTien = layThoiGianCho*3500;
            }
            if (laySoKM <= 1) {
                thanhTien += laySoKM * 10000;
            } else if (laySoKM > 1 && laySoKM <= 20) {
                thanhTien = laySoKM * 9500;
            }
            else if (laySoKM > 20) {
                thanhTien += laySoKM * 8000;
            }
            break;
    }
    spanTien.innerHTML = thanhTien; 

}
