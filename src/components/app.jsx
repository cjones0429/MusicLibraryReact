import axios from 'axios';
import React, { Component } from 'react';
import MusicTable from './MusicTable/musicTable';
import SongForm from './SongForm/songForm';
import SearchBar from './SearchBar/searchBar';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            songs: [],
            currentSongs: []
        }
    }

    componentDidMount(){
        this.getAllSongs();
        console.log(this.getAllSongs)
    }

    async getAllSongs(){
        
        let response = await axios.get('http://127.0.0.1:8000/music/');
        this.setState({
            songs: response.data,
            currentSongs: response.data
        });
    }

    async addSong(song){
        await axios.post('http://127.0.0.1:8000/music/', song);
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

    // addNewSong(song){
    //     this.songs.push(song);
    //     this.setState({
    //         songNumber: this.songs.length - 1
    //     });
    // }

    // async addNewSong(song){
    //     axios.post('http:127.0.0.1:8000/music/', song);
    //     this.getAllSongs();
    // }
    
    // async addSong(title, artist, album, release_date, genre){
    //     let newSong = {
    //         title: title,
    //         artist: artist,
    //         album: album,
    //         release_date: release_date,
    //         genre: genre
    //     }
    //     try{
    //         let result = await axios.post('http:127.0.0.1:8000/music/', newSong)
    //         newSong.id = result.data.id
    //         this.setState({songs: [...this.state.songs, newSong]})
    //     }
    //     catch (ex) {
    //         console.log("error creating song");
    //     }
    // }

    // addSong = song => {
    //     console.log("add song method")
    //     axios.post('http:127.0.0.1:8000/music/', song)
    //       .then(response => {
    //         this.setState({
    //             title: '',
    //             artist: '',
    //             album: '',
    //             release_date: '',
    //             genre: '',});
    //         })
    //       .catch(error => console.log(error));
    //     }

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
                <MusicTable songs={this.state.songs} delete={this.delete}/>
                <SearchBar songs={this.state.songs} filterSongs={this.filterSongs}/>
                <SongForm addSong={this.addSong.bind(this)}/>
            </div>
        );
    }    
}

export default App;