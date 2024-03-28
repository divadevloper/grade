  let demo = document.getElementById('demo')
  let ringtone = new Audio('Winner.mp3')
  let ring = new Audio('Ewo ninu yin.mp3')
  let ringg = new Audio('Dave-Our-25th-Birthday-ft-Central-Cee-(JustNaija.com).mp3')
  let rinngg = new Audio ('No cast me .mp3')
  let ringgg = new Audio ('Okay!!!.mp3')
  function text() {

    if (input.value == "") {
        alert("Enter your Score")
    }else if (input.value >= 101) {
        alert('Enter a Correct Score')
    }else if(input.value >=70){
    alert('A')
    demo.innerHTML = "A"
     ringtone.play()
    }else if(input.value >=60){
        alert('B')
    demo.innerHTML = "B"
    ring.play()
    
    }else if (input.value >= 50) {
        alert('C')
    demo.innerHTML = "C"
    ringg.play()

    }else if (input.value >= 40) {
        alert('D')
    demo.innerHTML = "D"
    rinngg.play()

    }else {
        alert('F')
    demo.innerHTML = "F"
    ringgg.play()
    }

}