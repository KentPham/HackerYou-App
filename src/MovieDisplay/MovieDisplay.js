import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import axios from 'axios'

class MovieDisplay extends Component {

    constructor() {
        super();

        this.state = {
            isLoaded: false,
            property: [],
        }
    }

    componentDidMount() {
        const api = "https://api.themoviedb.org/3/discover/movie?api_key=5d6e435006b5cc62dd8e122bf3643bad&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=2019-06-28&year=2019"
        fetch(api)
            .then(results => {
                return results.json();
            }).then(data => {
            this.setState({property: data})
        })
    }

    componentDidUpdate() {
        if (this.state.property.total_pages && !this.state.isLoaded) {
            this.getData();
        }
    }

    formatDate = () => {
        let d = new Date();
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        let year = d.getFullYear();

        if (month.length < 2) {
            month = '0' + month;
        }
        if (day.length < 2) {
            day = '0' + day;
        }

        return [year, month, day].join('-');
    }

    getData = () => {
        let fullData = [];
        let parseData = [];
        let nums = [];

        for (let i = 1; i < this.state.property.total_pages; i++) {
            nums.push(i);
        }

        let queries = nums.map(num => `https://api.themoviedb.org/3/discover/movie?api_key=5d6e435006b5cc62dd8e122bf3643bad&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${num}&release_date.gte=${this.formatDate()}&year=2019"`)

        axios.all(queries.map(axios.get))
            .then(data => {
                fullData = (data.map(result => result.data));

                fullData.map(data => {
                    data.results.map(result => {
                        parseData.push(result);
                    })
                })

                this.setState({property: parseData, isLoaded: true})
            })
    }

    render() {
        let output;

        if (this.state.isLoaded) {
            const movieList = this.state.property.filter(movie => movie.popularity >= 10);

            output = movieList.map(movie => {
                if (movie.poster_path != null) {
                    return (
                        <div className="col-12 col-lg-3 col-md-4 col-sm-6 py-2">
                            <a href={`/Movie/${movie.id}`}>
                                <img
                                    className="selection-container px-2"
                                    src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
                                />
                                <h2 style={{textDecoration: "none", color: "black"}}>{movie.title}</h2>
                            </a>
                        </div>
                    )
                } else {
                    return (
                        <div className="col-md-4 col-lg-3 col-sm-6 py-2 text-poster-container">
                            <h2>{movie.title}</h2>
                            <h3>Movie poster not available</h3>
                        </div>
                    )
                }
            })
        }

        return (
            <div className="App">
                <div className="movie-container">
                    <div className="container">
                        <div style={{padding: "50px 0px"}}>
                            <h1>Upcoming Movies</h1>
                        </div>
                    </div>
                    <div className="container scroller-container">
                        <div className="row movie-scroller">
                            {output}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(MovieDisplay);
