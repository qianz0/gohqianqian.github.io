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

function recipeApp() {
    var popup = document.getElementById("recipeApp");
    popup.classList.toggle("show");
}

function studentSys() {
    var popup = document.getElementById("studentSys");
    popup.classList.toggle("show");
}

function marcoPopup() {
    var popup = document.getElementById("marcoPopup");
    popup.classList.toggle("show");
}

function bluestonePopup() {
    var popup = document.getElementById("bluestonePopup");
    popup.classList.toggle("show");
}

function tciPopup() {
    var popup = document.getElementById("tciPopup");
    popup.classList.toggle("show");
}

function accessPopup() {
    var popup = document.getElementById("accessPopup");
    popup.classList.toggle("show");
}

function mystPopup() {
    var popup = document.getElementById("mystPopup");
    popup.classList.toggle("show");
}

function swasPopup() {
    var popup = document.getElementById("swasPopup");
    popup.classList.toggle("show");
}

function goldstarPopup() {
    var popup = document.getElementById("goldstarPopup");
    popup.classList.toggle("show");
}

function dataPopup() {
    var popup = document.getElementById("dataPopup");
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
    if(currentIndex === 14){
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
