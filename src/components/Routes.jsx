import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Products from '../pages/Products'
import Candidatura from '../pages/Candidatura'
import Quotas from '../pages/Quotas'
import Queixas from '../pages/Queixas'
import Eventos from '../pages/Eventos'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/customers' component={Customers}/>
            <Route path='/Products' component={Products}/>
            <Route path='/candidatura' component={Candidatura}/>
            <Route path='/quotas' component={Quotas}/>
            <Route path='/queixas' component={Queixas}/>
            <Route path='/eventos' component={Eventos}/>
        </Switch>
    )
}

export default Routes
