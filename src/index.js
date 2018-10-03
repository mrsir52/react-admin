import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import {
    NavLink,
    Link,
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';



import './index.css'
import App from "./App";


ReactDOM.render(

        <Router>
            <Fragment>
                <nav className="pa3 pa4-ns">
                    <Link
                        className="link dim black b f6 f5-ns dib mr3"
                        to="/"
                        title="App"
                    >
                        Home
                    </Link>
                </nav>
                <div className="fl w-100 pl4 pr4">
                    <Switch>
                        <Route exact path="/" component={App} />
                    </Switch>
                </div>
            </Fragment>
        </Router>,
    document.getElementById('root'),
)