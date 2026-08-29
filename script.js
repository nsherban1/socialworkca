```javascript
/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

const navbar = document.querySelector(".custom-navbar");

window.addEventListener("scroll", () => {

  if (!navbar) return;

  if (window.scrollY > 30) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }

});


/* =========================================================
   SMOOTH SCROLL FOR INTERNAL LINKS
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

  link.addEventListener("click", (event) => {

    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") {
      return;
    }

    const target = document.querySelector(targetId);

    if (target) {

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  });

});


/* =========================================================
   CLOSE MOBILE NAVBAR AFTER CLICKING A LINK
========================================================= */

const navbarCollapse = document.querySelector("#navbarNav");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

navLinks.forEach((link) => {

  link.addEventListener("click", () => {

    if (
      navbarCollapse &&
      navbarCollapse.classList.contains("show")
    ) {

      const bsCollapse =
        bootstrap.Collapse.getInstance(navbarCollapse);

      if (bsCollapse) {
        bsCollapse.hide();
      }

    }

  });

});


/* =========================================================
   FADE-IN CONTENT ON SCROLL
========================================================= */

const animatedElements =
  document.querySelectorAll(".content-card");

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);


animatedElements.forEach((element) => {
  observer.observe(element);
});
```
