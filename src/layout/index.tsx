import './style.css'

function MainLayout(props:any) {
    return (
      <div className="layout-container">
        <div className="componets-container">
            {props.children}
        </div>
      </div>
    );
  }
  
  export default MainLayout;
  