import Tagbar from "../../compiler/header";
import Style from "./stylehom.module.css";
import { useEffect, useState } from "react";
import Box from "../../box/codebox";
import { Link } from "react-router-dom";
import axios from "axios"
import Loading from"../../loade/loading"
function Hom() {
  const [articles, setArticles] = useState([]);
  const [isloading, setloading] = useState(true);
axios
.get("http://localhost:3000/articles").then((result)=>{
setArticles(result.data);
setloading(false)
}).catch((error)=>{
console.log(error);

});


 return( 
 
<div className={Style.parent}>
<Tagbar/>
 <div/>
 {isloading?( <div className={Style.Loadings}> <Loading/></div>):(<> < div  className={Style.contaner}> 
 <h1>home</h1>
 </div><div  className={Style.box} > {articles.map((article)=>(
   <Link to={`/newp/${article.id}`}>  <Box key={ article.id} title={article}/></Link>
     ))} </div></>)}
    
</div>
 
    )

}
export default Hom;
