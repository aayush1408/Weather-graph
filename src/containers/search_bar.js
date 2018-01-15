import React from 'react';

export default class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {term:' '}
    }
    onInputChange(e){
        this.setState({
            term:e.target.value
        })
    }
    onSubmitForm(e){
        e.preventDefault();
    }
    render(){
        return(
               <form className="input-group" onSubmit={this.onSubmitForm} >
                   <input 
                   placeholder="Enter your favourite city"
                   className="form-control"
                   value={this.state.term}
                   onChange={this.onInputChange.bind(this)}
                   />
                   <button className="btn btn-sm btn-primary">Submit</button>
               </form>
               )
    }
}
