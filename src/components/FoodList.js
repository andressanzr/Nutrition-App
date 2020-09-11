import React from 'react'
import FoodItem from './FoodItem';

function FoodList(props) {
    return (
        <div>
            <ul className="list-group">
                {props.foodList.map(food=>{
                    return(<FoodItem food={food} addFood={props.handleAddFood} key={food.name}/>);
                })}
            </ul>
        </div>
    )
}

export default FoodList
