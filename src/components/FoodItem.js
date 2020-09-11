import React, { Component } from "react";

export class FoodItem extends Component {
  constructor(props) {
    super(props);
    this.inputQuantity = React.createRef();
  }
  state = {
    foodName: this.props.food.name,
    foodNumber: this.props.food.quantity
  };
  handleFoodNumberChange = e => {
    this.setState({
      foodNumber: e.target.value
    });
  };
  handleClick = () => {
    if (this.state.foodNumber > 0) {
      this.props.addFood(this.state);
      const node = this.inputQuantity.current;
      this.setState({
        foodNumber: 0
      });
      node.value = 0;
    } else {
    }
  };
  render() {
    return (
      <>
        <li className="list-group-item" style={{ display: "flex" }}>
          <div className="box-left">
            <img src={this.props.food.image} alt={this.props.food.name} />
          </div>
          <div className="box-center">
            <p style={{ fontWeight: "bold" }}>{this.props.food.name}</p>
            <p>{this.props.food.calories + " kcal"} </p>
          </div>
          <div className="box-right">
            <p>
              <input
                type="number"
                className="form-control"
                min="0"
                defaultValue={this.props.food.quantity}
                onChange={this.handleFoodNumberChange}
                ref={this.inputQuantity}
              ></input>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.handleClick}
              >
                +
              </button>
            </p>
          </div>
        </li>
      </>
    );
  }
}

export default FoodItem;
