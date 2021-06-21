import axios from 'axios';
import React, { Component } from 'react';
import MusicTable from './MusicTable/musicTable';
// import SongForm from './SongForm/songform';

class App extends Component {
    state = { 
        songs: []
    }

    componentDidMount(){
        this.getAllSongs();
        console.log(this.getAllSongs)
    }

    async getAllSongs(){
        let response = await axios.get("http:127.0.0.1:8000/music/");
        this.setState({
            songs: response.data
        });
    }

    // addSong = async(song) => {
    //     await axios.post(`http:127.0.0.1:8000/music/`, song);
    //     this.getAllSongs();
    // }

    // deleteSong = async(songId) => {
    //     await axios.delete(`http:127.0.0.1:8000/music/${songId}/`);
    //     this.getAllSongs();
    // }
    
    render() {
        return(
            <div className="App">
                <MusicTable songs={this.state.songs}/>
            </div>
        );
    }    
}

export default App;