import React, {Component} from "react";
import Searchbar from './Searchbar/Searchbar';
//import ImageGallery from './ImageGallery/ImageGallery';
//import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
//import Loader from './Loader/Loader';
//import Button from './Button/Button';
//import Modal from './Modal/Modal';

import { fetchImage } from "./Api/Api";





export class App extends Component {

  state = {
    searchQuery: '',
    loading: false
  }

  handleSearchSubmit = searchQuery => {
    console.log(searchQuery)
    this.setState({searchQuery});
  }

  async componentDidMount() {
    this.setState({loading: true})

    fetchImage()
    
    //.then(res => res.json())
    .then(searchQuery => this.setState({searchQuery})).finally(() => this.setState({loading: false}));  
  }
  
  render() {

  return (
    <section>
    
    <Searchbar onSearchSubmit={this.handleSearchSubmit}/>
    {this.state.loading && <h1> Загружаем....</h1>}

    {/*<ImageGallery />

    <ImageGalleryItem />

    <Loader />

    <Button />

  <Modal />*/}

    </section>
    
          
  );
};
}