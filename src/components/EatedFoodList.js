import React from 'react'
import EatedFoodItem from './EatedFoodItem'

function EatedFoodList(props) {
    const calculateTotalCalories = () =>{
        var totalCalories=0;
        props.eatedFoodList.map(eatedFood=>{
            totalCalories+=eatedFood.quantity*eatedFood.calories;
            return 0;
        })
        return totalCalories;
    }
    return (
        <>
          <h1>I ate:</h1>
          <ul>
            {props.eatedFoodList.map(eatedFood=>{
                return(<EatedFoodItem eatedFood={eatedFood} key={eatedFood.name}/>)
            })}
            
          </ul>
          <b>Total: {calculateTotalCalories()} kcal</b>
        </>
    )
}

export default EatedFoodList
