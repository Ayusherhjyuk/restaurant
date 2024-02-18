let hamburger=document.querySelector(".hamburger");
let head=document.querySelector(".head .navbar");
let close=document.querySelector(".close img");


hamburger.addEventListener("click",()=>{
  head.style="clip-path: polygon(100% 0%, 0% 0%, 0 100%, 100% 100%) ";
  hamburger.style="display:none";
  close.style="display:block";
})
close.addEventListener("click",()=>{
    head.style="clip-path: polygon(100% 0%, 0% 0%, 0 0, 100% 0) ";
    hamburger.style="display:block";
    close.style="display:none"
})




// function scrollToSection(sectionclass) {
//   var section = document.getElementsByClass(sectionclass);
//   if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//   }
// }

 let menucardlist=document.querySelector(".menucardlist");
 let menucard=document.querySelector(".menucard");
 let searchbtn=document.getElementById("searchbtn");
 let inputdata=document.getElementById("inputdata");

let key="7ddf329c087645f88159b29ce4efde3b";

const getdata= async(input)=>{
  let res=await fetch(`https://api.spoonacular.com/food/menuItems/search?query=${input}&apiKey=${key}`);
 let data=await res.json();
 console.log(data.menuItems)

  menucardlist.innerHTML=""
 inputdata.value=""

 data.menuItems.forEach(menuItems => {
  let divs=document.createElement("div");
  divs.classList.add("menucard");
  menucardlist.appendChild(divs);

  divs.innerHTML=`
   <img src="${menuItems.image}"alt="">
  <h2>${menuItems.title}</h2>
  <button>Order Now </button>
  `

   });

}

window.addEventListener("load",()=>{
  getdata("burger");
})

searchbtn.addEventListener("click",()=>{
  let inputtext=inputdata.value;
  getdata(inputtext);
})

