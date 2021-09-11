import NewCars from "./NewCars";
import OldCars from "./OldCars";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import Contact from "./contact/Contact";

const Routes = () =>{
    return(
        <Router>
            <Switch>
                <Route path="/" exact>
                    <OldCars />
                </Route>
                <Route path="/newcars" exact>
                    <NewCars />
                </Route>
                <Route path="/contact" exact>
                    <Contact />
                </Route>
            </Switch>
        </Router>
    );
}
export default Routes;