import React, {Component} from "react";
import {ToastContainer} from 'react-toastify';
import Searchbar from './Searchbar/Searchbar';
import {ImageGallery} from './ImageGallery/ImageGallery';

import {Loader}from './Loader/Loader';
import {Button} from './Button/Button';
//import Modal from './Modal/Modal';

import { fetchImage } from "./Api/Api";

export class App extends Component {

  state = {
    searchQuery: '',
    page: 1,
    loading: false,
    images: [],
    per_page: 12,
    loadMore: false,
    error: null,
      }

  handleSearchSubmit = searchQuery => {
    //console.log(searchQuery)
    this.setState({
      searchQuery,
      images: [],
      page: 1,
      loadMore: false
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;
    
    if(prevState.searchQuery !== searchQuery || prevState.page !== page) {
       this.getImages(searchQuery, page)
       console.log(searchQuery)
      }
  };

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
    } catch (error) {                          // приймає меседж
      this.setState({ error: error});          // створюємо новий об"єкт
    } finally {
      this.setState({ loading: false });
    }
  };

  onLoadMore = () => {
    this.setState(prevState => ({page: prevState.page + 1}))
    };

  render() {
    
    const {loading, images, loadMore} = this.state;

  return (
    <section>
    <Searchbar onSearchSubmit={this.handleSearchSubmit}/>
    <ToastContainer autoClose={3000}/>

    {loading && <Loader /> } 

     <ImageGallery images={images} />
    
    {loadMore && <Button onloadMore={this.onLoadMore} />}
    

   {/*
    

    

  <Modal />*/}

    </section>
    
          
  );
};
}