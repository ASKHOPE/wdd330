/* const links = [
  {
    label: "Week1 notes",
    url: "week1/index.html",
  },
];
*/

const dynamic_Contents = document.querySelector("#dynamic-links");
const links = [
  {
    label: "Week1 Notes",
    url: "week1/index.html",
  },
  {
    label: "Week2 Notes",
    url: "week2/index.html",
  },
  {
    label: "Week2 Team Assignment",
    url: "week2/teamwork.html",
  },

  //Uncomment when the second week is made available
];

links.forEach((link) => {
  const list = document.createElement("li");
  const url = document.createElement("a");
  url.setAttribute("href", link.url);
  url.textContent = link.label;
  list.appendChild(url);
  dynamic_Contents.appendChild(list);
});