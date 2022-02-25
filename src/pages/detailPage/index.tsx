import './style.css'
import {useLocation} from 'react-router-dom';
import{RiPenNibFill} from 'react-icons/ri'
import{MdOutlineSubtitles} from 'react-icons/md'

import HeaderSimple from '../../components/headerSimple';

function DetailPage() {
    const location:any = useLocation().state;

    return (
      <div className='detail-container'>
            <HeaderSimple title="Detail Poem"/>
            <div className='listDetail-view'>
              <div className='div-row'>
                <MdOutlineSubtitles/>
                <span>{location?.title}</span>
              </div>
              <div className='div-row'>
                <RiPenNibFill/>
                <span>{location?.author}</span>
              </div>
              <p>{location?.lines}</p>
            </div>
      </div>
    );
  }
  
  export default DetailPage;
  