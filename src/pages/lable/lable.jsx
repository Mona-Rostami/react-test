
import Style from "./lable.module.css"

function Label(props){
  return(
    <>
   <div className={Style.parentinput}>
   <label>{props.text}</label>
      <input name={props.name}type={props.type} onChange={props.onChange}></input>
   </div>
    </>
  )
}
export default Label