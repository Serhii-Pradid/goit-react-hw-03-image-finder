import React, {Component} from "react";
import css from './Searchbar.module.css'


class Searchbar extends Component {

  state = {
    searchQuery: ''
  }

  handleChange = event => {
    this.setState({searchQuery: event.currentTarget.value.toLowerCase() });
    };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchQuery.trim() === '') {
      alert('Введите запрос');
      return;
    }

    this.props.onSearchSubmit(this.state.searchQuery);
    this.setState({searchQuery: ''})
    };

   reset = () => {
    this.setState({searchQuery: ''})
 }
 
    render() {

    return (
<header className={css.Searchbar}>

  <form onSubmit={this.handleSubmit} className={css.SearchForm}>
    <button type="submit" className={css.SearchFormButton}>
      <span className={css.SearchFormButtonLabel}>Search</span>
    </button>

    <input
      className={css.SearchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      name='searchQuery'
      value={this.state.searchQuery}
      onChange={this.handleChange}
    />
  </form>
</header>

    );
}
}

export default Searchbar;