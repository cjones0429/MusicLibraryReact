import axios from 'axios';
import React, { Component } from 'react';
import MusicTable from './MusicTable/musicTable';
import SongForm from './SongForm/songForm';
import SearchBar from './SearchBar/searchBar';

class App extends Component {
    state = {
        songs: [],
        filteredSongs: []
    }

    componentDidMount(){
        this.getAllSongs();
        console.log(this.getAllSongs)
    }

    async getAllSongs(){
        
        let response = await axios.get(`http://127.0.0.1:8000/music/`);
        this.setState({
            songs: response.data
        });
    }

    addSong = async (song) => {
        await axios.post(`http://127.0.0.1:8000/music/`, song);
        let response = await this.getAllSongs()
        if(response === undefined){
            this.setState({
            
            })
        }
        else{
            this.setState({
                songs: response.data
            });
        }
    }

    deleteSong = async (id) => {
        console.log(this.props)
        await axios.delete(`http://127.0.0.1:8000/music/${id}/`)
        let response = await this.getAllSongs()
        if(response === undefined){
            this.setState({
                
            });
        }
        else{
            this.setState({
                songs: response.data
            });
        }
    }

    // async deleteSong(songId){
    //     await axios.delete(`http:127.0.0.1:8000/music/${songId}/`);
    //     this.getAllSongs();
    // }
    
    filterSongs = (filteredSongs) => {
        this.setState({
            currentSongs: filteredSongs
        })
    }

    render() {
        return(
            <div className="App">
                <MusicTable songs={this.state.songs} deleteSong={this.deleteSong}/>
                <SearchBar songs={this.state.songs} filterSongs={this.filterSongs}/>
                <SongForm addSong={this.addSong.bind(this)}/>
            </div>
        );
    }    
}

export default App;