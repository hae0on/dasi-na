(() => {
  const cursor = document.querySelector(".custom-cursor");
  const ring = cursor?.querySelector(".cursor-ring");
  if (!cursor || !ring || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  document.addEventListener("mousemove", (event) => {
    cursor.classList.add("is-visible");
    cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    ring.classList.toggle("is-active", Boolean(event.target.closest("a, button, input, textarea, summary")));
  });

  document.addEventListener("mouseleave", () => {
    cursor.classList.remove("is-visible");
    ring.classList.remove("is-active");
  });

  document.addEventListener("touchstart", () => {
    cursor.classList.remove("is-visible");
  }, { passive: true });
})();
