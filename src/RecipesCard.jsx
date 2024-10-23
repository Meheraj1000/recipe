import { useEffect } from "react";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const RecipesCard = ({adddRecipeToQueue}) => {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch('recips.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    console.log(recipes);
    return (
        <div className="md:w-2/3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-10">
                {
                    recipes.map(recipe => (
                        <div key={recipe.id} className="card bg-base-100 border-2">
                            <figure className="px-8 pt-6">
                                <img className="rounded-xl"
                                    src={recipe.image}
                                    alt="recipe img" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-xl text-gray-500">{recipe.name}</h2>
                                <p className="text-base">{recipe.description}</p>
                                <hr />
                                <h3 className="text-lg font-medium">Ingredients: {recipe.ingredients.length}</h3>
                                <ul className="list-disc ml-7">
                                    {recipe.ingredients.map((item, index) => <li key={index}>{item}</li>)}
                                </ul>

                                <div className="flex gap-5">
                                    <div className="flex items-center gap-1">
                                        <i className="fa-regular fa-clock"></i>
                                        <p>{recipe.prep_time} minutes</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <i className="fa-solid fa-fire"></i>
                                        <p>{recipe.calories} calories</p>
                                    </div>
                                </div>

                                <div className="card-actions justify-start pt-4 ">
                                    <button onClick={()=>adddRecipeToQueue(recipe)} className="btn bg-green-600 rounded-full px-9 font-bold text-gray-800">Want to Cook</button>
                                </div>
                            </div>
                        </div>
                    ))}

            </div>
        </div>
    );
};

export default RecipesCard;