import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { BrowserRouter , Router, Routes, Route} from "react-router-dom";

const App = () => {
  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path = "/" element ={<Home />}/>
        <Route path = "/about" element ={<About />}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;