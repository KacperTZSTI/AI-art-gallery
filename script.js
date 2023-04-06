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

let sites = ["apple_tree.html", "astronaut.html", "fish_graffiti.html", "ferrari.html", "velociraptor.html", "AI.html", "donut.html", "hamster.html", "new_york.html", "astronauts.html", "ferrari.html", "ferrari.html", "ferrari.html", "ferrari.html", "ferrari.html", "ferrari.html", "ferrari.html", "ferrari.html", "ferrari.html", "ferrari.html"]

let rando = document.querySelector(".rando");


rando.addEventListener("click", function(){
let random = Math.floor(Math.random() * sites.length - 1);
let site = sites[random];
window.open(site, "_self");
console.log(random);
console.log(site);
});

let input = document.getElementById("search");
let sub = document.getElementById("sub");
let tags = ["Basic", "Weird", "Painting", "Cute", "Space", "Synthwave"]


sub.addEventListener("click", function(){
    let choice = input.value;
    if (choice == ""){
        for(i=0; i<6; i++){
            if(tags[i]!=choice){
                let change = document.getElementsByClassName(tags[i]);
                for(j = 0; j<change.length; j++){
                    change[j].style.display = "block";
            }}}
    }else{
    input.value ='';
    for(i=0; i<6; i++){
        if(tags[i]!=choice){
            let change = document.getElementsByClassName(tags[i]);
            for(j = 0; j<change.length; j++){
                change[j].style.display = "none";
    
        }
    }else{
        let change = document.getElementsByClassName(tags[i]);

        for(h = 0; h<change.length; h++){
            change[h].style.display = "block";
    }
    }}}});

