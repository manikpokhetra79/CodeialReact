import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
class App extends Component {
  componentDidMount() {
    const { posts } = this.props;
    this.props.dispatch(fetchPosts());
  }

  render() {
    return <div className="App"></div>;
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

export default connect(mapStateToProps)(App);
