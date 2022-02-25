import React from "react"
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";
import routes from "./routing";
type route ={
  path?: string;
  component?: any;
  routes?: string;
};

const Routes = (): React.ReactElement<unknown> => {
  return (
    <Router>
        <Switch>
        
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      
        {routes.map((route:route) => {
            const Component = route.component;
            return <Route
                key={route.path}
                path={route.path}
                element={<Component routes={route.routes}/>}
            />
        })}
      </Switch>
              
      
    </Router>
  )
}

export default Routes

