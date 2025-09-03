import MealItem from "./meal-item";

export default function MealGird({meals}:{
    meals: {id: number,title:string,slug:string,image: string ,summary: string ,creator:string }[],

}){
    
    
    return (<ul className="gird-meals">
        {
            meals.map((meal)=>(
            <li key={meal.id}  className="" >
                <MealItem {...meal} />
            </li>
            ))
        }
    </ul>);
};