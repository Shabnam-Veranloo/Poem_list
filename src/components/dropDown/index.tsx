import './style.css'
import {  useEffect, useRef, useState } from "react";
import useOutsiderDetect from '../../hooks/useOutsiderDetect'
import {IoIosArrowDropdown,IoIosArrowDropup} from 'react-icons/io'
import {FaSortAlphaDown} from 'react-icons/fa'
import { useAppDispatch, useAppSelector } from "../../hooks";
import { sortByAuthor, sortByTitle } from '../../store/poemSlice';


export default function DropDown() {
    
    const dispatch=useAppDispatch()
    const sort=useAppSelector(state=>state.poemList.sortType)

    const[visible ,setVisible]=useState(false)
    const[select ,setSelect]=useState('Select...')

    useEffect(()=>{
        setSelect(sort ?sort :'Select....')
    },[sort])


    const ref=useRef(null)
    const hide=()=>{
        setVisible(false)
    }
    const show=()=>{
        setVisible(true)
    }
    useOutsiderDetect(ref,hide)

    const selectItem=(type:number)=>{
        setVisible(false)
        switch (type) {
            case 0:
                dispatch(sortByTitle())
                break;
            case 1:
                dispatch(sortByAuthor())
                break;
            default:
                break;
        }
    }

  
    return (
    <div className='filter_container' ref={ref}>
        <div className='filter_Choose' onClick={()=>setVisible(!visible)}>
            <FaSortAlphaDown/>
            <div className="row">
                <span>{select}</span>
                {visible
                ?<IoIosArrowDropup onClick={hide}/>
                :<IoIosArrowDropdown onClick={show}/>

                }
            </div>

        </div>
        <div className="drop_container" style={{display:visible ?'flex' :'none'}}>
            <div className="drop_container_items">
                <div className='drop_container_item' onClick={()=>selectItem(0)}>                                
                    <span>Title</span>           
                </div> 
                <div className='drop_container_item' onClick={()=>selectItem(1)}>                                
                    <span>Author</span>           
                </div>
                {/* <div className='drop_container_item' onClick={()=>selectItem(2)}>                                
                    <span>Remove Sort</span>           
                </div> */}
            </div>            
        </div>
    </div>
  );
}
