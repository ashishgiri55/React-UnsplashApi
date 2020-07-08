import React, { Component, Fragment } from 'react'
import SearchComponent from './Component/SearchComponent';
import unsplash from "./Api/unsplash-api";
import ImageList from "./Component/imageList";

class App extends Component{
    constructor(props) {
        super(props);
        this.state ={ 
           images : [],
           loading : false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    async handleSubmit(term){
        let responseFromunsplashapi = await unsplash.get("/search/photos",{
            params : {
                query : term,
            },
        });
       this.setState({
           images: responseFromunsplashapi.data.results,
           loading : true,
       });
    }
    render() {
        return (
            <Fragment>
               <SearchComponent Submit={this.handleSubmit} />
               <ImageList Images = {this.state} />
            </Fragment>
        );
    }
}

export default App;