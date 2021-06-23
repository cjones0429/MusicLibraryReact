import React, { Component } from 'react';
import axios from 'axios';
import MusicTable from './MusicTable/musicTable';
import SongForm from './SongForm/songForm';
import SearchBar from './SearchBar/searchBar';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    state = {
        songs: []
    }


    componentDidMount(){
        this.getAllSongs();
        console.log(this.getAllSongs)
    }

    async getAllSongs(){
        
        let response = await axios.get(`http://127.0.0.1:8000/music/`);
        this.setState({
            songs: response.data,
        });
    }

    addSong = async (song) => {
        await axios.post('http://127.0.0.1:8000/music/', song)
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

    filterSongs = (filterLibrary) => {
        const songFilter = this.state.songs.filter(song => 
        song.title.toLowerCase().includes(filterLibrary.toLowerCase()) ||
        song.artist.toLowerCase().includes(filterLibrary.toLowerCase()) ||
        song.album.toLowerCase().includes(filterLibrary.toLowerCase()) ||
        song.release_date.toLowerCase().includes(filterLibrary.toLowerCase()) ||
        song.genre.toLowerCase().includes(filterLibrary.toLowerCase())
    )
        this.setState({
            songs: songFilter
        });
    }
    
    // EDIT NOT FUNCTIONAL - PLANS FOR FUTURE
    // editSong = async (id) => {
    //     console.log(this.props)
    //     await axios.put(`http://127.0.0.1:8000/music/${id}/`)
    //     let response = await this.getAllSongs()
    //     if(response === undefined){
    //         this.setState({
                
    //         });
    //     }
    //     else{
    //         this.setState({
    //             songs: response.data
    //         });
    //     }
    // }
    
    // LIKE NOT FUNCTIONAL - PLANS FOR FUTURE
    // likeSong = async (id, title) => {
    //     await axios.patch(`http://127.0.0.1:8000/music/${id}/${title}/`)
    //     let response = await this.getAllSongs()
    //     if(response === undefined){
    //         this.setState({
                
    //         });
    //     }
    //     else{
    //         this.setState({
    //             songs: response.data
    //         });
    //     }
    // }

    render() {
        return(
            <div className="container">
                <SearchBar filterSongs={this.filterSongs}/>

                <MusicTable songs={this.state.songs} deleteSong={this.deleteSong}/>
                
                <SongForm addSong={this.addSong.bind(this)}/>
            </div>
        );
    }    
}

export default App;

