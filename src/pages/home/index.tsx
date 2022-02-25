import {  useEffect } from "react";
import PoemCard from "../../components/poemCard";
import { useGetPoemListRandomlyQuery } from "../../services/poemList";
import { BiLoaderAlt } from "react-icons/bi";
import './style.css'
import ListView from "../../components/listView";
import { poem, setPoemList, triggerCallApi } from "../../store/poemSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import HeaderHome from "../../components/headerHome";

function Home() {
  
    const dispatch = useAppDispatch()

    const callApi=useAppSelector(state=>state.poemList.callApi)
    const poemList=useAppSelector(state=>state.poemList.poemList)


    const { data, isLoading } = useGetPoemListRandomlyQuery(callApi,{skip:!callApi})

    const fetchData=()=>{
      dispatch(triggerCallApi())
    }

    useEffect(()=>{ 
      if(poemList.length===0 && data){
        dispatch(setPoemList(data))
      }      
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data])



    return (
      <>
      {isLoading
        ?
        <div className="list-conatiner">
          <HeaderHome title="Poem List"/>
          <div className="center-container"> 
            <BiLoaderAlt className="loading-view"/>
          </div>
        </div>      
        :null

      }
      {poemList.length>0
        ?
        <div className="list-conatiner">
          <HeaderHome title="Poem List"/>
          <ListView>  
           {             
            poemList.map((item:poem)=>(
              <PoemCard 
              key={item.title}
              title={item.title} 
              author={item.author} 
              lines={item.lines} 
              linecount={item.linecount} 
              like={item.like}
              />
            ))
          }          
            </ListView>
        </div>
        :(!isLoading && poemList.length===0) 
          ?
          <div className="list-conatiner">
            <HeaderHome title="Poem List"/>
            <div className="center-container">   
              <div className="click-view">
                <p>if you want to see poems list press the below button :)</p>
                <button onClick={fetchData}>fetch data</button>
              </div>
            </div>   
          </div> 
          :null
      }
      
      </>
    );
  }
  
  export default Home;
  