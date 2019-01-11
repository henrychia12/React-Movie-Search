import React, { Component } from 'react';
import axios from 'axios';


class MovieDB extends Component{
    constructor(){
        super();
        this.state = {
            movie: null

        }
    }

    componentDidUpdate() {
        let search1= this.props.searchOne;
        axios({
            method: 'get',
            url: 'http://www.omdbapi.com/?s=' + search1 + '&apikey=f5594988',
            responseType: 'json'
        })
        .then(response => {  
              console.log(this.state.movie)
            if(response.data.Search !== undefined){
    this.setState({
        movie: response.data.Search,
    })
        }else{
            this.setState({
                movie: ( [
                    {
                        "Title": "NULL",
                        "Year": "NULL",
                        "Poster": "Null"
                    }]),
            })
            
        }
     });

    }

    render(){

        return(
            <div className="App">
            <h3>Movie Title:</h3>
                {(this.state.movie !== null)?this.state.movie[0].Title : null}
            <h3>Year:</h3>
                {(this.state.movie !== null)?this.state.movie[0].Year : null}
            <h3>Image:</h3>
                {(this.state.movie !== null)?<img src = {this.state.movie[0].Poster}/> : null}


            
            </div>
        )
    }
}

export default MovieDB;
