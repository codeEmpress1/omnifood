// SET CURRENT YEAR
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// MAKE MOBILE RESPONSIVE
const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
btnNav.addEventListener("click", function() {
    header.classList.toggle("nav-open");
})

// SMOOTH SCROLLING ANIMATION
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(link => link.addEventListener("click", function(e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);
    if (href === "#") window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    if (href !== "#" && href.startsWith("#")) {
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({behavior: "smooth"})
    }
// CLOSE MOBILE NAVIGATION AFTER SCROLLING
    if (link.classList.contains("main-nav-link")) {
        header.classList.toggle("nav-open");
    }
}))


// STICKY NAV
const hero = document.querySelector(".hero-container")
const observer = new IntersectionObserver(function(entries){
    const entry = entries[0];
    console.log(entry)
    if (!entry.isIntersecting) {
        document.body.classList.add("sticky");
    }
    if (entry.isIntersecting) {
        document.body.classList.remove("sticky");
    }
},
{
    root: null,
    threshold: 0,
    rootMargin: "-80px"
});
observer.observe(hero);
// ////////////////////////////////////////////
function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));

    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);

    if(!isSupported) document.body.classList.add("no-flexbox-gap")
}
checkFlexGap();

