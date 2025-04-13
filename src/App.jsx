import Aboutuse from "./pages/about/aboutUs";
import Home from "./pages/home/home";
import Nextpage from "./pages/pagebox/linkbox";
import {  Route,Routes } from "react-router-dom";

  function App(){
  return (
     
      <div>
        <Routes>
        <Route path="/" element={<Home />}/>
      <Route path="/about"element={<Aboutuse/>}/>
      <Route path="/newp/:id" element={<Nextpage/>}/>
        </Routes>
      </div>
    
   
  );
}

export default App;
