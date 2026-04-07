import { getChildren } from "./database.js";

const children = getChildren();

export const Kids = () => {
  let html = "<ol>";

  for (const child of children) {
    html += `<li data-id="${child.id}" data-type="child" data-wish="${child.wish}">${child.name}</li>`;
  }

  html += "</ol>";
  return html;
};

//Kid Paring click event
document.addEventListener("click", (clickEvent) => {
  const clicked = clickEvent.target;
  if (clicked.dataset.type === "child") {
    let clickedKid = null;
    for (const child of children) {
      if (parseInt(clicked.dataset.id) === child.id) {
        clickedKid = child;
        debugger;
      }
    }
  }
});
