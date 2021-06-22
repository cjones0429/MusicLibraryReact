import React from 'react';
import './musicTable.css';

function MusicTable(props) {
    console.log(props)
    return(
        <div className='container'>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                        <th>Genre</th>
                        <th>Likes</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.songs.map((song, index) => (
                        <tr data-index={index} key={song.id}>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.genre}</td>
                            <td>{song.likes}</td>
                            <td><button className="btn" onClick={() => this.deleteSong(song.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MusicTable;