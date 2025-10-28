// Dataset for recipes
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
    img: "https://images.unsplash.com/photo-1565958011705-44e211510b17?auto=format&fit=crop&w=800&q=80"
  },
  { 
    name: "Greek Salad", 
    type: ["vegetarian", "gluten-free"], 
    ingredient: "cucumber", 
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80"
  }
];

// Display all recipes on page load
window.addEventListener("load", () => {
  displayRecipes(recipes);
});

// Function to display recipes
function displayRecipes(list) {
  const grid = document.getElementById("recipeGrid");
  grid.innerHTML = "";
  if (list.length === 0) {
    grid.innerHTML = "<p>No recipes found.</p>";
    return;
  }
  list.forEach((recipe, index) => {
    const delay = index * 100; // stagger animation
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.style.animationDelay = `${delay}ms`;
    card.innerHTML = `
      <img src="${recipe.img}" alt="${recipe.name}">
      <h3>${recipe.name}</h3>
      <p>${recipe.type.join(", ")}</p>
    `;
    grid.appendChild(card);
  });
}

// Filter recipes by dietary type
function filterRecipes(type) {
  if (type === "all") {
    displayRecipes(recipes);
  } else {
    const filtered = recipes.filter(r => r.type.includes(type));
    displayRecipes(filtered);
  }
}

// Search by ingredient
function searchRecipe() {
  const input = document.getElementById("ingredientInput").value.toLowerCase();
  const filtered = recipes.filter(r => r.ingredient.includes(input));
  displayRecipes(filtered);
}

// Scroll to recipes
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
