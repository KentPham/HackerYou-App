import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

class Movie extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "",
            id: this.props.match.params.movieID,
            picture: "",
            description: "",
            releaseDate: "",
            taglines: "",
            runtime: "",
            genre: ""
        }
    }

    componentDidMount() {
        const api = "https://api.themoviedb.org/3/movie/" + this.state.id + "?api_key=5d6e435006b5cc62dd8e122bf3643bad&language=en-US"
        let genre = [];
        fetch(api)
            .then(results => {
                return results.json();
            }).then(data => {
            data.genres.map(names => genre.push(names.name));
            this.setState({
                title: data.title,
                picture: "https://image.tmdb.org/t/p/original" + data.poster_path,
                description: data.overview,
                releaseDate: data.release_date,
                taglines: data.tagline,
                runtime: data.runtime,
                genre: genre
            })
        })
    }


    render() {
        const {genre, picture, title,releaseDate, runtime, taglines, description} = this.state
        const stringGenre = genre.toString().replace(/,/g, ', ');

        return (
            <div className="movie-container">
                <div className="row">
                    <div className="col-5 poster-container">
                        <img width="100%" height="100%" src={picture}/>
                    </div>
                    <div className="col-7" style={{textAlign: "left"}}>
                        <div className="info-container">
                            <div className="row">
                                <h1>{title}</h1>
                            </div>
                            <div className="row">
                                <h3>Coming to theaters: {releaseDate}</h3>
                            </div>
                            <div className="row">
                                <h4>Runtime: {runtime} minutes</h4>
                            </div>
                            <div className="row">
                                <h4>Tags: {taglines}</h4>
                            </div>
                            <div className="row">
                                <h4>Genre: {stringGenre}</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row description-title">
                    <div className="col-12">
                        <h2>Overview</h2>
                    </div>
                </div>
                <div className="row description-title">
                    <div className="col-12">
                        <h3>{description}</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Movie);
