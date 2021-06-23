import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function deleteSong(props){
    return(
        <div>
            <button onClick={() => props.deleteSong(props.songid)}>Delete</button>
        </div>
    )
}

export default deleteSong;