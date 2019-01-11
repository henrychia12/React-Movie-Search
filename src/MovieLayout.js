import React, { Component } from 'react';
import MovieDB from './MovieDB';

class MovieLayout extends Component {

    constructor(){
        super();
        this.state ={
            movieTitle: null
        }
    }
    search = (movie) => {
        this.setState({
            movieTitle: movie.target.value

        });

    }

        render() {
            return (
                <div className="App">
                    <header className="App header">
                <h2>Movie Search:</h2>
                <input type="text" placeholder="Movie title" id="selection" onChange={this.search}></input> 
                <MovieDB searchOne={this.state.movieTitle}/>  
                </header>
                </div>
                
               
            );
        }
}

export default MovieLayout;