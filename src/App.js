import "./App.css";
import Navbar from "./components.jsx/Navbar";
import Personalinfo from "./components.jsx/Personalinfo";
import Progressbar from "./components.jsx/Progressbar";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accountinfo from "./components.jsx/Accountinfo";
import Address from "./components.jsx/Address";
import Afterpage from "./components.jsx/Afterpage";
import Alert from "./components.jsx/Alert";

function App() {
  const store = useSelector((state) => state.add);
  // const close = useSelector((state)=>state.close);
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Personalinfo />}></Route>
          <Route path="/personalinfo" element={<Personalinfo />}></Route>
          <Route path="/address" element={<Address />}></Route>
          <Route path="/account" element={<Accountinfo />}></Route>
          <Route path="/submit" element={<Afterpage />}></Route>
        </Routes>
      </BrowserRouter>
      <Progressbar status={store} />
      {/* <Alert disp={store}/> */}
    </div>
  );
}

export default App;
