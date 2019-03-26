import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ScrollToTop from './scrollToTop';

import { Resume } from "./resume";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFinTech: false
        };
        this.changeVersionHandler = this.changeVersionHandler.bind(this);
    }
    changeVersionHandler() {
        this.setState({isFinTech: !this.state.isFinTech})
    }
    render() {
        return (
            <Resume changeVersionHandler={this.changeVersionHandler} isFinTech={this.state.isFinTech}/>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

