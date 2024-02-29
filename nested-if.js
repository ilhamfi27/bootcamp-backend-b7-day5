const hari = 'jumat';
const adaMeeting = false;
const lokasiMeeting = 'kantor';
const jamMeeting = 10;
const bosDateng = false;

if (
  (hari === 'jumat' && adaMeeting && lokasiMeeting === 'kantor') ||
  bosDateng
) {
  console.log('Saya akan meeting di kantor');
} else {
  console.log('Saya akan kerja di rumah');
}

// if (hari === 'jumat') {
//   if (adaMeeting && lokasiMeeting === 'kantor') {
//     if (jamMeeting > 9) {
//       console.log('Saya akan meeting di kantor');
//     } else {
//       console.log('Saya akan meeting di kafe');
//     }
//   } else {
//     console.log('Saya akan kerja di rumah');
//   }
//   console.log('Saya akan jumatan');
// } else {
//   if (!adaMeeting) {
//     console.log('Saya akan kerja di rumah');
//   } else {
//     console.log('Saya akan kerja di kantor');
//   }
// }

// const idBarang = 10001;
// const qty = 10;
// let harga = 100000;

// if (idBarang === 10001) {
//   if (qty > 5) {
//     harga = harga - harga * 0.1;
//   } else if (harga * qty > 70000) {
//     harga = harga - harga * 0.05;
//   } else {
//     console.log('Anda tidak mendapatkan diskon');
//   }
//   console.log('Anda mendapatkan bonus');
// }
