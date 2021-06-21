import axios from 'axios';
import React, { Component } from 'react';
import MusicTable from './MusicTable/musicTable';
// import SongForm from './SongForm/songform';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            songs: []
        }
    }

    componentDidMount(){
        this.getAllSongs();
        console.log(this.getAllSongs)
    }

    async getAllSongs(){
        let response = await axios.get('http:127.0.0.1:8000/music/');
        this.setState({
            songs: response.data
        });
    }

    async addSong(song){
        await axios.post('http:127.0.0.1:8000/music/', song);
        this.getAllSongs();
    }

    async deleteSong(songId){
        await axios.delete(`http:127.0.0.1:8000/music/${songId}/`);
        this.getAllSongs();
    }
    
    render() {
        return(
            <div className="App">
                <MusicTable songs={this.state.songs}/>
            </div>
        );
    }    
}

export default App;