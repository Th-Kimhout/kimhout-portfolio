// Shared scroll helper for the IDE shell. Accounts for the fixed
// title bar (36px) + tab bar (40px) at the top of the viewport.
export const CHROME_OFFSET = 90;

export function scrollToSection(id) {
  if (typeof window === "undefined") return;
  if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - CHROME_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
}
