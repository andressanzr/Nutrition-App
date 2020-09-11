import React, { Component } from "react";

import foodListOriginalJSON from "./foods.json";

import SearchBar from "./components/SearchBar.js";
import FoodList from "./components/FoodList.js";
import EatedFoodList from "./components/EatedFoodList.js";

export class App extends Component {
  state = {
    foodList: foodListOriginalJSON,
    eatedFoodList: []
  };
  componentDidMount() {}
  handleSearch = e => {
    console.log("search " + e.target.value);
    var filteredFoodList = foodListOriginalJSON.filter(
      food => food.name.toLowerCase().indexOf(e.target.value) !== -1
    );
    this.setState({
      ...this.state,
      foodList: filteredFoodList
    });
  };
  handleAddFood = foodItemState => {
    var foodAddedDetails = this.state.foodList.filter(
      food => food.name === foodItemState.foodName
    );

    var existingFood = false;
    this.state.eatedFoodList.map(eatedFood => {
      if (eatedFood.name === foodAddedDetails[0].name) existingFood = true;
    });

    if (!existingFood) {
      foodAddedDetails[0].quantity = foodItemState.foodNumber;
      console.log("changing state");
      this.setState({
        ...this.state,
        eatedFoodList: [...this.state.eatedFoodList, foodAddedDetails[0]]
      });
    } else {
      var newQuantity =
        parseInt(foodAddedDetails[0].quantity) +
        parseInt(foodItemState.foodNumber);
      var listEated = this.state.eatedFoodList;
      listEated.map(food => {
        if (food.name === foodItemState.foodName) food.quantity = newQuantity;
      });
      this.setState({
        ...this.state,
        eatedFoodList: listEated
      });
    }
  };

  render() {
    return (
      <>
        <div className="container">
          <h1>Iron Nutrition</h1>
          <div style={{ display: "flex" }}>
            <div className="container col-5">
              <h4>Search Food</h4>
              <SearchBar writeSearch={this.handleSearch} />
              <FoodList
                foodList={this.state.foodList}
                handleAddFood={this.handleAddFood}
              />
            </div>
            <div className="container col-5">
              <EatedFoodList eatedFoodList={this.state.eatedFoodList} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default App;
