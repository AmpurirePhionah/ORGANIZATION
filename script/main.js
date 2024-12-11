// JavaScript for toggling mobile menu visibility
document.getElementById('hamburger').addEventListener('click', function() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('show');
});

// Keyboard accessibility: Allow pressing "Enter" or "Space" to toggle the menu
document.getElementById('hamburger').addEventListener('keydown', function(event) {
  if (event.key === "Enter" || event.key === " ") {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
  }
});


// ijnfographic
// gallery

  // Lightbox Functionality
document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = document.querySelectorAll(".gallery-item img, .gallery-item video");
  const lightbox = document.createElement("div");
  lightbox.classList.add("lightbox");
  lightbox.style.display = "none";
  document.body.appendChild(lightbox);

  const content = document.createElement("div");
  content.classList.add("lightbox-content");
  lightbox.appendChild(content);

  const closeBtn = document.createElement("button");
  closeBtn.classList.add("close-lightbox");
  closeBtn.innerHTML = "&times;";
  lightbox.appendChild(closeBtn);

  galleryItems.forEach(item => {
    item.addEventListener("click", () => {
      content.innerHTML = "";
      const clone = item.cloneNode(true);
      content.appendChild(clone);
      lightbox.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target === closeBtn) {
      lightbox.style.display = "none";
    }
  });
});

