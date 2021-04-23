let randomNumber = Math.round(Math.random() * 10);
function findNumber(){
    let enteredNum  = document.getElementById('enteredNum').value;
    //let randomNumber = Math.round(Math.random ()* 10);
    //console.log(randomNumber);

    let outNumber = document.getElementById('out');
    let ourNum = document.getElementById('enterNum');
    let message = document.getElementById('msg');
    //outNumber.innerHTML = "Kompyuter tanlagan raqam  " + randomNumber;
    ourNum.innerHTML = "Siz kiritgan raqam  " + enteredNum;

    if(enteredNum == randomNumber){
        message.innerHTML = "Siz topdingiz"
    }
    else if(enteredNum > randomNumber ){
        message.innerHTML = "Siz katta raqam kiritdingiz"
    }
    else {
        message.innerHTML = "Siz kichik raqam kiritdingiz"
    }
    
}
