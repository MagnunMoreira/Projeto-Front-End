class mobilenavbar {
    constructor(mobilemenu, navlist, navlinks) {
    this.mobilemenu = document.querySelector(mobilemenu);
    this.navlist = document.querySelector(navlist);
    this.navlinks = document.querySelectorAll(navlinks);
    this.activeclass = "active";     
    }

   handleclick(){
    console.log(this);
    this.navlist.classlist.toggle(this.activeclass);
   }

   addclickevent() {
    this.mobilemenu.addeventlistener("click", this.handleclick);
   }

    init(){
        if (this.mobilemenu){
            this.addclickevent();

        }
        return this;
    }
}

const mobilenavbar = new mobilenavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobilenavbar.init();