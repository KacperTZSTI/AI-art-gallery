let menu= document.querySelectorAll("li");

    for(let elemMenu of menu){
    elemMenu.addEventListener("mouseover", function(){
        elemMenu.classList.add("biger_nav");
    });
    elemMenu.addEventListener("mouseout", function(){
        elemMenu.classList.remove("biger_nav");
    });
    }

let sectors = document.querySelectorAll(".img_container");

for(let sect of sectors){
    sect.addEventListener("mouseover", function(){
        sect.classList.add("img_container_big");
    });
    sect.addEventListener("mouseout", function(){
        sect.classList.remove("img_container_big");
    });
    } 

let sites = ["apple_tree.html", "astronaut.html", "fish_graffiti.html", "ferrari.html", "velociraptor.html"]

let rando = document.querySelector(".rando");

rando.addEventListener("click", function(){
let site = sites[3];

});
