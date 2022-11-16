const date = new Date();

// tanggal bulan tahun
function today() {
  const tanggal = date.getDate();
  const bulan = date.getMonth();
  const tahun = date.getFullYear();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return `${tanggal} ${months[bulan]} ${tahun}`;
}

// jam
function hour() {
  let jam = date.getHours();
  let menit = date.getMinutes();
  let ampm = jam; //mencari satuan AM PM

  if (ampm >= 12) {
    ampm = "PM"; //jika ampm lebih dari sama dengan 12 maka ampm = PM
  } else {
    ampm = "AM"; //jika ampm kurang dari 12 maka ampm = AM
  }

  jam = jam % 12; //mencari nilai jam agar dimulai dari 0-12

  if ((jam = jam)) {
    jam; //untuk jam 0 dan 24 akan menampilkan jam 12 am
  } else {
    jam = 12; //untuk jam 12 akan menampilkan 12 pm
  }

  menit = menit < 10 ? "0" + menit : menit;

  return `${jam}:${menit} ${ampm} `;
}

console.log(today());
console.log(hour());

// coba
document.getElementById("messageTime").innerText = hour();
document.getElementById("messageTime2").innerText = hour();
document.getElementById("messageTime3").innerText = hour();
document.getElementById("messageTime4").innerText = hour();
document.getElementById("messageTime5").innerText = hour() + today();
document.getElementById("messageTime6").innerText = hour();
