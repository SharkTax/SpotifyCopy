const MPRight = document.querySelector(".player-most-played-right");

const MPleft = document.querySelector(".player-most-played-left");

const currentPlM = document.querySelector(".current_playing__mobile")
const carousselMS = document.querySelector(".Carossel__main-section");
const apiTake = "./MusicApi/musics.json";
const caroussel = document.querySelector(".carous");


async function apiResolve(api){
  try {
    let result = await fetch(api);
   let data = await result.json();
   
   let SPTF = data.default;
 
   
   
   SPTF = SPTF.map(item => {
    //DEFAULT API
     const defMName = item.defaultName;
     const defTime = item.time;
     const defPicture = item.picture;
     
    //PLAYLIST API
     
     return { defTime, defPicture, defMName}
     
   })
    
    return SPTF
    
    
  } catch (e) {
    console.log(e);
  }
} 


function displayM(music){
  let HTMLMPCard = "";
  let HTMLMCard = "";
  let HTMLCroussel = "";
  let carousTCM = "";
  
 
  
  for (var i = 0; i < 2; i++) {
    
    let divCarous = document.createElement("div");
    divCarous.classList.add("carous");
    
    music.forEach((item)=>{
      HTMLMPCard += `<div class="card-MP">
      <div class="img_playlist">
        <img src="${item.defPicture}" alt="">
      </div>
      
      <div class="playList-name">
        <span>${item.defMName}</span>
        <i class="uil uil-ellipsis-v"></i>
      </div>
    </div>`
    
    
     HTMLMCard += `<div class="playList-cads">
          <div class="playList-CardsImg">
            <img src="${item.defPicture}" alt="${item.defPicture}">
          </div>
          <h2>${item.defMName}</h2>
          <span>Composer name</span>
        </div>`
    
     HTMLCroussel += ` <div class="caroussel__track-container-music">
        <div class="caroussel__Img">
          <img src="${item.defPicture}" alt="">
        </div>
        <h2>${item.defMName}</h2>
        <span>author</span>
      </div>`
      
      
    
    carousTCM += `<div class="caroussel__track-container-music">
        <div class="caroussel__Img">
          <img src="${item.defPicture}" alt="">
        </div>
        <h2>${item.defMName}</h2>
        <span>author</span>
      </div>`
    
  
    })
     divCarous.innerHTML = carousTCM;
    carousselMS.appendChild(divCarous);
  }
   
   MPRight.innerHTML = HTMLMPCard;
   MPleft.innerHTML = HTMLMCard;
   caroussel.innerHTML = HTMLCroussel;
   

	
 
  
}






document.addEventListener("DOMContentLoaded", ()=>{

	
//====================
window.addEventListener('scroll', (e)=>{
 
  currentPlM.classList.add("current_playing__mobile-scroll");
  	
  setTimeout(()=>{
  	 currentPlM.classList.remove("current_playing__mobile-scroll");
  }, 4000);
  
});
  
//===============≈========Time Set day
  const h1Day = document.querySelector("#time-set-day");
const date = new Date();

//console.log(date);
if (date.getHours() >= 0 && date.getHours() < 12) {
  h1Day.innerText = "Bom dia";
} else if (date.getHours() >= 12 && date.getHours() < 18) {
  h1Day.innerText = "Boa tarde";
}else if (date.getHours() >= 18 && date.getHours() < 24) {
  h1Day.innerText = "Boa noite";
}


 
//======================API Request
apiResolve(apiTake).then(music =>{
    displayM(music)
   // console.log(music);
  })
});