import React,{useState} from "react";
import "./style.css";
function Counter(){
  const [count,setCount] = useState(10);
  function increment (){
    setCount(count+1)
  };
  const style={
    color:"black",
    backgroundColor:"green"
  }
  const style1={
    color:"black",
    backgroundColor:"red"
  }
  function decrement (){
    setCount(count-1)
  };
   return (
     <>
     <h2 style={style1}>above the "count" is initial state and "setCount" is the function to apdate the the initial state</h2>
     <h1 style={style}>count is : {count}</h1>
     <button onClick={increment} style={style}>Inc</button>
     <button onClick={decrement} style={style1}>Dec</button>
     </>
   );
}
export default function App() {
  return (
    <div>
      <Counter />
      <h1>Hooks Only be used in functional component</h1>
      <p>Counter app By using the useState Hook</p>
    </div>
  );
}
