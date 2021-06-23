import React, { Component } from 'react';
import axios from 'axios';
import MusicTable from './MusicTable/musicTable';
import SongForm from './SongForm/songForm';
// import SearchBar from './SearchBar/searchBar';

class App extends Component {
    state = {
        songs: [],
        searchField: []
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
    
    editSong = async (id) => {
        console.log(this.props)
        await axios.put(`http://127.0.0.1:8000/music/${id}/`)
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
 
    likeSong = async (id, title) => {
        await axios.patch(`http://127.0.0.1:8000/music/${id}/${title}/`)
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

    render() {
        // for filter song method -- non functional
        // const {songs, searchField} = this.state.songs
        // const filteredSongs = songs.filter(song =>(
        //     song.title.toLowerCase().includes(searchField.toLowerCase()) ||
        //     song.artist.toLowerCase().includes(searchField.toLowerCase()) ||
        //     song.album.toLowerCase().includes(searchField.toLowerCase()) ||
        //     song.genre.toLowerCase().includes(searchField.toLowerCase()) ||
        //     song.release_date.toLowerCase().includes(searchField.toLowerCase())
        // ))

        return(
            <div className="App">
                {/* <SearchBar placeholder="Search Here" handleChange={(e) => this.setState({searchField:e.target.value})}/> */}

                <MusicTable songs={this.state.songs} deleteSong={this.deleteSong}/>
                
                <SongForm addSong={this.addSong.bind(this)}/>
            </div>
        );
    }    
}

export default App;

