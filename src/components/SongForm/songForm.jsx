import React, { Component } from 'react';
import './songForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class SongForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            artist: '',
            album: '',
            release_date: '',
            genre: '',
            // likes: ''
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
        event.preventDefault();
        const song = {
            title: this.state.title,
            artist: this.state.artist,
            album: this.state.album,
            release_date: this.state.release_date,
            genre: this.state.genre,
            // likes: this.state.likes
        }
        this.props.addSong(song);
        this.setState({
            title: '',
            artist: '',
            album: '',
            release_date: '',
            genre: '',
            // likes: ''
        });
    }

    render() {
        return (
            <div className="form-box container">
                <center>
                    <br/>
                    <h3> Add a New Song </h3>
                </center>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="title">
                                <Form.Label>Song Title:</Form.Label>
                                <Form.Control type="text" placeholder="Enter Song" name="title" onChange={this.handleChange} value={this.state.title}/>
                            </Form.Group>
                            <br/>
                            <Form.Group controlId="artist">
                                <Form.Label>Artist:</Form.Label>
                                <Form.Control type="text" placeholder="Artist" name="artist" onChange={this.handleChange} value={this.state.artist}/>
                            </Form.Group>
                            <br/>
                            <Form.Group controlId="album">
                                <Form.Label>Album:</Form.Label>
                                <Form.Control type="text" placeholder="Album" name="album" onChange={this.handleChange} value={this.state.album}/>
                            </Form.Group>
                            <br/>
                            <Form.Group controlId="release_date">
                                <Form.Label>Release Date:</Form.Label>
                                <Form.Control type="text" placeholder="example: 2020-10-03T00:00:00Z" name="release_date" onChange={this.handleChange} value={this.state.release_date}/>
                            </Form.Group>
                            <br/>
                            <Form.Group controlId="genre">
                                <Form.Label>Genre:</Form.Label>
                                <Form.Control type="text" placeholder="example: Country, Pop, Hip Hop, RnB, etc" name="genre" onChange={this.handleChange} value={this.state.genre}/>
                            </Form.Group>
                            <br/>
                            <Button variant="primary" type="submit">Add Song</Button>
                        </Form>
                        <br/>
            </div>
        );
    }
}

export default SongForm;