import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Main";
import MovieDisplay from "./MovieDisplay/MovieDisplay";
import Home from "./Home/Home";
import Movie from "./Movie/Movie";
import Contact from "./Contact/Contact";
import Header from './Header/Header';
import Footer from './Footer/Footer';


class Routes extends Component {

    render() {

        return (
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact component={Main}/>
                    <Route path="/home" exact component={Home}/>
                    <Route path="/movies" exact component={MovieDisplay}/>
                    <Route path="/contact-us" exact component={Contact}/>
                    <Route path="/movie/:movieID" component={Movie}/>
                </Switch>
                <Footer />
            </Router>
        )
    }
}

export default Routes;
