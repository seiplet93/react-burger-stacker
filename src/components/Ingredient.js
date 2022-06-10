import React, { Component } from "react";

export default class Ingredient extends Component {
  render() {
    return (
      <>
        <div
          key={`ingred-${this.props.i}`}
          onClick={this.props.handleAddToStack}
          style={{ backgroundColor: this.props.item.color }}
        >
          {this.props.item.name}
        </div>
      </>
    );
  }
}