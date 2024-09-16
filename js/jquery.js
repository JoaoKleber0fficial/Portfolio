class MobileNavbar {

    constructor(mobileMenu, navBar, navbarItem) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navBar = document.querySelector(navBar);
        this.navbar_Item = document.querySelector(navbarItem);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        console.log(this)
        this.navBar.classList.toggle(this.activeClass)
    }

    addClickEvent() {

        this.mobileMenu.addEventListener("click", this.handleClick)

    }

    init() {
        if(this.mobileMenu){
            this.addClickEvent();
        }

        return this;
    }

}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".navBar", 
    ".navbar_Item",
)

mobileNavbar.init();

/* Dark Mode e Light Mode */
document.getElementById('toggle-mode').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});
