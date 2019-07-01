import React, {Component} from 'react';
import './App.css';
import Home from './Home/Home';

class Main extends Component {

    constructor() {
        super();

        this.state = {
        }
    }

    render() {
        return (
            <div className="App">
                <Home />
            </div>
        );
    }
}

export default Main;
