import { useState } from "react"
import Label from "../lable/lable"
import axios from "axios"
import Style from "./about.module.css"
import Tagbar from "../../compiler/header"
function Aboutuse(){
const [article,setArticle]=useState({
  
      imgUrl:"",
      title:"",
      readingTime:"",
      img:"",
      title2:""
})
const inpUt=(e)=>{
  console.log(e.target.value);
  
  setArticle((prev)=>({
...prev,
[e.target.name]:e.target.value
  }))
}

const server=()=>{
  axios.post("http://localhost:3000/articles",{
    imgUrl:article.imgUrl,
    title:article.title,
    readingTime:article.readingTime,
    img:article.img,
    title2:article.title2
  })
 
}
console.log(article);

  return(
   <div className={Style.parent}>
   <Tagbar/>
    <Label text="عکس صفحه اصلی" name="imgUrl" type="text"  onChange={inpUt}/>
    <Label text="متن صفحه اصلی " name="title" type="text"  onChange={inpUt}/>
    <Label text="زمان خواندن" name="readingTime" type="text"  onChange={inpUt}/>
    <Label text="عکس مقاله" name="img" type="text"  onChange={inpUt}/>
    <Label text="متن مقاله" name="title2" type="text"  onChange={inpUt}/>

    <button  className={Style.button} onClick={server}>
      save
    </button>
   </div>


  )
}
export default Aboutuse