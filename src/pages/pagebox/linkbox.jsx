import Menue from "../../compiler/header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import dizin from "./linkbox.module.css";
import Load from "../../loade/loading";
function Nextpage() {
  const [article, setarticle] = useState({});
  const[loading,setLoading]=useState(false)
  const params = useParams();
  console.log(params);

  useEffect(() => {
    setLoading(true)
    axios
      .get(`http://localhost:3000/articles/${params.id}`)
      .then((result) => {
        setarticle(result.data);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
        setLoading(false)
      });
  }, []);
  return (
    <div  className={dizin.parent}key={article.id}>
      <Menue />
      {loading?( <div className={dizin.Loadings}><Load/></div>):(<><div className={dizin.post}>
        <img src={article.img} key={article.id} />
      </div>
      <div className={dizin.text}>
        <h1>{article.title2}</h1>
      </div>
      </>)}
      </div>) 
  
}
export default Nextpage;
