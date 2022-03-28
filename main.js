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

    let itemClass = this.parentNode.className
    for (i = 0; i < skillsContnet.length; i++) {
        skillsContnet[i].className = "skills_content skills_close"
    }
    if (itemClass === "skills_content skills_close") {
        this.parentNode.className = "skills_content skills_open"
    }
}
skillsHeader.forEach((item) => {
        item.addEventListener("click", skillsToggle)
    })
    /*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-targert]')
const tabcontent = document.querySelectorAll('[data-content]')
tabs.forEach((item) => {
    item.addEventListener('click', () => {
        const targert = document.querySelector(item.dataset.targert)
        tabcontent.forEach((item) => {
            item.classList.remove('qualification_active')
        })
        targert.classList.add('qualification_active')
        tabs.forEach((item) => {
            item.classList.remove('qualification_active')
        })
        item.classList.add('qualification_active')
    })
})

/*==================== SERVICES MODAL ====================*/

const modalViews = document.querySelectorAll(".services_modal"),
    modalBtns = document.querySelectorAll(".services_button"),
    modalCloses = document.querySelectorAll(".services_modal-close")
let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}
modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})
modalCloses.forEach((modalClose) => {
        modalClose.addEventListener('click', () => {
            modalViews.forEach((modalView) => {
                modalView.classList.remove("active-modal")
            })
        })
    })
    /*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/


/*==================== SHOW SCROLL UP ====================*/


/*==================== DARK LIGHT THEME ====================*/