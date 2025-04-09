export function recolourPage(newPageColour) {
  const computedColour = getComputedStyle(
    document.documentElement,
  ).getPropertyValue(`${newPageColour}`);
  document.documentElement.style.setProperty(
    "--page-colour",
    `${computedColour}`,
  );
}
