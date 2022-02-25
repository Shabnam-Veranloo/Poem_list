import './style.css'
import { useNavigate } from "react-router-dom"
import {FaArrowLeft} from 'react-icons/fa'

type HeaderFavorite={
    title?:string
}

function HeaderSimple(props:HeaderFavorite) {
    const{title}=props
    let navigate = useNavigate()
    
    return (
        <div className="header-container">
          <div className='row-container'>
            <FaArrowLeft className='icon-box-back' onClick={()=>navigate('~')}/>
            <span>{title ?title :"Poem List"}</span>
           </div>
        </div>
    );
  }
  
  export default HeaderSimple;
  