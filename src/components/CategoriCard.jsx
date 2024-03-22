
import { useLoaderData, useNavigate } from 'react-router-dom'


const CategoriCard = ({send}) => {
    
    const navi = useNavigate()
    const {idMeal,strMealThumb,strCategory,strInstructions} = send

    
    
    
        // console.log(send)
      return (
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={strMealThumb}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{strCategory}</h2>
            
            <p>{strInstructions.slice(0,100)}</p>
            <div className="card-actions justify-end">


              <button onClick={()=> navi(`/detail/${idMeal}`)} className="btn btn-primary">See Detail</button>

              
            </div>
          </div>
        </div>
      );
}

CategoriCard.propTypes = {

}

export default CategoriCard
