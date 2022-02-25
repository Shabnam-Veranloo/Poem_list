
import { GrFavorite } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import DropDown from "../dropDown";
import './style.css'
type HeaderHomeType={
    title?:string
}

function HeaderHome(props:HeaderHomeType) {
    const{title}=props
    let navigate = useNavigate()
    const favoritList=useAppSelector(state=>state.poemList.favoritList)
  

    return (
        <div className="header-container">
          <span>{title ?title :"Poem List"}</span>
          <div className='row-container'>
            <DropDown/>
            <div className='icon-box'>
              <GrFavorite size={35} onClick={()=>navigate('/favorite')}/>
              {favoritList.length>0
              ?<div className='badge-view'>
                {favoritList?.length}
              </div>
              :null
              }
            </div>
          </div>
        </div>
    );
  }
  
  export default HeaderHome;
  