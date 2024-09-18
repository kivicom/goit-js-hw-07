const categoriesList = document.querySelector("ul#categories");
const categories = document.querySelectorAll("ul#categories li.item");

const numberOfCategories = categoriesList.children.length;

console.log("Number of categories:", numberOfCategories);

categories.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const elements = category.querySelector("ul").children;
  console.log("Category:", title);
  console.log("Elements:", elements.length);
});
