import React from 'react';
import './musicTable.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function MusicTable(props) {
    console.log(props)
    return(
        <div className='container'>
            <br/>
            <center>
            <h1>Caitlin's Music Library</h1>
            </center>
            <table className="table" width="100%">
                <thead className="table-dark">
                    <tr>
                        <th>I.D.</th>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                        <th>Genre</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.songs.map((song, index) => (
                        <tr data-index={index} key={song.id}>
                            <th scope="row">{song.id}</th>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.genre}</td>
                            <td><button type ="button" className="btn btn-outline-success" onClick={() => {props.likeSong(props.songid, props.title)}}>Like</button></td>
                            <td><button type ="button" className="btn btn-outline-primary" onClick={() => {props.editSong(props.songid)}}>Edit</button></td>
                            <td><button type="button" className="btn btn-outline-danger" onClick={() => {props.deleteSong(song.id)}}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MusicTable;