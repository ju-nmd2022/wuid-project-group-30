const togglebtn = document.getElementsByClassName("togglebtn")[0];
let menus = document.getElementsByClassName("menus")[0];
const searchBar = document.getElementsByClassName("search")[0];

togglebtn.addEventListener("click", function () {
  menus.classList.toggle("active");
  if (menus.style.display === "flex" && searchBar.style.display === "flex") {
    menus.style.display = "none";
    searchBar.style.display = "none";
  } else {
    menus.style.display = "flex";
    searchBar.style.display = "flex";
  }
});

// Make the navbar react to scrolling. Credits: https://www.youtube.com/watch?v=Q_XZk5Vnujw&ab_channel=dcode

{
  const nav = document.querySelector(".nav");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      nav.classList.add("nav--hidden");
    } else {
      nav.classList.remove("nav--hidden");
    }

    lastScrollY = window.scrollY;
  });
}
