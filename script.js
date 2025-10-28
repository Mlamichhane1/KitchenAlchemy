// ===== Dataset for Recipes =====
const recipes = [
  {
    name: "Garlic Butter Shrimp",
    type: ["halal", "gluten-free"],
    ingredient: "shrimp",
    img: "https://images.unsplash.com/photo-1604908177430-65c4c3f05b7c?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Avocado Toast Deluxe",
    type: ["vegetarian"],
    ingredient: "avocado",
    img: "https://images.unsplash.com/photo-1617196035154-1e5b3f7bba56?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Pasta Primavera",
    type: ["vegetarian"],
    ingredient: "pasta",
    img: "https://images.unsplash.com/photo-1603133872878-684f8d7158cb?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Lemon Chicken Bowl",
    type: ["halal"],
    ingredient: "chicken",
    img: "https://images.unsplash.com/photo-1603133872741-8e4a1c7f1b3a?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Vegan Stir Fry",
    type: ["vegan", "gluten-free"],
    ingredient: "tofu",
    img: "https://images.unsplash.com/photo-1601050690597-b4a9d8b7e7e5?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Greek Salad",
    type: ["vegetarian", "gluten-free"],
    ingredient: "tomato",
    img: "https://images.unsplash.com/photo-1565958011705-44e21157ad17?auto=format&fit=crop&w=800&q=80"
  }
];

// ===== Display Recipes Dynamically =====
function displayRecipes(recipesToShow) {
  const recipeSection = document.querySelector(".recipes");
  recipeSection.innerHTML = ""; // clear old recipes

  recipesToShow.forEach(recipe => {
    const card = document.createElement("div");
    card.classList.add("recipe-card");
    card.innerHTML = `
      <img src="${recipe.img}" alt="${recipe.name}">
      <h3>${recipe.name}</h3>
      <p>${recipe.type.join(", ")}</p>
    `;
    recipeSection.appendChild(card);
  });
}

// ===== Filter Recipes by Dietary Type =====
function filterRecipes(type) {
  const filtered = recipes.filter(recipe => recipe.type.includes(type));
  displayRecipes(filtered);
}

// ===== Search Recipes by Ingredient =====
function searchRecipe() {
  const input = document.getElementById("ingredientInput").value.toLowerCase();
  const filtered = recipes.filter(recipe =>
    recipe.ingredient.toLowerCase().includes(input)
  );
  displayRecipes(filtered);
}

// ===== Smooth Scroll to Section =====
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// ===== Initialize Page =====
document.addEventListener("DOMContentLoaded", () => {
  displayRecipes(recipes);
});
