const user = {
    firstName: "Hafiz",
    lastName: "Rafif",
    age : 14,
    isWork: false,
    home: "Surabaya"
}

console.log(`Hallo nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);
console.log(`Saya berasal dari ${user.home}`);

const sekolah = {
    nama: "Elkisi",
    level: "SMP",
    kelas: 2,
    kabupaten: "Mojokerto"
}

const allIdentitas = {...user, ...sekolah}; //gabung 2 object menjadi 1 object
console.log(allIdentitas);