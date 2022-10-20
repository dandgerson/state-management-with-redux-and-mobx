import CounterContainer from "./components/Counter/Counter";
import normalizedState from "./Kanban/normalized-state";

const App = () => {
  console.log({
    normalizedState,
  });

  return (
    <div className="app">
      <CounterContainer />
    </div>
  );
};

export default App;
