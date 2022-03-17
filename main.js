/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.querySelector(".nav_menu")
const navToggle = document.querySelector(".nav_toggle")
const navClose = document.querySelector(".nav_close")
console.log(navClose);
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLinks = document.querySelectorAll(".nav_link")
console.log(navLinks);
navLinks.forEach((navLink) => {
    navLink.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
})

/*==================== ACCORDION SKILLS ====================*/
const skillsContnet = document.getElementsByClassName("skills_content")
const skillsHeader = document.querySelectorAll(".skills_header")

function skillsToggle() {

    let itemClass = this.parentNode.getElementsByClassName
    console.log(itemClass);
    for (i = 0; i < skillsContnet.length; i++) {
        skillsContnet[i].className = "skills_content skills_close"
    }
    console.log(skillsContnet);
    if (itemClass === "skills_content skills_close") {
        this.parentNode.className = "skills_content skills_open"
    }
}
skillsHeader.forEach((item) => {
        item.addEventListener("click", skillsToggle)
    })
    /*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/


/*==================== SHOW SCROLL UP ====================*/


/*==================== DARK LIGHT THEME ====================*/