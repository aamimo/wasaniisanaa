// Simple tab/page router using hash
(function () {
  const pages = document.querySelectorAll(".page");
  const links = document.querySelectorAll("[data-link]");
  const nav = document.getElementById("nav");
  const toggle = document.getElementById("menuToggle");

  function show(name) {
    pages.forEach((p) => p.classList.toggle("active", p.id === "page-" + name));
    links.forEach((l) =>
      l.classList.toggle("active", l.getAttribute("data-link") === name)
    );
    window.scrollTo({ top: 0, behavior: "instant" });
    nav.classList.remove("open");
    document.title = titleFor(name);
  }

  function titleFor(name) {
    const map = {
      home: "Wasanii Sanaa — Unity Gives Strength",
      about: "About Profile — Wasanii Sanaa",
      gallery: "Gallery Portfolio — Wasanii Sanaa",
      programs: "Core Programs — Wasanii Sanaa",
      contact: "Inquiries & Contact — Wasanii Sanaa",
    };
    return map[name] || map.home;
  }

  function fromHash() {
    const name = (location.hash || "#home").replace("#", "");
    show(["home", "about", "gallery", "programs", "contact"].includes(name) ? name : "home");
  }

  links.forEach((l) =>
    l.addEventListener("click", (e) => {
      e.preventDefault();
      const name = l.getAttribute("data-link");
      history.pushState(null, "", "#" + name);
      show(name);
    })
  );

  if(toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
  }
  
  window.addEventListener("popstate", fromHash);
  fromHash();

  // Custom Formspree redirect validation
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", async function(e) {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.disabled = true;
      submitBtn.innerHTML = "Sending...";
      const data = new FormData(form);

      fetch("https://formspree.io/f/xzdoalgl", {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      }).then(response => {
        if (response.ok) {
          window.location.href = "thanks.html";
        } else {
          alert("Oops! There was a problem sending your message.");
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
      }).catch(error => {
        alert("Connection error. Please try again.");
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      });
    });
  }
})();
