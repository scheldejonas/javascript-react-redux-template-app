/**
 * Created by scheldejonas on 02/04/2017.
 */
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PostActionCreators from '../actions/post';
import { Row, Col } from 'react-materialize';
import Post from '../components/Post';

class Archive extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired
    ,selectedPostIndex: PropTypes.number.isRequired
  };

  render() {
    const { dispatch, posts, selectedPostIndex } = this.props;
    const addPost = bindActionCreators(PostActionCreators.addPost, dispatch);
    const removePost = bindActionCreators(PostActionCreators.removePost, dispatch);
    const updatePostScore = bindActionCreators(PostActionCreators.updatePost, dispatch);
    const selectPost = bindActionCreators(PostActionCreators.selectPost, dispatch);

    let selectedPost;
    if (selectedPost !== -1) {
      selectedPost = posts[selectedPostIndex];
    }

    const postComponents = posts.map((post, index) => (
      <Post
        index={index}
        name={post.name}
        description={post.description}
        image_url={post.image_url}
        key={post.name}
        updatePostScore={updatePostScore}
        removePost={removePost}
        selectPost={selectPost}
      />
    ));
    return (
      <div className="container">
        <Row>
          <Col s={12} m={12} l={12}>
            {/*<Topbar selectedPost={selectedPost} />*/}
          </Col>
        </Row>
        <Row>
          { postComponents }
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    posts: state.posts,
    selectedPostIndex: state.selectedPostIndex
  }
);

export default connect(mapStateToProps)(Archive);