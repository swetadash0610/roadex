import {React, useState, useEffect} from 'react';
import {HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Form from "./components/Form/main"
import Admin from "./components/Form/formAdmin/Admin"
import Details from "./components/Form/formAdmin/details"
import Auth from "./components/auth/Auth";
import Comp from './components/user/ComplaintForm';
import Head from './components/Includes/Navbar/Navbar';
import Foot from './components/Includes/Footer/Footer';
import Success from './components/Form/formNew/Success';

function Routes({handleLogout}) { 
    const [uname, setuname] = useState("devi");
    const [ready, setready] = useState(true)

    useEffect(() => {
        
    }, [])

    return (
        <div>
            <HashRouter>
                    
                    { ready && 
                    ( <Switch>
                        <Route exact path='/' component={Auth} />
                        {/* <Route exact path='/auth' component={Auth} />  */}
                        <Route exact path='/user' component={Form} />
                        <Route exact path='/admin' component={Admin} />
                        <Route exact path='/admin/details' component={Details} /> 
                        <Route exact path="/comp"> 
                            <Head />
                            <Comp />
                            <Foot/>
                        </Route>
                        <Route exact path='/success' component={Success} />
                        <Route component={Notfound} />
                    </Switch> 
                    )}
            </HashRouter>
        </div>
    )
}

const Notfound = () =>{
return (
    <div>
        <h3>page not found</h3>
    </div>
)
};

export default Routes;
