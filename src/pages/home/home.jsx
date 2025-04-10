import Tagbar from "../../compiler/header";
import Style from "./stylehom.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Box from "../../box/codebox";
import { Link } from "react-router-dom";
import Loadings from "../../loade/loading"
function Hom() {
  const[articles,useArticle]=useState([]) 
  const[isloading,setLoading]=useState(false)
   useEffect(() => {
    setLoading(true)
    axios
      .get("http://localhost:8000/articles")
      .then((user) => {
        useArticle(user.data);
        setLoading(false)
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false)
      });
  }, []);

 return( 
 
<div className={Style.parent}>
<Tagbar/>
 <div/>
 {isloading?( <div className={Style.Loadings}> <Loadings/></div>):(<> < div  className={Style.contaner}> 
 <h1>home</h1>
 </div><div  className={Style.box} > {articles.map((article)=>(
   <Link to={`/newp/${article.id}`}>  <Box key={ article.id} title={article}/></Link>
     ))} </div></>)}
    
</div>
 
    )

}
export default Hom;
