import React from "react";
import Recipe from "./Recipe";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_ID = import.meta.env.VITE_API_ID;
const USER_ID = import.meta.env.VITE_USER_ID;

const FoodRecipe = () => {
  const [recipes, setRecipes] = React.useState([]);
  const [query, setQuery] = React.useState("Barbeque");
  const [search, setSearch] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(null);

  const onSubmitSearch = (e) => {
    e.preventDefault();
    if (!search) {
      return;
    }
    setLoading(true);
    setQuery(search);
    setSearch("");
    setLoading(false);
  };
  const getRecipes = async () => {
    setLoading(true);
    const API_URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${API_ID}&app_key=${API_KEY}`;

    console.log("UserID", USER_ID);
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Edamam-Account-User": USER_ID,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      const error = await response.json();
      setErrorMessage(error.message);
      setLoading(false);
      console.error("Error:", error);
      return;
    }
    setRecipes([]);
    const data = await response.json();
    setRecipes(data.hits);
    setLoading(false);
    console.log(data);
  };

  React.useEffect(() => {
    getRecipes();
  }, [query]);

  const loadingSpinner = () => {
    return (
      <div className="flex justify-center items-center">
        <svg
          className="animate-spin h-10 w-10 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4.93 4.93a10 10 0 0114.14 14.14l1.42 1.42a12 12 0 00-16.97-16.97l1.41 1.41z"
          ></path>
        </svg>
      </div>
    );
  };

  return (
    <div className="py-10 px-4 mx-auto container">
      <h1 className="my-5 text-2xl font-semibold mb-4text-center shadow-2xs shadow-cyan-300 font-serif text-center">
        Food Recipe Finder
      </h1>
      <form
        className="flex justify-center mb-6 shadow-2xs"
        onSubmit={onSubmitSearch}
      >
        <input
          className="search-bar border border-gray-300 rounded-l px-4 py-2 w-full focus:outline focus:outline-sky-500 text-center"
          type="text"
          placeholder="Search for a recipe..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          required
        />
        <button
          className="text-white bg-blue-500 rounded-r px-4 py-2 cursor-pointer hover:bg-blue-600 transition duration-300 ease-in-out"
          type="submit"
        >
          Search
        </button>
      </form>
      <h2 className="text-center text-2xl font-semibold mb-4">
        Recipes for "{query}"
      </h2>
      {/* Loading spinner or empty recipe message */}
      {loading && (
        <div className="flex justify-center items-center h-50">
          {loadingSpinner()}
        </div>
      )}
      {errorMessage && (
        <div className="flex justify-center items-center h-50">
          <h1 className="text-xl font-semibold">{errorMessage}</h1>
        </div>
      )}
      {!loading && recipes.length === 0 && (
        <div className="flex justify-center items-center h-50">
          <h1 className="text-2xl font-semibold">No recipes found!</h1>
        </div>
      )}

      {/* If recipes are not empty, show recipe list */}
      <div className="py-2 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 overflow-y-auto h-full">
        {recipes.map((item, index) => (
          <Recipe
            key={index}
            title={item.recipe.label}
            ingredients={item.recipe.ingredients}
            calories={item.recipe.calories}
            image={item.recipe.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodRecipe;
