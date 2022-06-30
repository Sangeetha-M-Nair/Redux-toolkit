import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increaseAmount,
  increment,
} from "./redux/slices/counterSlices";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state?.counter); //state &&state.value
  console.log(counter);
  return (
    <div className="App">
      <h1>Redux Tool Kit</h1>
      <h2>Counter:{counter.value}</h2>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(increaseAmount(20))}>Increase Amount</button>
    </div>
  );
}

export default App;
