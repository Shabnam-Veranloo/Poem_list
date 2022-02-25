import './style.css'

type listView={
    children:any
}

function ListView(props:listView) {
    const{children}=props
    return (
      <div className='list-view-container'>
        <div className="list-view">
          {children}
        </div>
      </div>
    );
  }
  
  export default ListView;
  