let button = document.createElement('button')
button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup-hot" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6H.5ZM13 12.5a2.01 2.01 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5ZM2.64 13.825 1.123 7h11.754l-1.517 6.825A1.5 1.5 0 0 1 9.896 15H4.104a1.5 1.5 0 0 1-1.464-1.175Z"/>
<path d="m4.4.8-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 3.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8Zm3 0-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 6.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8Zm3 0-.003.004-.014.019a4.077 4.077 0 0 0-.204.31 2.337 2.337 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.198 3.198 0 0 1-.202.388 5.385 5.385 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 9.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8Z"/>
</svg> Give me a coffee`
button.classList.add('buttonyellow')
//dans les cas ou j'ai fini les 25 minutes notif cest lheure de la pause
button.addEventListener('click', (e) => {
   
    Notification.requestPermission().then(reponse => { 

          if (reponse == 'granted') {
            const audio = new Audio("./bird.mp3");
  audio.play();
         new Notification('A coffee', {body: 'Plait-il?'})
           
          }        
    }).catch( err => console.log(err));
})
// dans les cas ou la pause est fini, faut s'y remettre
const objTimer = {
  playIsLive: false,
  sessionIsLive: false,
  sessionResetIsLive: false,
  breakOrNot: false,
  timerMinutsFocus: 25,
  darkModeIsOn: false,
  timerPause: 5,
  numbersRounds: 4,
  bigPause: 45,
  timerFocus: 25,
  timerPauseAll: 5,
  downRounds: 1,
}
let containertimer = document.createElement('div')
let bigcontainer = document.createElement('div')
let navbar = document.createElement('div')
let h1focus = document.createElement('h1')
let butsettings = document.createElement('button')
let buttimer = document.createElement('button')
let butplay = document.createElement('button')
let butlight = document.createElement('button')
let butreset = document.createElement('button')
let butnext = document.createElement('button')
let divbuttons = document.createElement('div')
let sessiontextall = document.createElement('div')
let sessiontext = '1';
h1focus.innerHTML = 'FOCUS'
let h4session1 = document.createElement('h4')
let h4session2 = document.createElement('h4')
let timertext = '25';
let timertext2 = '0';
let timertext3 = '0';
let sessionnow = `${objTimer.numbersRounds.toString()}`;
h4session1.innerHTML = `${sessiontext} of ${sessionnow}`
h4session2.innerHTML = `sessions`
sessiontextall.appendChild(h4session1)
sessiontextall.appendChild(h4session2)

divbuttons.appendChild(butreset)
divbuttons.appendChild(butplay)
divbuttons.appendChild(butnext)

butreset.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-repeat" viewBox="0 0 16 16">
<path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192Zm3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z"/>
</svg>`
butnext.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-end-fill" viewBox="0 0 16 16">
<path d="M12.5 4a.5.5 0 0 0-1 0v3.248L5.233 3.612C4.693 3.3 4 3.678 4 4.308v7.384c0 .63.692 1.01 1.233.697L11.5 8.753V12a.5.5 0 0 0 1 0V4z"/>
</svg>`
butplay.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
<path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
</svg>`
buttimer.classList.add('opacity')
butsettings.classList.add('opacity')
butnext.classList.add('opacity2')
butplay.classList.add('opacity2')
butreset.classList.add('opacity2')
butlight.classList.add('opacity3')
butlight.classList.add('opacity')
document.body.appendChild(bigcontainer)
bigcontainer.classList.add('bigcontainer')
buttimer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="butTime bi bi-gear" viewBox="0 0 16 16">
<path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
<path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
</svg> Settings`
butsettings.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="butTime bi bi-alarm" viewBox="0 0 16 16">
<path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"/>
<path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"/>
</svg> Timer`
butlight.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="butTime bi bi-brightness-high" viewBox="0 0 16 16">
<path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
</svg> Light Mode`
navbar.classList.add('navbar')
butsettings.classList.add('navset')
buttimer.classList.add('navset')

navbar.appendChild(butsettings)
navbar.appendChild(buttimer)
navbar.appendChild(butlight)
let container = document.createElement('div')
let timer = document.createElement('h1')
container.classList.add('container')
containertimer.classList.add('containertimer')
timer.classList.add('h1timer')
bigcontainer.appendChild(navbar)
bigcontainer.appendChild(container)
container.appendChild(containertimer)
containertimer.appendChild(timer)
container.appendChild(divbuttons)


timer.innerHTML = `${timertext}:${timertext2}${timertext3}`
container.appendChild(sessiontextall)
container.appendChild(button)



butplay.addEventListener('click', (e) => {
    
 
 console.log(objTimer.playIsLive)
    
      if (objTimer.playIsLive) {
        objTimer.playIsLive = false;
        butplay.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
        </svg>` 

      } else {
        objTimer.playIsLive = true;
        butplay.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause" viewBox="0 0 16 16">
<path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
</svg>`
      }
      let setInter =  setInterval((e) => {
        if(objTimer.playIsLive == false) {
          
          clearInterval(setInter);
          return;
      }
          if (timertext == '0' && timertext2 == '0' && timertext3 == '1') {
            Notification.requestPermission().then(reponse => { 

              if (reponse == 'granted') {
                
             new Notification('Its Finish', {body: 'Go next step'})
             const audio = new Audio("./bird.mp3");
               audio.play();
               
              }
              clearInterval(setInter)
              return        
        }).catch( err => console.log(err));
            objTimer.playIsLive = false;
            clearInterval(setInter);}
        
         


        
       
        if (timertext3 == '0') {
          if (timertext2 == '0') {
            timertext2 = '5'
            timertext3 = '9'
            timertext = parseInt(timertext) - 1;
            timertext = timertext.toString();
            timer.innerHTML = `${timertext}:${timertext2}${timertext3}`
          }
          else{
          timertext2 = parseInt(timertext2) - 1;
          timertext2 = timertext2.toString();
          timertext3 = '9'
          timer.innerHTML = `${timertext}:${timertext2}${timertext3}`}
         }
         else {
          timertext3 = parseInt(timertext3)- 1;
          timertext3 = timertext3.toString();
          timer.innerHTML = `${timertext}:${timertext2}${timertext3}`
         }
         butreset.addEventListener('click', (e) => {
          if (objTimer.sessionResetIsLive) {
            timertext = `${objTimer.timerPause}`
            timertext2 = '0'
            timertext3 = '0'
            
            
            timer.innerHTML = `${timertext}:${timertext2}${timertext3}`
            objTimer.playIsLive = false
            console.log(objTimer.playIsLive)
            clearInterval(setInter);
          }
          else {timer.innerHTML = '25:00';
          timertext = '25'
          timertext2 = '0'
          timertext3 = '0'
          console.log(objTimer.playIsLive)
          if(objTimer.playIsLive) {
            objTimer.playIsLive = false
            console.log(objTimer.playIsLivet)
            clearInterval(setInter);
        }}
          
         
          
          
         })
        },1000)
    }
)


butnext.addEventListener('click', (e) => {
  h4session1.innerHTML = `${objTimer.downRounds.toString()} of ${objTimer.numbersRounds.toString()}`
   if (objTimer.pauseOrNot == false && objTimer.downRounds.toString() == objTimer.numbersRounds.toString() ) {
    console.log(objTimer.downRounds)
    objTimer.pauseOrNot = true;
    timertext = `${objTimer.bigPause.toString()}`
    timertext2 = '0'
    timertext3 = '0'
    objTimer.sessionResetIsLive = true;
    objTimer.sessionIsLive = true;
    timer.innerHTML = `${timertext}:${timertext2}${timertext3}`
    h1focus.innerHTML = 'BREAK'
   }
       if (objTimer.pauseOrNot) {
        if (objTimer.downRounds.toString() == objTimer.numbersRounds.toString() ) {
          let storageKey = parseInt(localStorage.getItem('numbersOfPomodor')) + 1;
          console.log(storageKey)
          localStorage.setItem('numbersOfPomodor', storageKey.toString())
          
          return
        }
        objTimer.downRounds = objTimer.downRounds + 1;
         sessiontext = parseInt(objTimer.downRounds);
         sessiontext = sessiontext.toString()
         objTimer.pauseOrNot = false;
         objTimer.sessionResetIsLive = false;
         h4session1.innerHTML = `${objTimer.downRounds.toString()} of ${objTimer.numbersRounds.toString()}`
         timertext = '25'
         timertext2 = '0'
         timertext3 = '0'
         h1focus.innerHTML = 'FOCUS'
        
         
         timer.innerHTML = `${objTimer.timerFocus.toString()}:${timertext2}${timertext3}`
         objTimer.sessionIsLive = false
       }
      else { 
        objTimer.pauseOrNot = true;
        timertext = `${objTimer.timerPauseAll.toString()}`
        timertext2 = '0'
        timertext3 = '0'
        objTimer.sessionResetIsLive = true;
        objTimer.sessionIsLive = true;
        timer.innerHTML = `${timertext}:${timertext2}${timertext3}`
        h1focus.innerHTML = 'BREAK'
      }
})
let containerRanges = document.createElement('div')
let divOneRange = document.createElement('div')
divOneRange.classList.add('divOneRange')
let divTwoRange = document.createElement('div')
let divThreeRange = document.createElement('div')
let divFourRange = document.createElement('div')
let inputOne = document.createElement('input')
let inputTwo = document.createElement('input')
let inputThree = document.createElement('input')
let inputFour = document.createElement('input')
let divFiveRange = document.createElement('div')
let divSixRange = document.createElement('div')
let divSevenRange = document.createElement('div')
let divEightRange = document.createElement('div')
let divNineRange = document.createElement('div')
let divTenRange = document.createElement('div')
let selectOne = document.createElement('select')
let selectTwo = document.createElement('select')
let switchOne = document.createElement('label')
let switchTwo = document.createElement('label')
let switchThree = document.createElement('label')
let switchFour = document.createElement('label')
let inputS1 = document.createElement('input')
let inputS2 = document.createElement('input')
let inputS3 = document.createElement('input')
let inputS4 = document.createElement('input')
let span1 = document.createElement('span')
let span2 = document.createElement('span')
let span3 = document.createElement('span')
let span4 = document.createElement('span')
let h5label1 = document.createElement('h5')
let h5label2 = document.createElement('h5')
let h5label3 = document.createElement('h5')
let h5label4 = document.createElement('h5')
let text1Range = document.createElement('h8')
let text2Range = document.createElement('h8')
let text3Range = document.createElement('h8')
let text4Range = document.createElement('h8')
let option1 = document.createElement('option')
let option2 = document.createElement('option')
let option3 = document.createElement('option')
let option4 = document.createElement('option')
let option5 = document.createElement('option')
let option6 = document.createElement('option')
let option7 = document.createElement('option')
let option8 = document.createElement('option')
let option1b = document.createElement('option')
let option2b = document.createElement('option')
selectOne.appendChild(option1)
selectOne.appendChild(option2)
selectOne.appendChild(option3)
selectOne.appendChild(option4)
selectOne.appendChild(option5)
selectOne.appendChild(option6)
selectOne.appendChild(option7)
selectOne.appendChild(option8)
selectTwo.appendChild(option1b)
selectTwo.appendChild(option2b)
option1.innerHTML = 'Long'
option2.innerHTML = 'Simple'
option3.innerHTML = 'Bell'
option4.innerHTML = 'Clear'
option5.innerHTML = 'Fairy'
option6.innerHTML = 'Guitar'
option7.innerHTML = 'Happy'
option8.innerHTML = 'Positive'
option1b.innerHTML = 'Monday'
option2b.innerHTML = 'Sunday'
text1Range.innerHTML = 'Work duration'
text2Range.innerHTML = 'Short break duration'
text3Range.innerHTML = 'Long break duration'
text4Range.innerHTML = 'Rounds'
divOneRange.classList.add('div1to4')
divTwoRange.classList.add('div1to4')
divThreeRange.classList.add('div1to4')
divFourRange.classList.add('div1to4')
containerRanges.classList.add('containerRange')
let testtext = document.createElement('h3')
let testtext2 = document.createElement('h3')
let testtext3 = document.createElement('h3')
let testtext4 = document.createElement('h3')
span4.addEventListener('click', e => {
  if (objTimer.darkModeIsOn == true) {
    objTimer.darkModeIsOn = false;
    
    bigcontainer.classList.remove('darkMode')
    buttimer.classList.remove('darkMode')
    butsettings.classList.remove('darkMode')
    butlight.classList.remove('darkMode')
    butlight.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="butTime bi bi-brightness-high" viewBox="0 0 16 16">
<path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
</svg> Light Mode`
  }
  else {
    objTimer.darkModeIsOn = true;
    bigcontainer.classList.add('darkMode')
    buttimer.classList.add('darkMode')
      butsettings.classList.add('darkMode')
      butlight.classList.add('darkMode')
    butlight.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="butTime bi bi-moon" viewBox="0 0 16 16">
    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
  </svg> Dark Mode`
  }
})

inputOne.setAttribute('id', 'test')
inputOne.min = 1;
inputOne.max = 100;
inputOne.step = 1;
inputOne.value = 25;
testtext.innerHTML = '25'
inputOne.onchange
inputTwo.min = 1;
inputTwo.max = 50;
inputTwo.step = 1;
inputTwo.value = 5;
testtext2.innerHTML = '5'
inputThree.min = 1;
inputThree.max = 120;
inputThree.step = 1;
inputThree.value = 45;
testtext3.innerHTML = '45'
inputFour.min = 1;
inputFour.max = 20;
inputFour.step = 1;
inputFour.value = 4;
testtext4.innerHTML = '4';

h5label1.innerHTML = 'Timer In Title'
h5label2.innerHTML = 'Notifications'
h5label3.innerHTML = 'Autostart'
h5label4.innerHTML = 'Dark Mode'
inputOne.addEventListener('click', e => {
  testtext.innerHTML = inputOne.value.toString();
  objTimer.timerMinutsFocus = inputOne.value.toString();
})
inputTwo.addEventListener('click', e => {
  testtext2.innerHTML = inputTwo.value.toString();
  objTimer.timerPause = inputTwo.value.toString();

} )
inputThree.addEventListener('click', e => {
  testtext3.innerHTML = inputThree.value.toString();
  objTimer.bigPause = inputThree.value.toString();
})
inputFour.addEventListener('click', e => {
  testtext4.innerHTML = inputFour.value.toString();
  objTimer.numbersRounds = inputFour.value.toString();
})
//function updateTextInput(val) {
 // document.getElementById("test").value=val; 
//}

buttimer.addEventListener('click', (e) => {
  objTimer.downRounds = 1;
  h4session1.innerHTML = `${objTimer.downRounds.toString()} of ${objTimer.numbersRounds.toString()}`
  document.body.innerHTML = '';
  bigcontainer.innerHTML = '';
  //inputOne.addEventListener('click', (e) => {
    //inputOne.oninput = inputOne.value.toString()
    //console.log(inputOne.value)

  //})
  
  document.body.appendChild(bigcontainer)

  bigcontainer.appendChild(navbar)
  bigcontainer.appendChild(containerRanges)
  navbar.appendChild(butsettings)
navbar.appendChild(buttimer)
navbar.appendChild(butlight)
  //document.body.appendChild(containerRanges)
  containerRanges.appendChild(divOneRange)
  containerRanges.appendChild(divTwoRange)
  containerRanges.appendChild(divThreeRange)
  containerRanges.appendChild(divFourRange)
  containerRanges.appendChild(divFiveRange)
  containerRanges.appendChild(divSixRange)
  containerRanges.appendChild(divSevenRange)
  containerRanges.appendChild(divEightRange)
  containerRanges.appendChild(divNineRange)
  containerRanges.appendChild(divTenRange)
  divOneRange.appendChild(text1Range)
  divTwoRange.appendChild(text2Range)
  divThreeRange.appendChild(text3Range)
  divFourRange.appendChild(text4Range)
  divOneRange.appendChild(inputOne)
  divTwoRange.appendChild(inputTwo)
  divThreeRange.appendChild(inputThree)
  divFourRange.appendChild(inputFour)
  divFiveRange.appendChild(selectOne)
  divSixRange.appendChild(selectTwo)
  divSevenRange.appendChild(h5label1)
  divEightRange.appendChild(h5label2)
  divNineRange.appendChild(h5label3)
  divTenRange.appendChild(h5label4)
  divSevenRange.appendChild(switchOne)
  divEightRange.appendChild(switchTwo)
  divNineRange.appendChild(switchThree)
  divTenRange.appendChild(switchFour)

 divOneRange.appendChild(testtext)
 divTwoRange.appendChild(testtext2)
 divThreeRange.appendChild(testtext3)
 divFourRange.appendChild(testtext4)


  divSevenRange.classList.add('div7to10')
  divEightRange.classList.add('div7to10')
  divNineRange.classList.add('div7to10')
  divTenRange.classList.add('div7to10')
  switchOne.classList.add('switch')
  switchTwo.classList.add('switch')
  switchThree.classList.add('switch')
  switchFour.classList.add('switch')
  span1.classList.add('slider')
  span2.classList.add('slider')
  span3.classList.add('slider')
  span4.classList.add('slider')

  switchOne.appendChild(inputS1)
  switchTwo.appendChild(inputS2)
  switchThree.appendChild(inputS3)
  switchFour.appendChild(inputS4)
  switchOne.appendChild(span1)
  switchTwo.appendChild(span2)
  switchThree.appendChild(span3)
  switchFour.appendChild(span4)

  inputS1.type = 'checkbox'
  inputS2.type = 'checkbox'
  inputS3.type = 'checkbox'
  inputS4.type = 'checkbox'
  inputOne.type = 'range'
  inputTwo.type = 'range'
  inputThree.type = 'range'
  inputFour.type = 'range'

})

butsettings.addEventListener('click', e => {
  bigcontainer.innerHTML = '';
  objTimer.downRounds = 1;
  h4session1.innerHTML = `${objTimer.downRounds.toString()} of ${objTimer.numbersRounds.toString()}`
  h1focus.innerHTML = 'FOCUS'
  bigcontainer.appendChild(navbar);
  bigcontainer.appendChild(container);
  timertext = objTimer.timerMinutsFocus;
  objTimer.timerFocus = objTimer.timerMinutsFocus;
  objTimer.timerPauseAll = objTimer.timerPause;
  timer.innerHTML = `${objTimer.timerMinutsFocus.toString()}:${timertext2}${timertext3}`
  

  })

  butlight.addEventListener('click', e => {
    if (bigcontainer.classList.contains('darkMode')) {
      bigcontainer.classList.remove('darkMode')
      buttimer.classList.remove('darkMode')
      butsettings.classList.remove('darkMode')
      butlight.classList.remove('darkMode')
      objTimer.darkModeIsOn = false;
      butlight.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="butTime bi bi-brightness-high" viewBox="0 0 16 16">
<path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
</svg> Light Mode`
    }
    else {
      bigcontainer.classList.add('darkMode')
      objTimer.darkModeIsOn = true;
      buttimer.classList.add('darkMode')
      butsettings.classList.add('darkMode')
      butlight.classList.add('darkMode')
      butlight.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="butTime bi bi-moon" viewBox="0 0 16 16">
    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
  </svg> Dark Mode`
    }
  })
let bubul = document.createElement('div')

let pp = document.createElement('p')
let pp2 = document.createElement('p')
let pp3 = document.createElement('p') 
let pp4 = document.createElement('p')
pp.innerHTML = inputOne.value.toString();




bubul.classList.add('bubul')
bubul.classList.add('inputOneT')
pp.classList.add('pp')
pp2.classList.add('pp')
pp3.classList.add('pp')
pp4.classList.add('pp')
  inputOne.addEventListener('click', e => {
    objTimer.timerFocus = inputOne.value.toString();
    bubul.appendChild(pp)
    pp.innerHTML = inputOne.value.toString();
    console.log(e)
    console.log(e.clientX)
    console.log(e.target.clientX)
    console.log(bubul)
    divOneRange.appendChild(bubul)
    bubul.style.left = `${e.clientX - 15}px`;
    bubul.style.top = `${140}px`;
  })
  inputOne.addEventListener('mouseout', e => {
    divOneRange.removeChild(bubul)
    bubul.removeChild(pp)
  })

  selectOne.classList.add('selectOne')
  selectTwo.classList.add('selectTwo')

  inputFour.addEventListener('click', d => {
    pp4.innerHTML = inputFour.value.toString();
    bubul.appendChild(pp4)
    console.log(d)
    console.log(d.clientX)
    console.log(d.target.clientX)
    console.log(bubul)
    divFourRange.appendChild(bubul)
    bubul.style.left = `${d.clientX - 15}px`;
    bubul.style.top = `${450}px`;
  })
  inputFour.addEventListener('mouseout', d => {
    divFourRange.removeChild(bubul)
    bubul.removeChild(pp4)
  })
  inputTwo.addEventListener('click', c => {
    pp2.innerHTML = inputTwo.value.toString();
    objTimer.timerPauseAll = inputTwo.value.toString();
    bubul.appendChild(pp2)
    console.log(c)
    console.log(c.clientX)
    console.log(c.target.clientX)
    console.log(bubul)
    divTwoRange.appendChild(bubul)
    bubul.style.left = `${c.clientX - 15}px`;
    bubul.style.top = `${240}px`;
  })
  inputTwo.addEventListener('mouseout', c => {
    divTwoRange.removeChild(bubul)
    bubul.removeChild(pp2)
  })
  inputThree.addEventListener('click', b => {
    pp3.innerHTML = inputThree.value.toString();
    bubul.appendChild(pp3)
    console.log(b)
    console.log(b.clientX)
    console.log(b.target.clientX)
    console.log(bubul)
    divThreeRange.appendChild(bubul)
    bubul.style.left = `${b.clientX - 15}px`;
    bubul.style.top = `${344}px`;
  })
  inputThree.addEventListener('mouseout', b => {
    divThreeRange.removeChild(bubul)
    bubul.removeChild(pp3)
  })
  containertimer.appendChild(h1focus)
  h1focus.classList.add('h1focus')
  butsettings.classList.add('butTimer')
  buttimer.classList.add('butTimer')
  butlight.classList.add('butTimer')
  containerRanges.classList.add('containerRangers')
 
 


 