import Aboutuse from "./pages/about/aboutUs";
import Home from "./pages/home/home";
// import { Route,Routes } from "react-router-dom";
import Nextpage from "./pages/pagebox/linkbox";
import { HashRouter as Router,Route,Routes } from "react-router-dom";
  function App() {
  return (
     <Router>
      <div>
        <Routes>
        <Route path="/" element={<Home />}/>
      <Route path="/about"element={<Aboutuse/>}/>
      <Route path="/newp/:id" element={<Nextpage/>}></Route>
        </Routes>
      </div>
     </Router>
   
  );
}

export default App;
