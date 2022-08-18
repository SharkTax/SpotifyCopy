
const category = document.querySelector(".categorys");
const inpSrc = document.querySelector("#categorysSearchInp");
const categorySrc = document.querySelectorAll(".categorysSearch");
let rand = Math.round(Math.random()*255)
let rand1 = Math.round(Math.random()*255)
let rand2 = Math.round(Math.random()*255)
let rand360 = Math.round((Math.random()*360))
		
	let arrCategorys = [
	 "Pop",
	 "Lançamento",
	 "Feito para voçe",
	 "descobrir",
	 "Eventos",
	 "Funk",
	 "Samba e Pagode",
	 "Hip Hop",
	 "Rock",
	 "Eletronica",
	 "Foco",
	 "Mpb",
	 "Indie",
	 "Folk",
	 "Soul",
	 "K-pop",
	 "instrumemtal",
	 "Classico",
	 "Jazz",
	 "Metal"
	
	];
	let arrCategorysFilter = [];
	   
	   
	   

document.addEventListener("DOMContentLoaded", ()=>{
  
console.log(categorySrc);
  inpSrc.addEventListener("keyup", ()=>{
  let HTMLCategor = "";
   
  	arrCategorysFilter = arrCategorys.filter((cat)=>{
  		if(cat.includes(inpSrc.value)){
  			return cat
  		}
  	}).map((categor, index)=>{
	  
		HTMLCategor += `<div class="categorysSearch" style=" background: rgb(${rand},${rand1},${rand2});
background: linear-gradient(${rand360+(index*2)}deg, rgba(${rand},${rand2},${rand1},1) 0%, rgba(${rand2},${rand},${rand1},1) 87%);">
		
		
  		<h2>${categor}</h2>
  	</div>`;
 
});

  	
category.innerHTML= HTMLCategor;
  })


 
	
let HTMLCategorNotFilter = "";
  
 //Default map
arrCategorys.map((categor, index)=>{

		HTMLCategorNotFilter += `<div class="categorysSearch" style=" background: rgb(${rand},${rand1},${rand2});
background: linear-gradient(${rand360+(index*2)}deg, rgba(${rand},${rand2},${rand1},1) 0%, rgba(${rand2},${rand},${rand1},1) 87%);">
		
		
  		<h2>${categor}</h2>
  	</div>`;
 
});
category.innerHTML= HTMLCategorNotFilter;

  
  
  
	console.log(rand, rand1, rand2)
})

export default arrCategorys