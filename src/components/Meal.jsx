import { useLoaderData } from "react-router-dom";
import CategoriCard from "./CategoriCard";


const Meal = () => {
    
    const {meals} = useLoaderData()
    
    return (
        <div className="ml-[30px] grid grid-cols-3 gap-9">
            {
                meals.map((e,i)=> <CategoriCard key={i} send={e}></CategoriCard>)
            }
            
        </div>
    );
};

export default Meal;