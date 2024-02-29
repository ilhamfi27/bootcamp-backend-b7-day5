let hari = 'sabtu';
let cuaca = 'terik';
let payung = true;

if (hari === 'senin' && cuaca === 'hujan' && !payung) {
  console.log('Saya akan kerja di rumah');
} else if (hari === 'jumat' && cuaca === 'cerah') {
  console.log('Saya akan kerja di kafe');
} else if (hari === 'sabtu') {
  console.log('Saya akan kerja di pantai');
} else {
  console.log('Saya akan kerja di kantor');
}

if (cuaca === 'hujan' || hari === 'minggu') {
  console.log('saya akan pake mobil');
} else {
  console.log('saya akan pake motor');
}
