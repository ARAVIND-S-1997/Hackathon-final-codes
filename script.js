
document.body.innerHTML=`<section class="list"></section> 

<img  class="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png">
<div class="content-body">
<h1 class="title"> List of Pokemon </h1>
</div>
<div class="content"></div>`;
async function pokemon(){
    const data=await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
    const users=await data.json();
    const usercontainer=document.querySelector(".list"); 
   users.forEach(user => {
    usercontainer.innerHTML += `
    <h1>${user.name}</h1>`;  
   });
console.log(users);
}
pokemon();



