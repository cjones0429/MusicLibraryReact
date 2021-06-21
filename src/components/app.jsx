import React, { Component } from 'react';

class App extends Component {
    state = { 
        songs: []
    }

    componentDidMount(){
        axios.get("http:127.0.0.1:8000/music/").then(function(response){
            console.log(response.data)
        })
    }

    render() {
        return(
            <div> 
                <h1>Our React App Using A Component</h1>
            </div>

        );
    }    
}

export default App;