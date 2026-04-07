import { getChildren } from "./database.js";

const children = getChildren();

export const Kids = () => {
  let html = "<ol>";

  for (const child of children) {
    html += `<li 
    data-id="${child.id}" 
    data-type="child" 
    data-wish="${child.wish}"
    data-name ="${child.name}"
    >${child.name}</li>`;
  }

  html += "</ol>";
  return html;
};

//Kid Paring click event
document.addEventListener("click", (clickEvent) => {
  const clicked = clickEvent.target;
  if (clicked.dataset.type === "child") {
    let clickedKid = { name: clicked.dataset.name, wish: clicked.dataset.wish };
    window.alert(`${clickedKid.name}'s wish is ${clickedKid.wish}`);
  }
});
