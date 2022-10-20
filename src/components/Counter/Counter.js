import { Component } from "react";
import { connect } from "react-redux";
import { decrement, increment, set } from "../../store/counterReducer";

class Counter extends Component {
  render() {
    const { count, increment, decrement, set } = this.props;

    return (
      <div className="counter">
        <div className="title">Counter</div>
        <div className="count">{count}</div>
        <div className="controlls">
          <button onClick={() => increment()}>Increment</button>
          <button onClick={() => set(0)}>Reset</button>
          <button onClick={() => decrement()}>Decrement</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.counter.count,
});

const mapDispatchToProps = {
  increment,
  decrement,
  set,
};

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default CounterContainer;
