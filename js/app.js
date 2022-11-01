const header = document.querySelector("header");

const links = document.querySelectorAll(".nav-link");

const prt_section = document.querySelector(".skills");
const zoom_icons = document.querySelectorAll(".zoom-icon");
const modal_overlay = document.querySelector(".modal-overlay");
const images = document.querySelectorAll(".images img");
const prev_btn = document.querySelector(".prev-btn");
const next_btn = document.querySelector(".next-btn");

/*----------------Sticky Navbar------------------*/

function stickyNavbar(){
    header.classList.toggle("scrolled", window.pageYOffset > 0);
    
}

stickyNavbar();

window.addEventListener("scroll", stickyNavbar);


/*----------------Portfolio Filter Animation------------------*/

let mixer = mixitup('.portfolio-gallery', {
    selectors: {
        target: '.prt-card'
    },
    animation: {
        duration: 500
    },
});


function itStore() {
    var popup = document.getElementById("itStore");
    popup.classList.toggle("show");
}

function tourWeb() {
    var popup = document.getElementById("tourWeb");
    popup.classList.toggle("show");
}

function miniJavascript() {
    var popup = document.getElementById("miniJavascript");
    popup.classList.toggle("show");
}

function toDoApp() {
    var popup = document.getElementById("toDoApp");
    popup.classList.toggle("show");
}

function studentSys() {
    var popup = document.getElementById("studentSys");
    popup.classList.toggle("show");
}

/*----------------Change Active Link - scroll------------------*/

window.addEventListener("scroll",()=>{
    activeLink();
})

function activeLink(){
    let sections = document.querySelectorAll("section[id]");
    let passSection = Array.from(sections)
        .map((sct, i) => {
            return {
                y: sct.getBoundingClientRect().top - header.offsetHeight,
                id: i,
            };
    })
    .filter((sct) => sct.y <= 0);

    let currentSectionID= passSection.at(-1).id;

    links.forEach( (l) => l.classList.remove("active"));
    links[currentSectionID].classList.add("active");

}

/*----------------Image Slider ------------------*/

let currentIndex = 0;

zoom_icons.forEach((icn, i) =>
    icn.addEventListener("click", () => {
        prt_section.classList.add("open");
        document.body.classList.add("stopScrolling");
        currentIndex = i;
        changeImage(currentIndex);
    })
);

modal_overlay.addEventListener("click", () => {
    prt_section.classList.remove("open");
    document.body.classList.remove("stopScrolling");

});

prev_btn.addEventListener("click", (event) => {
    if(currentIndex === 0){
        currentIndex = 5
    }else{
        currentIndex--;
    }
    changeImage(currentIndex);
    event.stopPropagation();
}) 

next_btn.addEventListener("click", (event) => {
    if(currentIndex === 5){
        currentIndex = 0
    }else{
        currentIndex++;
    }
    changeImage(currentIndex);
    event.stopPropagation();
}) 

function changeImage(index){
    images.forEach((img) => img.classList.remove("showImage"));
    images[index].classList.add("showImage");
}
