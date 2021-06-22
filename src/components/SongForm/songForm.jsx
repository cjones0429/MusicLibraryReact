import React, { Component } from 'react';
import './songForm.css';

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

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        const song = {
            title: this.state.title,
            artist: this.state.artist,
            album: this.state.album,
            release_date: this.state.release_date,
            genre: this.state.genre,
            likes: this.state.likes
        }
        this.props.addSong(song);
        this.setState({
            title: '',
            artist: '',
            album: '',
            release_date: '',
            genre: '',
            likes: ''
        })
        event.preventDefault();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addSong(this.state);
    };

    render() {
        return (
            <div className="form-box">
                <form onSubmit={this.handleSubmit}>
                <br />
                <center>
                    <h3> Add a new song </h3>
                </center>
                    <div>
                        <div>
                            <label>Title:</label>
                            <input type="text" name="title" onChange={this.handleChange} value={this.state.title}/>
                        </div>
                        <div>
                            <label>Artist:</label>
                            <input type="text" name="artist" onChange={this.handleChange} value={this.state.artist}/>
                        </div>
                        <div>
                            <label>Album:</label>
                            <input type="text" name="album" onChange={this.handleChange} value={this.state.album}/>
                        </div>
                        <div>
                            <label>Release Date:</label>
                            <input type="date" name="release_date" onChange={this.handleChange} value={this.state.release_date}/>
                        </div>
                        <div>
                            <label>Genre:</label>
                            <input type="text" name="genre" onChange={this.handleChange} value={this.state.genre}/>
                        </div>
                        <div>
                            <button type='submit'>Add Song</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SongForm;