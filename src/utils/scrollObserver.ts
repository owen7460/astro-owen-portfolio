export function observeElements(
  selector: string,
  options: IntersectionObserverInit = { threshold: 0.3 },
  className = "visible",
  once = true
) {
  if (typeof window === "undefined") return; // SSR 环境下直接返回

  const elements = document.querySelectorAll(selector);

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(className);
        if (once) obs.unobserve(entry.target);
      }
    });
  }, options);

  elements.forEach((el) => observer.observe(el));
}