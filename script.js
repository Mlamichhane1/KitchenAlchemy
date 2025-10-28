// ===== Recipe Data =====
const recipes = [
  { name: "Garlic Butter Shrimp", type: ["halal", "gluten-free"], ingredient: "shrimp" },
  { name: "Avocado Toast Deluxe", type: ["vegetarian"], ingredient: "avocado" },
  { name: "Pasta Primavera", type: ["vegetarian"], ingredient: "pasta" },
  { name: "Lemon Chicken Bowl", type: ["halal"], ingredient: "chicken" },
  { name: "Vegan Stir Fry", type: ["vegan", "gluten-free"], ingredient: "tofu" },
  { name: "Greek Salad", type: ["vegetarian", "gluten-free"], ingredient: "tomato" }
];

// ===== Display Recipes =====
function displayRecipes(recipesToShow) {
  const recipeSection = document.querySelector(".recipes");
  recipeSection.innerHTML = "";

  recipesToShow.forEach(recipe => {
    const card = document.createElement("div");
    card.classList.add("recipe-card");
    card.innerHTML = `
      <h3>${recipe.name}</h3>
      <p><strong>Type:</strong> ${recipe.type.join(", ")}</p>
      <p><strong>Main Ingredient:</strong> ${recipe.ingredient}</p>
    `;
    recipeSection.appendChild(card);
  });
}

// ===== Filter by Type =====
function filterRecipes(type) {
  const filtered = recipes.filter(recipe => recipe.type.includes(type));
  displayRecipes(filtered);
}

// ===== Search by Ingredient =====
function searchRecipe() {
  const input = document.getElementById("ingredientInput").value.toLowerCase();
  const filtered = recipes.filter(recipe =>
    recipe.ingredient.toLowerCase().includes(input)
  );
  displayRecipes(filtered);
}

// ===== Scroll to Section =====
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// ===== Initialize =====
document.addEventListener("DOMContentLoaded", () => {
  displayRecipes(recipes);
});
