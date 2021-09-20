import NewCars from "./components/newcars/NewCars";
import OldCars from "./components/oldcars/OldCars";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import Contact from "./components/contact/Contact";
import CarDetails from './components/cardetails/Cardetails';
import Page404 from "./components/reusable/404Page";

const Routes = () =>{
    return(
        <Router>
            <Switch>
                <Route path="/" exact>
                    <OldCars />
                </Route>
                <Route path="/newcars">
                    <NewCars />
                </Route>
                <Route path="/contact" exact>
                    <Contact />
                </Route>
                <Route path="/car-details/:id">
                    <CarDetails />
                </Route>
                <Route path="/error">
                    <Page404 />
                </Route>
            </Switch>
        </Router>
    );
}
export default Routes;