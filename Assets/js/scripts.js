const data = [
  {
    id: 1,
    service: "",
    catergory:
      "Test pit, Dynamic Cone Penetromrter Test, Dpsh Test, Auser Holes, Percolation Test",
    image: "/Assets/images/img/img4.jpg",
    gallery: [
      {
        id: 1,
        image: "/Assets/images/img/img.jpg",
      },
      {
        id: 2,
        image: "/Assets/images/img/img3.jpg",
      },
      {
        id: 3,
        image: "/Assets/images/img/img4.jpg",
      },
    ],
  },
  {
    id: 2,
    service: "",
    catergory: "Core logging, Chip logging, Soil & Rock logging",
    image: "/Assets/images/img/img-2.jpg",
    gallery: [
      {
        id: 1,
        image: "/Assets/images/img/img-1.jpg",
      },
      {
        id: 2,
        image: "/Assets/images/img/img-2.jpg",
      },
      {
        id: 3,
        image: "/Assets/images/img/img-3.jpg",
      },
    ],
  },
  {
    id: 3,
    service: "",
    catergory:
      "Road Material Investigation, Borrow Pit Investigation, Bridges & Culverts",
    image: "/Assets/images/img/im.jpg",
    gallery: [
      {
        id: 1,
        image: "/Assets/images/img/im.jpg",
      },
      {
        id: 2,
        image: "/Assets/images/img/im-3.jpg",
      },
      {
        id: 3,
        image: "/Assets/images/img/im-4.jpg",
      },
    ],
  },
  {
    id: 4,
    service: "",
    catergory: "Ablution Block Foundation Investigation",
    image: "/Assets/images/img/im1.jpg",
    gallery: [
      {
        id: 1,
        image: "/Assets/images/img/im1.jpg",
      },
      {
        id: 2,
        image: "/Assets/images/img/im2.jpg",
      },
      {
        id: 3,
        image: "/Assets/images/img/im5.jpg",
      },
    ],
  },
  {
    id: 5,
    service: "",
    catergory: "Foundation Investigation",
    image: "/Assets/images/img/iim.jpg",
    gallery: [
      {
        id: 1,
        image: "/Assets/images/img/iim2.jpg",
      },
      {
        id: 2,
        image: "/Assets/images/img/iim.jpg",
      },
      {
        id: 3,
        image: "/Assets/images/img/iim5.jpg",
      },
    ],
  },
  {
    id: 6,
    service: "",
    catergory:
      "Pipeline & Reservior Investigation (BULK WATER SUPPLY SCHEME), Wastewater Treatment Investigation",
    image: "/Assets/images/img/imm5.jpg",
    gallery: [
      {
        id: 1,
        image: "/Assets/images/img/imm5.jpg",
      },
      {
        id: 2,
        image: "/Assets/images/img/imm4.jpg",
      },
      {
        id: 3,
        image: "/Assets/images/img/imm6.jpg",
      },
    ],
  },
  {
    id: 7,
    service: "Construction",
    catergory: "Phase 1 AND Phase 2 Low Cost Housing ",
    image: "/Assets/images/img/imm-1.jpg",
    gallery: [
      {
        id: 1,
        image: "/Assets/images/img/imm-1.jpg",
      },
      {
        id: 2,
        image: "/Assets/images/img/imm-2.jpg",
      },
      {
        id: 3,
        image: "/Assets/images/img/imm-5.jpg",
      },
    ],
  },
];
// custom slugify

const slugify = (str) => str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')


const navToggler = document.querySelectorAll(".project_nav_item");
const projectList = document.querySelectorAll(".projects_list");
const navbar = document.getElementById("navbar");
const menu = document.getElementById("menu");
const navbarItems = document.getElementById("navbar_items");
const navItem = document.querySelectorAll(".navbar_item");


navToggler.forEach(ele => {
    ele.addEventListener("click", function(){
        for (let i = 0; i < navToggler.length; i++) {
          
          navToggler[i].classList.remove("active");
          
        }
      ele.classList.add("active")
      let dataAttrib = ele.getAttribute("data-category");
      
        loadData(dataAttrib);
    })
})

menu.addEventListener("click", function(){
  console.log("clicked")
  if (navbarItems.classList.contains("dont-show-mobile-navbar")) {
    navbarItems.classList.remove("dont-show-mobile-navbar");
    navbarItems.classList.add("show-mobile-navbar");
    
  } else {
    navbarItems.classList.remove("show-mobile-navbar");
    navbarItems.classList.add("dont-show-mobile-navbar");
  }
})

window.addEventListener("scroll", function () {

  if (window.scrollY >= 100) {
    // alert(window.scrollY)
    navbar.classList.remove("navbar_not_scroll");
    navbar.classList.add("navbar_on_scroll");
    navbarItems.classList.remove("bg-custom-blue");
    navbarItems.classList.add("bg-white");
    menu.classList.remove("text-white");
    menu.classList.add("text-custom-blue");
    for (let i = 0; i < navItem.length; i++) {
      navItem[i].classList.remove("text-not-display");
      navItem[i].classList.add("text-on-display");
    }
  } else {
    navbar.classList.remove("navbar_on_scroll");
    navbar.classList.add("navbar_not_scroll");
    navbarItems.classList.remove("bg-white");
    navbarItems.classList.add("bg-custom-blue");
    menu.classList.remove("text-custom-blue");
    menu.classList.add("text-white");
    for (let i = 0; i < navItem.length; i++) {
      navItem[i].classList.remove("text-on-display");
      navItem[i].classList.add("text-not-display");
      
    }
  }
});

if (navbarItems.classList.contains("show-mobile-navbar"))
{
  window.addEventListener("click", function () {
    navbarItems.classList.remove("show-mobile-navbar");
    navbarItems.classList.add("dont-show-mobile-navbar");
  });
}
// Methods

var encEmail = "aW5mb0BwaGFuc2Vydi5jby56YQ==";
const form = document.getElementById("contact-email");
const form3 = document.getElementById("contact-email-");
const form4 = document.getElementById("contact-email-4");
const form5 = document.getElementById("contact-email-5");
form.setAttribute("href", "mailto:".concat(atob(encEmail)));
form3.setAttribute("href", "mailto:".concat(atob(encEmail)));
form4.setAttribute("href", "mailto:".concat(atob(encEmail)));
form5.setAttribute("href", "mailto:".concat(atob(encEmail)));

var encEmail2 = "YWNjb3VudHNAcGhhbnNlcnYuY28uemE=";
const form2 = document.getElementById("contact-email-2");
form2.setAttribute("href", "mailto:".concat(atob(encEmail2)));

// ========= load data to web =========== //
function loadData(idAttrib) {
  let data = document.getElementById(idAttrib);
  for (let i = 0; i < projectList.length; i++) {
    if (projectList[i].classList.contains("grid")) {
      projectList[i].classList.remove("grid");
      projectList[i].classList.add("hidden");
    }
    
  }
  if(data.classList.contains("hidden"))
  {
    data.classList.remove("hidden");
    data.classList.add("grid");
  }
  
}


