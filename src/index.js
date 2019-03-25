import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ScrollToTop from './scrollToTop';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Resume } from "./resume";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <ScrollToTop>
                        <Route path="/" exact render={(props) => <Resume {...props} />} />
                    </ScrollToTop>
                </Switch>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

