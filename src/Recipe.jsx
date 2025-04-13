import React from "react";

const Recipe = ({ title, image, ingredients, calories }) => {
  return (
    <>
      <div className="p-2 bg-white border border-gray-200 rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-cyan-200 hover:bg-gray-200 hover:shadow-2xl">
        <img
          className="w-full h-80 object-cover"
          src={image}
          alt="Card image"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <ol className="mt-2 text-sm text-gray-600 overflow-y-auto h-32">
            {ingredients.map((ingredient) => (
              <li>{ingredient.text}</li>
            ))}
          </ol>
          <p className="mt-2 text-sm text-gray-600">Calories : {calories}</p>
        </div>
      </div>
    </>
  );
};

export default Recipe;
