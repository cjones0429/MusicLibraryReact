import React, { Component } from 'react';

class SongForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            artist: '',
            album: '',
            release_date: '',
            genre: '',
            likes: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.func(this.state.title, this.state.artist, this.state.album, this.state.release_date, this.state.genre)
    }
    // handleSubmit(event) {
    //     event.preventDefault();
    //     const song = {
    //         title: this.state.title,
    //         artist: this.state.artist,
    //         album: this.state.album,
    //         release_date: this.state.release_date,
    //         genre: this.state.genre,
    //         likes: this.state.likes
    //     }
    //     this.props.addNewSong(song);
    //     this.setState({
    //         title: '',
    //         artist: '',
    //         album: '',
    //         release_date: '',
    //         genre: '',
    //         likes: ''
    //     });
    // }

    render() {
        return (
            <div>
                <hr />
                <center>
                    <h3> Add a new song </h3>
                </center>
                <form onSubmit={this.handleSubmit}>
                    <div className="row col-align">
                        <div className="col-md-4">
                            <label>Title:</label>
                            <input type="text" name="title" value={this.state.title}
                            onChange={this.handleChange}/>
                        </div>
                        <div className="col-md-4">
                            <label>Artist:</label>
                            <input type="text" name="artist" value={this.state.artist}
                            onChange={this.handleChange}/>
                        </div>
                        <div className="col-md-4">
                            <label>Album:</label>
                            <input type="text" name="album" value={this.state.album}
                            onChange={this.handleChange}/>
                        </div>
                        <div className="col-md-4">
                            <label>Release Date:</label>
                            <input type="date" name="release_date" value={this.state.release_date}
                            onChange={this.handleChange}/>
                        </div>
                        <div className="col-md-4">
                            <label>Genre:</label>
                            <input type="text" name="genre" value={this.state.genre}
                            onChange={this.handleChange}/>
                        </div>
                        <div className="col-md-4">
                            <input type="submit" value="Add Song"/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SongForm;