var ay = window.prompt("Lütfen yazdırmak istediğiniz ay numarası giriniz");

var ayAdi =

ay == "1"
  ? "Ocak"
  : ay == "2"
  ? "Şubat"
  : ay == "3"
  ? "Mart"
  : ay == "4"
  ? "Nisan"
  : ay == "5"
  ? "Mayıs"
  : ay == "6"
  ? "Haziran"
  : ay == "7"
  ? "Temmuz"
  : ay == "8"
  ? "Ağustos"
  : ay == "9"
  ? "Eylül"
  : ay == "10"
  ? "Ekim"
  : ay == "11"
  ? "Kasım"
  : ay == "12"
  ? "Aralık"
  : "Lütfen 1-12 arasında bir sayı giriniz.";
window.alert(ayAdi);
