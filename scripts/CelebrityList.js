import { getCelebrities } from "./database.js";

const celebrities = getCelebrities();

export const Celebrities = () => {
  let html = "<ol>";

  for (const celebrity of celebrities) {
    html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    data-name="${celebrity.name}"
                    id="star--${celebrity.id}">
                    ${celebrity.name}
                </li>`;
  }

  html += "</ol>";
  return html;
};

//Click event
document.addEventListener("click", (clickEvent) => {
  let clicked = clickEvent.target;
  if (clicked.dataset.type === "celebrity") {
    let clickedCelebrity = {
      name: clicked.dataset.name,
      sport: clicked.dataset.sport,
    };
    window.alert(
      `${clickedCelebrity.name} is a ${clickedCelebrity.sport} start `,
    );
  }
});
