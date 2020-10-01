import React from "react";
import "./index.css";
import { Router, Route, browserHistory } from 'react-router';
import Home  from './Pages/Home'
import Login from './Pages/Login'
import Annotate from './Pages/Annotate'
import Root from './Pages/Root'




class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { token: '' }
        this.handleToken = this.handleToken.bind(this);
    }

    handleToken(t) {
        console.log('yes');
        this.setState({ token: t });
        console.log(this.state.token);
    }

    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Root}>
                    <Route path="/home" component={() => <Home handleToken={this.handleToken} />} />
                    <Route path="/login" component={Login} />
                    <Route path="/annotate" component={Annotate} />
                </Route>
            </Router>
        );
    }
};

export default App;
