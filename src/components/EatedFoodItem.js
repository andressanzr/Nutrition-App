import React from 'react'

function EatedFoodItem(props) {
    return (
        <>
           <li>{props.eatedFood.quantity} {props.eatedFood.name} x {props.eatedFood.calories} kcal = {props.eatedFood.quantity*props.eatedFood.calories}</li>
        </>
    )
}

export default EatedFoodItem
