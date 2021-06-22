import React from 'react';

function deleteSong(props){
    return(
        <div>
            <button onClick={() => props.deleteSong(props.songId)}>Delete</button>
        </div>
    )
}

export default deleteSong;