window.addEventListener("load", init, false);

function init() {
  /**
   *  Mobile menu
   */
  var toggles = document.querySelectorAll(".c-hamburger");
  var listItems = document.querySelectorAll(".header__item");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  }

  for (var j = listItems.length - 1; j >= 0; j--) {
    var li = listItems[j];
    liHandler(li);
  }

  function toggleHandler(toggle) {
    toggle.addEventListener("click", function(e) {
      e.preventDefault();
      var nav = document.getElementById("header__nav");
      var button = document.getElementById("mobile-button");

      if (this.classList.contains("is-active") === true) {
        this.classList.remove("is-active");
      } else {
        this.classList.add("is-active");
      }

      if (button.classList.contains("is-active")) {
        nav.style.display = "flex";
      } else {
        nav.style.display = "none";
      }
    });
  }

  function liHandler(li) {
    li.addEventListener("click", function(e) {
      var nav = document.getElementById("header__nav");
      var button = document.getElementById("mobile-button");
      if (window.innerWidth < 1050) nav.style.display = "none";
      if (button.classList.contains("is-active"))
        button.classList.remove("is-active");
    });
  }

  /**
   *  For smooth scrolling when an item of menu is clicked
   */
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
}
