import Aboutuse from "./pages/about/aboutUs";
import Home from "./pages/home/home";
import { Route,Routes } from "react-router-dom";
import Nextpage from "./pages/pagebox/linkbox";
  function App() {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about"element={<Aboutuse/>}/>
      <Route path="/newp/:id" element={<Nextpage/>}></Route>
     </Routes>

    </div>
  );
}

export default App;
