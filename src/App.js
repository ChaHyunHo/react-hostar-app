import "./App.css";
import Counter from "./Counter";
import Info from "./Info";
import { useState } from "react";
import CounterReducer from "./CounterReducer";
import InfoReducer from "./InfoReducer";
import Average from "./Average";

// var App = () => {
//   const [visible, setVisible] = useState(false);
//
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setVisible(!visible);
//         }}
//       >
//         {visible ? "숨기기" : "보이기"}
//       </button>
//       <hr/>
//       {visible && <Info />}
//     </div>
//   );
// };

function App() {
  return (
      <InfoReducer/>
  );
}

export default App;
