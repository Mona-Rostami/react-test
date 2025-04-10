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
           <Link to="/">menue</Link>
        </li>
        <li>
        <Link to="/about">about</Link>
          </li>
      </ul>
    </div>
  )
}
export default Menue