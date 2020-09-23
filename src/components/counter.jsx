import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { onIncrement, onDelete } = this.props;
    return (
      <div>
        <span className={this.renderBadgeClasses()}>{this.formatValue()}</span>
        <button
          onClick={() => onIncrement(this.props.counter)}
          className="btn btn-primary m-2"
        >
          Increement
        </button>
        <button
          onClick={() => onDelete(this.props.counter)}
          className="btn btn-primary btn-danger m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  formatValue() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }

  renderBadgeClasses() {
    let classes = "badge m-2 badge-";
    return (classes += this.props.counter.value === 0 ? "warning" : "primary");
  }
}

export default Counter;
