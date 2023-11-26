import "./App.css";
import { BrowserRouter , Route , Routes } from "react-router-dom";
import Admin from "./compoents/admin/admin";
import Login from "./compoents/login/login";

function App() {
    return(
      // <div className="App">
      //   <Login/>
      // </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="chat" element={<Admin/>}/>
        </Routes>
      </BrowserRouter>
    )
}

export default App;
