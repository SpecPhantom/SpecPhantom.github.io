var BClicked = false
var audio = document.getElementById("HBDaudio")


function BOnClick()
{
    document.getElementById("CakeBday").src = "Bday_cake(out) (1).gif"
    alertWishes()
}
function alertWishes()
{
    alert("อธิฐานแล้วใช่เปล่า")
    alert("งั้นขออวยพรหน่อยนะ ขอให้สไมล์เจอแต่เรื่องทำให้ยิ้มได้ทุกวันนะ")
    alert("ไม่มีไรละ ปิดเว็บได้เลยยยยยย")
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function playAudio() { 
    audio.play(); 
  } 
  
  function pauseAudio() { 
    audio.pause(); 
  } 



