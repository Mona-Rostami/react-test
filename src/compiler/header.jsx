import Stayle from './hear.module.css'
import { Link } from 'react-router-dom'
function Menue(props){
 

  return(
    <div className={Stayle.header}>
      {/* <div>{props.titel} </div> */}
      <ul>
        <li>
        </li>
        <li> 
           <Link to="/">صفحه اصلی</Link>
        </li>
        <li>
        <Link to="/about">ساخت مقاله</Link>
          </li>
      </ul>
    </div>
  )
}
export default Menue