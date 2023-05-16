import React, {Component} from "react";
import {ToastContainer} from 'react-toastify';
import Searchbar from './Searchbar/Searchbar';
import {ImageGallery} from './ImageGallery/ImageGallery';

//import Loader from './Loader/Loader';
import {Button} from './Button/Button';
//import Modal from './Modal/Modal';

import { fetchImage } from "./Api/Api";

export class App extends Component {

  state = {
    searchQuery: '',
    page: 1,
    loading: false,
    images: [],
    //id: null
  }

  handleSearchSubmit = searchQuery => {
    //console.log(searchQuery)
    this.setState({searchQuery});
  }

  componentDidUpdate(prevProps, prevState) {
    
    if(prevState.searchQuery !== this.state.searchQuery || prevState.page !== this.state.page) {
      this.setState({loading: false})
      this.getImages(this.state.searchQuery, this.state.page)
      //fetchImage(this.state.searchQuery, this.state.page)
      //.then(res => res.json())
      //.then(console.log)

      console.log(this.state.searchQuery)
      }
  }

  getImages = async (query, page) => {
    this.setState({ loading: true });
    if (!query) {
      return;
    }
    try {
      const { hits, totalHits } = await fetchImage(query, page);
      console.log(hits, totalHits);
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        loadMore: this.state.page < Math.ceil(totalHits / this.state.per_page),
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  };
  
  render() {

  return (
    <section>
    
    <Searchbar onSearchSubmit={this.handleSearchSubmit}/>
    <ToastContainer autoClose={3000}/>
    {this.state.loading && <h1> Загружаем....</h1>}

    {/*{this.state.searchQuery && */}
    <ImageGallery images={this.state.images} />
    
    <Button />
    

   {/*
    <Loader />

    

  <Modal />*/}

    </section>
    
          
  );
};
}