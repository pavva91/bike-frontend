export default function resetSelection() {
  let nav_ul = document.getElementById('navbar-ul')
  for (const ch in nav_ul.children) {
    if (nav_ul.children.hasOwnProperty(ch)) {
      const element = nav_ul.children[ch]
      if (element.children[0]) {
        element.children[0].style.color = getComputedStyle(
          document.documentElement,
        ).getPropertyValue('var(--vt-c-text-1)')
      }
    }
  }
}
