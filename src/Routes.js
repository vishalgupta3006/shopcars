import NewCars from "./components/newcars/NewCars";
import OldCars from "./components/oldcars/OldCars";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import Contact from "./components/contact/Contact";

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