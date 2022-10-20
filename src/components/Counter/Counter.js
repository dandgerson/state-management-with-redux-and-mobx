import { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <div className="title">Counter</div>
        <div className="count">0</div>
        <div className="controlls">
          <button>Increment</button>
          <button>Reset</button>
          <button>Decrement</button>
        </div>
      </div>
    );
  }
}

export default Counter;
