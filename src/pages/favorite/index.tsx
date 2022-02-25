import HeaderSimple from "../../components/headerSimple";
import ListView from "../../components/listView";
import PoemCard from "../../components/poemCard";
import { useAppSelector } from "../../hooks";
import { poem } from "../../store/poemSlice";

function Favorit() {
    const favoritList=useAppSelector(state=>state.poemList.favoritList)

    return (
      <div className="list-conatiner">
      <HeaderSimple title="Favorit List"/>
      <ListView>
        {favoritList.map((item:poem)=>(
          <PoemCard 
          favorit={true}
          key={item.title}
          title={item.title} 
          author={item.author} 
          lines={item.lines} 
          linecount={item.linecount} 
          />
        ))}
      </ListView>
      </div>
    );
  }
  
  export default Favorit;
  