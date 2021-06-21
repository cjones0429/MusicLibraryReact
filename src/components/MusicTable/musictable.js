import React from 'react';
import './musicTable.css';

const MusicTable = (props) => {
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>I.D.</th>
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
                    {props.songs.map((song) =>
                        <tr key={song.id}>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.genre}</td>
                            <td>{song.likes}</td>
                            <td><button className="btn btn-danger" onClick={props.deleteSong.bind(this, song.id)}>Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default MusicTable;