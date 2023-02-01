import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  render() {
    return (
      <div className="search-bar form-group has-search">
        <span className="fa fa-search form-control-feedback"></span>
        <input
          type="text"
          placeholder="Search"
          value={this.state.term}
          onChange={(event) => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchVideos(term);
  }
}

export default SearchBar;
