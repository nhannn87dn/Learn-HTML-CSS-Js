// input:
//  + dongia: integer
//  + soluong: ..
//  + giamgia: ...
// output:
//  + thanhtien
function tinhtien(dongia, soluong, giamgia) {
  if (dongia === 0) return 0;

  var thanhtien = (dongia * soluong * (100 - giamgia)) / 100;
  // output
  return thanhtien;
}
