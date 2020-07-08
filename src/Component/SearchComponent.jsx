import React, { Component, Fragment } from 'react'
 class SearchComponent extends Component{
     constructor(props){
         super(props);
         this.state ={
             term:"",
         };
         this.changeColor = React.createRef();
     }
    componentDidMount(){
        this.changeColor.current.style.background = "#eee";
        this.changeColor.current.focus();
    }
    handleChange = (e) =>{
        this.setState({term: e.target.value});
    };
    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state.term);
        this.props.Submit(this.state.term);
    };
    
     render() {
         return(
             <Fragment>
               <div className="card">
                   <div className="card-body">
                       <form onSubmit={this.handleSubmit}>
                           <input 
                           ref = {this.changeColor}
                           type="text"
                            className="form-control" 
                            placeholder="Search Images"
                            value={this.state.term}
                            onChange={this.handleChange}/>
                           
                            <button>Search</button>
                       </form>
                   </div>
               </div>
             </Fragment>
         );
             
         
     }
 }
 export default SearchComponent;
