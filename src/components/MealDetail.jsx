import { useLoaderData } from "react-router-dom";



const MealDetail = () => {
    const {meals} = useLoaderData()
    const {strMeal,strMealThumb,strInstructions} = meals[0]
   console.log(meals[0].strMeal)
    return (
        <div>
            <img className="h-[250px] w-[250px]" src={strMealThumb} alt="" />
            <h1 className="text-[60px] font-[700]">{strMeal}</h1>
            <h1>{strInstructions}</h1>
        </div>
    );
};

export default MealDetail;