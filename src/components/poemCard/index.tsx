import './style.css'
import { MdFavorite } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { poem, triggerFavoritList } from '../../store/poemSlice';
import { useAppDispatch } from '../../hooks';

type poemCard={
  favorit?:Boolean
} & poem

function PoemCard(props:poemCard) {
  const navigate = useNavigate()
  const{title,author,favorit,like}=props
  const dispatch=useAppDispatch()

  const navigateToDetail=()=>{
    navigate('/detail', { replace: true, state: {...props} })
  }

  const changeFavoritList=()=>{
    // setLike(!like)
    dispatch(triggerFavoritList({...props}))
  }
  
  return (
    <div className="card-container" >
      {!favorit 
      ?<div className="favorit-container"  onClick={changeFavoritList}>
        <MdFavorite  
        color={like ?'#8c0fc2' :'#cacaca'}
        size={20} />        
      </div>
      :null
      }
      <div onClick={navigateToDetail}>
        <div className="author-box">
          <div className="circle-name">
            <span>{author.charAt(0)}</span>
          </div>
          <span>{author}</span>
        </div>
        <span className='title-box'>{title}</span>
      </div>

    </div>
  );
  }
  
  export default PoemCard;
  