import {React, useState, useEffect} from 'react';
import {HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Form from "./components/Form/main"
import Admin from "./components/Form/formAdmin/Admin"
import Details from "./components/Form/formAdmin/details"

function Routes() { 
    const [uname, setuname] = useState("devi");
    const [ready, setready] = useState(true)

    useEffect(() => {
        
    }, [])

    return (
        <div>
            <HashRouter>
                    
                    { ready && 
                    ( <Switch>
                        <Route exact path='/' component={()=> <Home />} />
                        {/* <Route exact path='/login' component={Login} />
                        <Route exact path='/register' component={Register} />  */}
                        <Route exact path='/user' component={Form} />
                        <Route exact path='/admin' component={Admin} />
                        <Route exact path='/admin/details' component={Details} /> 
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

export default Routes
