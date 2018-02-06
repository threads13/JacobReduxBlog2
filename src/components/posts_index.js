import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import '../style/style.css';

class PostsIndex extends Component {
  componentDidMount(){
    this.props.fetchPosts();
  }

  renderPosts(){
    return _.map(this.props.posts, post => {
      return (
        <li style={{marginTop: '1em'}} className="list-group-item" key={post.id}>
          <Link to={`/pots/%{id}`}>
            {post.title}
          </Link>
          <p style={{marginTop: '0.3em'}}>
            {post.categories}
          </p>
          <p style={{marginTop: '1em'}}>
            {post.content}
          </p>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div style={{marginTop: '2em'}} className="post-index text-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h2>Posts</h2>
        <ul style={{maxWidth: '75%'}} className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
