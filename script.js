document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider .list");
  if (slider) {
    const videos = document.querySelectorAll(".slider .list video");
    const next = document.querySelector(".slider .next");
    const prev = document.querySelector(".slider .prev");
    const dots = document.querySelectorAll(".slider .dots li");

    let active = 0;
    const videoCount = videos.length;

    function moveSlider() {
      slider.style.transform = `translateX(-${active * 600}px)`;
      updateDots();
    }

    function updateDots() {
      dots.forEach((dot) => dot.classList.remove("active"));
      dots[active].classList.add("active");
    }

    next.addEventListener("click", () => {
      active = (active + 1) % videoCount;
      moveSlider();
    });

    prev.addEventListener("click", () => {
      active = (active - 1 + videoCount) % videoCount;
      moveSlider();
    });

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        active = index;
        moveSlider();
      });
    });

    moveSlider();
  }

  const form = document.getElementById("contact-form");
  if (form) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const submitButton = document.querySelector("button[type='submit']");

    function checkFormFields() {
      if (
        nameInput.value.trim() !== "" &&
        emailInput.value.trim() !== "" &&
        messageInput.value.trim() !== ""
      ) {
        submitButton.disabled = false;
      } else {
        submitButton.disabled = true;
      }
    }

    submitButton.disabled = true;

    nameInput.addEventListener("input", checkFormFields);
    emailInput.addEventListener("input", checkFormFields);
    messageInput.addEventListener("input", checkFormFields);

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Formulario enviado correctamente");
      form.reset();
      submitButton.disabled = true;
    });
  }
});

let prevScrollPos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  const header = document.querySelector("header");
  if (header) {
    if (prevScrollPos > currentScrollPos) {
      header.classList.remove("hide");
    } else {
      header.classList.add("hide");
    }
  }
  prevScrollPos = currentScrollPos;
};

document
  .querySelector('a[href="#contact"]')
  .addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "formulario.html";
  });
