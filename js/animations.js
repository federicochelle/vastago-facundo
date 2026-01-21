document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".process-card, .card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.25, // aparece cuando se ve 25%
    },
  );

  animatedElements.forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
  const heroLogo = document.querySelector(".hero-reveal");
  if (!heroLogo) return;

  requestAnimationFrame(() => {
    heroLogo.classList.add("is-visible");
  });
});
