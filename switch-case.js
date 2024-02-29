/**
 * 1 = minggu
 * 2 = senin
 * 3 = selasa
 * 4 = rabu
 * 5 = kamis
 * 6 = jumat
 * 7 = sabtu
 */

let hariAngka = 4;
switch (hariAngka) {
  case 1:
    console.log('Minggu');
    break;
  case 2:
    console.log('Senin');
    break;
  case 3:
    console.log('Selasa');
    break;
  case 4:
    console.log('Rabu');
    break;
  case 5:
    console.log('Kamis');
    break;
  case 6:
    console.log('Jumat');
    break;
  case 7:
    console.log('Sabtu');
    break;
  default:
    console.log('Hari tidak ditemukan');
    break;
}

let storageLocation = 'harddisk';
switch (storageLocation) {
  case 'cache':
    console.log('Anda akan menyimpan ke cache');
  case 'memory':
    console.log('Anda akan menyimpan ke memory');
  case 'harddisk':
    console.log('Anda akan menyimpan ke harddisk');
    break;
}
