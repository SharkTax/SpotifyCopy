const iUl = document.querySelector("#iUl");
const ulTablts = document.querySelector(".ulOrderTablets");
const catg = document.querySelector(".categorysLibrary");
const librarySect = document.querySelector("#librarySection")
	
	librarySect.addEventListener("click", ()=>{
		if(catg.style.transform == "translateY(-100%)"){
			catg.style.transform = "translateY(0)"
			catg.style.display= "inline-block"
			
		}else{
			catg.style.transform = "translateY(-100%)"
			catg.style.display= "none"
		}
	})
	iUl.addEventListener("click", ()=>{
	if(ulTablts.style.display== "none"){
		ulTablts.style.display = "inline-block"
	}else{
			ulTablts.style.display = "none"
	}
	});
	
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

console.log(arrCategorys)
let HTMLAsideCat = ""
arrCategorys.map((categ)=>{
	HTMLAsideCat +=` <ul>
  			<li>${categ}</li>
  		</ul>`
})

catg.innerHTML = HTMLAsideCat;