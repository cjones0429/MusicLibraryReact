import React, { Component } from 'react';
// import './searchBar.css';

class SearchBar extends Component {
    constructor(props){
        super(props);
            this.state = {
                filterLibrary: '',
            }
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            filterLibrary: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.filterSongs(this.state.filterLibrary);
    }

    render(){
        return(
            <div style={{float:'right'}}>
                <br/>
            <form className="search-bar" onSubmit={(event) => this.handleSubmit(event)}>
                <div>
                <label>Search Here: </label>
                <input type="text" className="search-form" value={this.filterLibrary} onChange={this.handleChange}/>
                </div>
            </form>
            </div>
        )
    }
}

export default SearchBar;