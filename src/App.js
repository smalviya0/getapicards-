// import React from "react";
// // import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
// import {  Routes, Route } from "react-router-dom";
// import PostDetails from "./Component/PostDetails";
// import CardComponent from "./Component/CardComponent";

// function App() {
//   return (
//     <div className="App">
      
//         <Routes>
//           <Route path="/" element={ <CardComponent/>} />
//           <Route path="/post" element={<PostDetails/>} />
//         </Routes>
      
//     </div>
//   );
// }

// export default App;
import React from "react";
import CardComponent from "./Component/CardComponent ";

function App() {
  return (
    <div className="App">
      <CardComponent />
    </div>
  );
}

export default App;
